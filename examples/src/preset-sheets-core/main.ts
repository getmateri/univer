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

import { UniverSheetsCorePreset } from '@univerjs/preset-sheets-core';
import sheetsCoreZhCN from '@univerjs/preset-sheets-core/locales/zh-CN';
// import { UniverSheetsSortPreset } from '@univerjs/preset-sheets-sort';
// import sheetsSortZhCN from '@univerjs/preset-sheets-sort/locales/zh-CN';
import { createUniver, defaultTheme, LocaleType, mergeLocales } from '@univerjs/presets';
import { UniverSheetsZenEditorPlugin } from '@univerjs/sheets-zen-editor';
import sheetsZenEditorZhCN from '@univerjs/sheets-zen-editor/locale/zh-CN';
import ImportCSVButtonPlugin from './custom-plugin/import-csv-button';
import '../global.css';

const { univerAPI } = createUniver({
    locale: LocaleType.ZH_CN,
    locales: {
        zhCN: mergeLocales(
            sheetsCoreZhCN,
            // sheetsSortZhCN,
            sheetsZenEditorZhCN
        ),
    },
    theme: defaultTheme,
    presets: [
        UniverSheetsCorePreset({
            disableTextFormatAlert: true,
            disableTextFormatMark: true,
        }),
        // UniverSheetsSortPreset(),
    ],
    plugins: [
        UniverSheetsZenEditorPlugin,
        ImportCSVButtonPlugin,
    ],
});

univerAPI.createWorkbook({ name: 'Test Sheet' });

window.univerAPI = univerAPI;
