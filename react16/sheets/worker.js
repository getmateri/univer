import {
  UniverSheetsFilterPlugin
} from "../chunk-WR3KZCUZ.js";
import {
  zh_CN_default
} from "../chunk-PRRVBRMN.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-QAY465GM.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-TIITL5XZ.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-LO3AO4I4.js";
import "../chunk-TOWBRTW6.js";
import {
  Univer
} from "../chunk-2NTMFV4P.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/sheets/worker.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  logLevel: 4 /* VERBOSE */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  }
});
univer.registerPlugins([
  [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
  [UniverFormulaEnginePlugin],
  [UniverRPCWorkerThreadPlugin],
  [UniverRemoteSheetsFormulaPlugin],
  [UniverSheetsFilterPlugin]
]);
self.univer = univer;
