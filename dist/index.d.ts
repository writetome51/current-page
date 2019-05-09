import { BatchLoader } from '@writetome51/batch-loader';
import { BatchToPageTranslator } from '@writetome51/batch-to-page-translator';


/**********************
 This class loads a 'page' of data by first loading the batch (array) of data that will
 contain that page, then setting the batchPaginator's current page to that page.
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
		}, // Acts as the batch container.
		__bch2pgTranslator: BatchToPageTranslator,
		__batchLoader: BatchLoader
	);


	loadPage(pageNumber: any): void;


	reloadPage(pageNumber: any): void;

}
