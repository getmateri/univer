/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { ChildProcess } from 'node:child_process';
import type { Plugin } from 'rolldown';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';

import process from 'node:process';

export function serveDistPlugin(options: {
    distDir: string;
    port?: number;
}): Plugin {
    const require = createRequire(import.meta.url);
    const serveEntry = require.resolve('serve/build/main.js');

    let child: ChildProcess | undefined;
    let installedProcessHooks = false;

    const stop = () => {
        if (!child) return;
        const current = child;
        child = undefined;
        try {
            current.kill(process.platform === 'win32' ? undefined : 'SIGTERM');
        } catch {
            // ignore
        }
    };

    const installProcessHooks = () => {
        if (installedProcessHooks) return;
        installedProcessHooks = true;

        process.once('exit', stop);

        for (const signal of ['SIGINT', 'SIGTERM', 'SIGHUP'] as const) {
            process.once(signal, () => {
                stop();
                try {
                    process.kill(process.pid, signal);
                } catch {
                    // ignore
                }
            });
        }
    };

    return {
        name: 'serve-dist',
        writeBundle() {
            if (!this.meta.watchMode) return;
            if (child) return;

            installProcessHooks();
            mkdirSync(options.distDir, { recursive: true });

            const port =
                options.port
                ?? Number.parseInt(process.env.SERVE_PORT ?? process.env.PORT ?? '4173', 10);

            child = spawn(process.execPath, [serveEntry, options.distDir, '--listen', String(port)], {
                stdio: 'inherit',
            });

            child.once('exit', () => {
                child = undefined;
            });
        },
        closeWatcher() {
            stop();
        },
        closeBundle() {
            if (!this.meta.watchMode) stop();
        },
    };
}
