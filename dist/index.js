"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var not_1 = require("@writetome51/not");
/**********************
 This class is intended to be used with a separate Paginator class.
 It loads a 'page' of data into memory.
 It supports the breaking of the full dataset (the data to be paginated) into batches
 in case it's too big to load entirely (a batch is defined as the total amount of
 data the Paginator can handle at once). The objects passed into the constructor
 make this possible.
 *********************/
var PageLoader = /** @class */ (function () {
    function PageLoader(__batchInfo, 
    // `__batchPaginator` must hold a reference to the currently loaded batch.  Setting its
    // `currentPageNumber` should automatically update the page it currently shows.
    __batchPaginator, __bch2pgTranslator, 
    // `__batchLoader` accesses the data source.
    __batchLoader) {
        this.__batchInfo = __batchInfo;
        this.__batchPaginator = __batchPaginator;
        this.__bch2pgTranslator = __bch2pgTranslator;
        this.__batchLoader = __batchLoader;
    }
    PageLoader.prototype.loadPage = function (pageNumber) {
        if (not_1.not(this.__bch2pgTranslator.currentBatchContainsPage(pageNumber))) {
            this.__batchLoader.loadBatchContainingPage(pageNumber);
        }
        this.__batchPaginator.currentPageNumber =
            this.__bch2pgTranslator.getPageNumberInCurrentBatchFromAbsolutePage(pageNumber);
    };
    PageLoader.prototype.reloadPage = function (pageNumber) {
        // This forces this.loadPage() to reload the batch containing pageNumber.
        this.__batchInfo.currentBatchNumber = undefined;
        this.loadPage(pageNumber);
    };
    return PageLoader;
}());
exports.PageLoader = PageLoader;
