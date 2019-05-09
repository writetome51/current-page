import { BatchLoader } from '@writetome51/batch-loader';
import { BatchToPageTranslator } from '@writetome51/batch-to-page-translator';
import { not } from '@writetome51/not';


/**********************
 This class loads a 'page' of data into memory.
 It supports the breaking of the full dataset into batches in case it's too big to load
 all at once.by first
 loading the batch (array) of data that will
 contain that page, then setting the paginator's current page to that page.
 *********************/


export class PageLoader {


	constructor(
		private __batchInfo: { currentBatchNumber: number | undefined },
		private __batchPaginator: { currentPageNumber: number }, // Acts as the batch container.

		private __bch2pgTranslator: BatchToPageTranslator,

		private __batchLoader: BatchLoader // directly accesses the data source.
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
