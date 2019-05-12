"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var set_array_1 = require("@writetome51/set-array");
/**********************
 This class is intended to be used with a separate Paginator class.
 It loads a 'page' of data into memory.
 It supports the breaking of the full dataset (the data to be paginated) into batches
 in case it's too big to load entirely (a batch is defined as the total amount of
 data the Paginator can handle at once).
 *********************/
var PageLoader = /** @class */ (function () {
    function PageLoader(
    // Setting its  `currentPageNumber` must automatically update its `currentPage`.
    __batchPaginator, __bch2pgTranslator, 
    // `__getBatch` accesses the data source.
    __getBatch) {
        this.__batchPaginator = __batchPaginator;
        this.__bch2pgTranslator = __bch2pgTranslator;
        this.__getBatch = __getBatch;
    }
    Object.defineProperty(PageLoader.prototype, "loadedPage", {
        get: function () {
            return this.__batchPaginator.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    PageLoader.prototype.loadPage = function (pageNumber) {
        var batch = this.__getBatch.containingPage(pageNumber);
        this.__set_loadedPage_fromBatch(batch, pageNumber);
    };
    PageLoader.prototype.forceLoadPage = function (pageNumber) {
        var batch = this.__getBatch.byForce_containingPage(pageNumber);
        this.__set_loadedPage_fromBatch(batch, pageNumber);
    };
    PageLoader.prototype.__set_loadedPage_fromBatch = function (batch, pageNumber) {
        set_array_1.setArray(this.__batchPaginator.data, batch);
        this.__batchPaginator.currentPageNumber =
            this.__bch2pgTranslator.getPageNumberInCurrentBatchFromAbsolutePage(pageNumber);
    };
    return PageLoader;
}());
exports.PageLoader = PageLoader;
