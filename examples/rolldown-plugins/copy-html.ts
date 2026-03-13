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

import type { Plugin } from 'rolldown';
import { copyFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

function listHtmlFiles(rootDir: string): string[] {
    const out: string[] = [];

    function walk(dir: string) {
        const entries = readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const absPath = join(dir, entry.name);
            if (entry.isDirectory()) {
                walk(absPath);
                continue;
            }

            if (entry.isFile() && entry.name.endsWith('.html')) {
                out.push(absPath);
            }
        }
    }

    walk(rootDir);
    return out;
}

export function copyHtmlPlugin(options: {
    srcDir: string;
    distDir: string;
}): Plugin {
    return {
        name: 'copy-html',
        buildStart() {
            if (!this.meta.watchMode) return;
            const htmlFiles = listHtmlFiles(options.srcDir);
            for (const file of htmlFiles) {
                this.addWatchFile(file);
            }
        },
        writeBundle() {
            const htmlFiles = listHtmlFiles(options.srcDir);
            htmlFiles.forEach((srcFile) => {
                const relPath = relative(options.srcDir, srcFile);
                const distFile = join(options.distDir, relPath);
                mkdirSync(dirname(distFile), { recursive: true });
                copyFileSync(srcFile, distFile);
            });
        },
    };
}
