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

import { mergeLocales } from '@univerjs/core';

import univerjsdesign from '@univerjs/design/locale/en-US';
import univerjsdocsui from '@univerjs/docs-ui/locale/en-US';
import univerjssheetsformulaui from '@univerjs/sheets-formula-ui/locale/en-US';
import univerjssheetsformula from '@univerjs/sheets-formula/locale/en-US';
import univerjssheetsnumfmtui from '@univerjs/sheets-numfmt-ui/locale/en-US';
import univerjssheetsui from '@univerjs/sheets-ui/locale/en-US';
import univerjssheets from '@univerjs/sheets/locale/en-US';
import univerjsui from '@univerjs/ui/locale/en-US';

export default mergeLocales(
    univerjsdesign,
    univerjsdocsui,
    univerjssheets,
    univerjssheetsformula,
    univerjssheetsformulaui,
    univerjssheetsnumfmtui,
    univerjssheetsui,
    univerjsui
);
