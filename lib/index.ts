import { BatchToPageTranslator } from '@writetome51/batch-to-page-translator';
import { not } from '@writetome51/not';


/**********************
 This class is intended to be used with a separate Paginator class.
 It loads a 'page' of data into memory.
 It supports the breaking of the full dataset (the data to be paginated) into batches
 in case it's too big to load entirely (a batch is defined as the total amount of
 data the Paginator can handle at once). The objects passed into the constructor
 make this possible.
 *********************/


export class PageLoader {


	constructor(
		private __batchInfo: { currentBatchNumber: number | undefined },

		// `__batchPaginator` must hold a reference to the currently loaded batch.  Setting its
		// `currentPageNumber` should automatically update the page it currently shows.

		private __batchPaginator: { currentPageNumber: number },

		private __bch2pgTranslator: BatchToPageTranslator,

		// `__batchLoader` accesses the data source.

		private __batchLoader: { loadBatchContainingPage: (pageNumber) => void }
	) {
	}


	loadPage(pageNumber): void {
		if (not(this.__bch2pgTranslator.currentBatchContainsPage(pageNumber))) {
			this.__batchLoader.loadBatchContainingPage(pageNumber);
		}

		this.__batchPaginator.currentPageNumber =
			this.__bch2pgTranslator.getPageNumberInCurrentBatchFromAbsolutePage(pageNumber);
	}


	reloadPage(pageNumber): void {
		// This forces this.loadPage() to reload the batch containing pageNumber.
		this.__batchInfo.currentBatchNumber = undefined;

		this.loadPage(pageNumber);
	}


}
