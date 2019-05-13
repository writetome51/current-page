import { BatchToPageTranslator } from '@writetome51/batch-to-page-translator';


/**********************
 This class is intended to be used with a separate Paginator class.
 It loads a 'page' of data into memory.
 It supports the breaking of the full dataset (the data to be paginated) into batches
 in case it's too big to load entirely (a batch is defined as the total amount of
 data the Paginator can handle at once).
 *********************/


export declare class PageLoader {

	readonly loadedPage: any[];

	private __batchPaginator;
	private __bch2pgTranslator;
	private __getBatch;


	constructor(
		__batchPaginator: {
			currentPageNumber: number;
			currentPage: any[];
			data: any[];
		},
		__bch2pgTranslator: BatchToPageTranslator,
		__getBatch: {
			containingPage: (pageNumber: number) => any[];
			byForce_containingPage: (pageNumber: number) => any[];
		}
	);


	loadPage(pageNumber: number): void;


	forceLoadPage(pageNumber: number): void;


	private __set_loadedPage_fromBatch;

}
