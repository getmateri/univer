import {
  GlobalRangeSelectorService
} from "./chunk-EOCIGFHD.js";
import {
  FUniver
} from "./chunk-M347PA2R.js";

// ../packages/sheets-formula-ui/src/facade/f-univer.ts
var FUniverSheetsFormulaUIMixin = class extends FUniver {
  showRangeSelectorDialog(opts) {
    const globalRangeSelectorService = this._injector.get(GlobalRangeSelectorService);
    return globalRangeSelectorService.showRangeSelectorDialog(opts);
  }
};
FUniver.extend(FUniverSheetsFormulaUIMixin);
