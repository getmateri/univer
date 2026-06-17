import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-US7T2E2S.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MYKAI5RG.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-WORZCIPM.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-VVRAPR7O.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-R6N4RR7Y.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KOVYXMWB.js";
import "./chunk-2P6OVZWD.js";
import "./chunk-WNLKC4ID.js";
import "./chunk-VXLQ36JM.js";
import "./chunk-PQKLAQ4G.js";
import "./chunk-5IZUWW3O.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HUCNPSHS.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-EOCIGFHD.js";
import "./chunk-FR7SS27L.js";
import "./chunk-DFO4LH6C.js";
import "./chunk-J72CIJ5H.js";
import "./chunk-YKMLQ5FL.js";
import "./chunk-WR3KZCUZ.js";
import "./chunk-TIITL5XZ.js";
import "./chunk-LO3AO4I4.js";
import "./chunk-TOWBRTW6.js";
import "./chunk-2NTMFV4P.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
