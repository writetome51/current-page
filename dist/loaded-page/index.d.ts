import { LoadToPageTranslator } from '../load-to-page-translator';
import { PageLoadAccess } from '../page-load-access';


export declare class LoadedPage {

	private __loadPaginator;
	private __load2pgTranslator;
	private __pageLoadAccess;
	private __data;
	private __number;


	constructor(
		__loadPaginator: {
			getPage: (pageNumber: number) => any[];
			data: any[];
		},
		__load2pgTranslator: LoadToPageTranslator,
		__pageLoadAccess: PageLoadAccess
	);


	get(): any[];


	set(pageNumber: number): Promise<void>;


	reset(pageNumber: number): Promise<void>;


	getNumber(): number;


	private __getLoadAndSetPage;
	private __setPage_fromLoad;

}
