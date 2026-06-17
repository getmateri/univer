import {
  createUniver
} from "../chunk-5UVRNVJO.js";
import "../chunk-SEGNKWC6.js";
import {
  UniverNetworkPlugin
} from "../chunk-3VNXRUZH.js";
import "../chunk-FPNH6BDD.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
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
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-QAY465GM.js";
import "../chunk-TIITL5XZ.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-LO3AO4I4.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-TOWBRTW6.js";
import {
  mergeLocales
} from "../chunk-2NTMFV4P.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// ../presets/packages/preset-docs-core/src/umd.ts
function UniverDocsCorePreset(config = {}) {
  const {
    container = "app",
    header,
    footer,
    toolbar,
    ribbonType,
    menu,
    contextMenu,
    disableAutoFocus
  } = config;
  return {
    plugins: [
      UniverNetworkPlugin,
      UniverDocsPlugin,
      UniverRenderEnginePlugin,
      [UniverUIPlugin, {
        container,
        header,
        footer,
        toolbar,
        ribbonType,
        menu,
        contextMenu,
        disableAutoFocus
      }],
      UniverDocsUIPlugin,
      UniverFormulaEnginePlugin
    ]
  };
}

// ../presets/packages/preset-docs-core/src/locales/zh-CN.ts
var zh_CN_default4 = mergeLocales(
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
);

// src/preset-docs-core/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: mergeLocales(zh_CN_default4)
  },
  logLevel: 4 /* VERBOSE */,
  presets: [
    UniverDocsCorePreset({
      container: "app"
    })
  ]
});
univer.createUnit(1 /* UNIVER_DOC */, DEFAULT_DOCUMENT_DATA_SIMPLE);
window.univer = univer;
window.univerAPI = univerAPI;
