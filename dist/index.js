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
/**********************
 This class is intended to be used with a separate Paginator class.
 It loads a 'page' of data into memory.
 It supports the breaking of the full dataset (the data to be paginated) into batches
 in case it's too big to load entirely (a batch is defined as the total amount of
 data the Paginator can handle at once).
 *********************/
class PageLoader {
    constructor(
    // Setting its  `currentPageNumber` must automatically update its `currentPage`.
    __batchPaginator, __bch2pgTranslator, 
    // `__getBatch` accesses the data source.
    __getBatch) {
        this.__batchPaginator = __batchPaginator;
        this.__bch2pgTranslator = __bch2pgTranslator;
        this.__getBatch = __getBatch;
    }
    get loadedPage() {
        return this.__batchPaginator.currentPage;
    }
    loadPage(pageNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            let batch = yield this.__getBatch.containingPage(pageNumber);
            this.__set_loadedPage_fromBatch(batch, pageNumber);
        });
    }
    forceLoadPage(pageNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            let batch = yield this.__getBatch.byForce_containingPage(pageNumber);
            this.__set_loadedPage_fromBatch(batch, pageNumber);
        });
    }
    __set_loadedPage_fromBatch(batch, pageNumber) {
        set_array_1.setArray(this.__batchPaginator.data, batch);
        this.__batchPaginator.currentPageNumber =
            this.__bch2pgTranslator.getPageNumberInCurrentBatchFromAbsolutePage(pageNumber);
    }
}
exports.PageLoader = PageLoader;
