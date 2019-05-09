import { BatchToPageTranslator } from '@writetome51/batch-to-page-translator';


/**********************
 This class is intended to be used with a separate Paginator class.
 It loads a 'page' of data into memory.
 It supports the breaking of the full dataset (the data to be paginated) into batches
 in case it's too big to load entirely (a batch is defined as the total amount of
 data the Paginator can handle at once). The objects passed into the constructor
 make this possible.
 *********************/

export declare class PageLoader {

	private __batchInfo;
	private __batchPaginator;
	private __bch2pgTranslator;
	private __batchLoader;


	constructor(
		__batchInfo: {
			currentBatchNumber: number | undefined;
		},
		__batchPaginator: {
			currentPageNumber: number;
		},
		__bch2pgTranslator: BatchToPageTranslator,
		__batchLoader: {
			loadBatchContainingPage: (pageNumber: number) => void;
		}
	);


	loadPage(pageNumber: number): void;


	reloadPage(pageNumber: number): void;

}
