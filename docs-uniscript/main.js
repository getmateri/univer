import {
  UniverUniscriptPlugin
} from "../chunk-JKSXJOER.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-DFO4LH6C.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-2GJVB7EP.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-J72CIJ5H.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-YKMLQ5FL.js";
import "../chunk-M347PA2R.js";
import {
  zh_CN_default
} from "../chunk-PRRVBRMN.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-QAY465GM.js";
import "../chunk-TIITL5XZ.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-LO3AO4I4.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-TOWBRTW6.js";
import {
  Univer
} from "../chunk-2NTMFV4P.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/docs-uniscript/main.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic",
  footer: false
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(moduleID, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
univer.createUnit(1 /* UNIVER_DOC */, DEFAULT_DOCUMENT_DATA_CN);
window.univer = univer;
