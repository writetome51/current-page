"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const set_array_1 = require("@writetome51/set-array");
// Intended to help a separate Paginator paginate data that can't all be stored in memory at once.
class CurrentPage {
    constructor(__loadPaginator, __load2pgTranslator, __pageLoadAccess) {
        this.__loadPaginator = __loadPaginator;
        this.__load2pgTranslator = __load2pgTranslator;
        this.__pageLoadAccess = __pageLoadAccess;
        this.__data = [];
    }
    get() {
        return this.__data;
    }
    set(pageNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.__getLoadAndSetPage(this.__pageLoadAccess.containingPage, pageNumber);
        });
    }
    reset(pageNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.__getLoadAndSetPage(this.__pageLoadAccess.byForce_containingPage, pageNumber);
        });
    }
    __getLoadAndSetPage(getLoad, pageNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            let load = yield getLoad(pageNumber);
            this.__setPage_fromLoad(load, pageNumber);
        });
    }
    __setPage_fromLoad(load, pageNumber) {
        set_array_1.setArray(this.__loadPaginator.data, load);
        pageNumber = this.__load2pgTranslator.getPageNumberInLoadFromAbsolutePage(pageNumber);
        this.__data = this.__loadPaginator.getPage(pageNumber);
    }
}
exports.CurrentPage = CurrentPage;
