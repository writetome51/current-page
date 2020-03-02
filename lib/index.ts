import { BatchToPageTranslator } from '@writetome51/batch-to-page-translator';
import { setArray } from '@writetome51/set-array';


/**********************
 This class is intended to be used with a separate Paginator class.
 It loads a 'page' of data into memory.
 It supports the breaking of the full dataset (the data to be paginated) into batches
 in case it's too big to load entirely (a batch is defined as the total amount of
 data the Paginator can handle at once).
 *********************/


export class PageLoader {


	constructor(

		// Setting its  `currentPageNumber` must automatically update its `currentPage`.

		private __batchPaginator: { currentPageNumber: number, currentPage: any[], data: any[] },

		private __bch2pgTranslator: BatchToPageTranslator,

		// `__getBatch` accesses the data source.

		private __getBatch: {
			containingPage: (pageNumber) => Promise<any[]>;

			// This must load the batch containing `pageNumber` even if that batch is already
			// currently loaded.

			byForce_containingPage: (pageNumber) => Promise<any[]>;
		 }
	) {}


	get loadedPage(): any[] {
		return this.__batchPaginator.currentPage;
	}


	async loadPage(pageNumber): Promise<void> {
		let batch = await this.__getBatch.containingPage(pageNumber);
		this.__set_loadedPage_fromBatch(batch, pageNumber);
	}


	async forceLoadPage(pageNumber): Promise<void> {
		let batch = await this.__getBatch.byForce_containingPage(pageNumber);
		this.__set_loadedPage_fromBatch(batch, pageNumber);
	}


	private __set_loadedPage_fromBatch(batch: any[], pageNumber): void {
		setArray(this.__batchPaginator.data,  batch);

		this.__batchPaginator.currentPageNumber =
			this.__bch2pgTranslator.getPageNumberInCurrentBatchFromAbsolutePage(pageNumber);
	}


}
