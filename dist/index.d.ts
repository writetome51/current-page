import { LoadToPageTranslator } from '@writetome51/load-to-page-translator';


export declare class CurrentPage {

	private __loadPaginator;
	private __load2pgTranslator;
	private __pageLoadAccess;
	private __data;


	constructor(
		__loadPaginator: {
			getPage: (pageNumber: number) => any[];
			data: any[];
		},
		__load2pgTranslator: LoadToPageTranslator,

		__pageLoadAccess: {
			getLoadContainingPage: (pageNumber: number) => Promise<any[]>;
			getRefreshedLoadContainingPage: (pageNumber: number) => Promise<any[]>;
		}
	);


	get(): any[];


	set(pageNumber: number): Promise<void>;


	reset(pageNumber: number): Promise<void>;


	private __getLoadAndSetPage;
	private __setPage_fromLoad;

}
