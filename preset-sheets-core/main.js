import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-KOVYXMWB.js";
import {
  createUniver
} from "../chunk-5UVRNVJO.js";
import "../chunk-GCOCPBXU.js";
import "../chunk-MYDCD7PH.js";
import "../chunk-FEMNLOXY.js";
import {
  UniverSheetsFormulaUIPlugin
} from "../chunk-EOCIGFHD.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-FR7SS27L.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-DFO4LH6C.js";
import "../chunk-SEGNKWC6.js";
import {
  UniverNetworkPlugin
} from "../chunk-3VNXRUZH.js";
import "../chunk-FPNH6BDD.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
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
  zh_CN_default as zh_CN_default3,
  zh_CN_default2 as zh_CN_default4,
  zh_CN_default3 as zh_CN_default5,
  zh_CN_default4 as zh_CN_default6,
  zh_CN_default5 as zh_CN_default7
} from "../chunk-GQQW6W3C.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3 as zh_CN_default8
} from "../chunk-QAY465GM.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-TIITL5XZ.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCMainThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-LO3AO4I4.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-TOWBRTW6.js";
import {
  mergeLocales
} from "../chunk-2NTMFV4P.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// ../presets/packages/preset-sheets-core/src/umd.ts
function UniverSheetsCorePreset(config = {}) {
  var _a;
  const {
    container = "app",
    workerURL: workerSrc,
    header,
    footer,
    toolbar,
    ribbonType,
    formulaBar,
    menu,
    contextMenu,
    disableAutoFocus,
    customFontFamily,
    docs,
    sheets,
    formula,
    disableTextFormatAlert,
    disableTextFormatMark
  } = config;
  const useWorker = !!workerSrc;
  return {
    plugins: [
      UniverNetworkPlugin,
      [UniverDocsPlugin, {
        hasScroll: docs == null ? void 0 : docs.hasScroll
      }],
      UniverRenderEnginePlugin,
      [UniverUIPlugin, {
        container,
        header,
        toolbar,
        ribbonType,
        menu,
        contextMenu,
        disableAutoFocus,
        customFontFamily
      }],
      UniverDocsUIPlugin,
      useWorker ? [UniverRPCMainThreadPlugin, { workerURL: workerSrc }] : null,
      [UniverFormulaEnginePlugin, {
        notExecuteFormula: useWorker,
        function: formula == null ? void 0 : formula.function
      }],
      [UniverSheetsPlugin, {
        notExecuteFormula: useWorker,
        onlyRegisterFormulaRelatedMutations: false,
        isRowStylePrecedeColumnStyle: sheets == null ? void 0 : sheets.isRowStylePrecedeColumnStyle,
        autoHeightForMergedCells: sheets == null ? void 0 : sheets.autoHeightForMergedCells,
        freezeSync: sheets == null ? void 0 : sheets.freezeSync
      }],
      [UniverSheetsUIPlugin, {
        formulaBar,
        footer,
        maxAutoHeightCount: sheets == null ? void 0 : sheets.maxAutoHeightCount,
        clipboardConfig: sheets == null ? void 0 : sheets.clipboardConfig,
        scrollConfig: sheets == null ? void 0 : sheets.scrollConfig,
        protectedRangeShadow: (_a = sheets == null ? void 0 : sheets.protectedRangeShadow) != null ? _a : true,
        protectedRangeUserSelector: sheets == null ? void 0 : sheets.protectedRangeUserSelector,
        disableForceStringAlert: sheets == null ? void 0 : sheets.disableForceStringAlert,
        disableForceStringMark: sheets == null ? void 0 : sheets.disableForceStringMark
      }],
      [UniverSheetsNumfmtPlugin, {
        disableTextFormatAlert,
        disableTextFormatMark
      }],
      UniverSheetsNumfmtUIPlugin,
      [UniverSheetsFormulaPlugin, {
        notExecuteFormula: useWorker,
        description: formula == null ? void 0 : formula.description,
        initialFormulaComputing: formula == null ? void 0 : formula.initialFormulaComputing
      }],
      [UniverSheetsFormulaUIPlugin, {
        functionScreenTips: formula == null ? void 0 : formula.functionScreenTips
      }]
    ].filter((v) => !!v)
  };
}

// ../presets/packages/preset-sheets-core/src/locales/zh-CN.ts
var zh_CN_default9 = mergeLocales(
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3,
  zh_CN_default4,
  zh_CN_default5,
  zh_CN_default6,
  zh_CN_default7,
  zh_CN_default8
);

// src/preset-sheets-core/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: mergeLocales(zh_CN_default9)
  },
  logLevel: 4 /* VERBOSE */,
  presets: [
    UniverSheetsCorePreset({
      container: "app",
      workerURL: new Worker(new URL("./worker.js", import.meta.url), { type: "module" })
    })
  ]
});
univerAPI.createWorkbook(DEFAULT_WORKBOOK_DATA_DEMO);
window.univer = univer;
window.univerAPI = univerAPI;
