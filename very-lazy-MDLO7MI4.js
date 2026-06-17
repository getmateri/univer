import {
  UniverActionRecorderPlugin
} from "./chunk-CLGSFAGN.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-PN2FYND7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-5PY2KL5N.js";
import {
  UniverUniscriptPlugin
} from "./chunk-JKSXJOER.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LBUJX2D3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-IYLYWIVK.js";
import "./chunk-VXLQ36JM.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ZOVGHSPQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-7TILZ3T5.js";
import "./chunk-HUCNPSHS.js";
import "./chunk-EOCIGFHD.js";
import "./chunk-DFO4LH6C.js";
import {
  loadDebuggerLocale
} from "./chunk-2GJVB7EP.js";
import "./chunk-J72CIJ5H.js";
import "./chunk-YKMLQ5FL.js";
import "./chunk-M347PA2R.js";
import "./chunk-WR3KZCUZ.js";
import "./chunk-TIITL5XZ.js";
import "./chunk-LO3AO4I4.js";
import "./chunk-TOWBRTW6.js";
import "./chunk-2NTMFV4P.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/very-lazy.ts
var IS_E2E = false;
function getVeryLazyPlugins() {
  const plugins = [
    [UniverActionRecorderPlugin],
    [UniverSheetsHyperLinkUIPlugin],
    [UniverSheetsSortUIPlugin],
    [UniverSheetsCrosshairHighlightPlugin],
    [UniverSheetsFindReplacePlugin],
    [UniverWatermarkPlugin]
  ];
  if (!IS_E2E) {
    plugins.push([UniverDebuggerPlugin, {
      fabEntryUnitType: 2 /* UNIVER_SHEET */,
      localeLoader: loadDebuggerLocale
    }]);
    plugins.push([UniverUniscriptPlugin, {
      getWorkerUrl(_, label) {
        if (label === "json") {
          return "/vs/language/json/json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
          return "/vs/language/css/css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return "/vs/language/html/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
          return "/vs/language/typescript/ts.worker.js";
        }
        return "/vs/editor/editor.worker.js";
      }
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
