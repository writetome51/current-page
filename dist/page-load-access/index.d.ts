import { LoadToPageTranslator } from '../load-to-page-translator';


export declare class PageLoadAccess {

	private __dataSource;
	private __loadInfo;
	private __load2pgTranslator;
	private __currentLoad;


	constructor(
		__dataSource: {
			getLoad: (loadNumber: number, itemsPerLoad: number, isLastLoad: boolean) => Promise<any[]>;
		},
		__loadInfo: {
			getCurrentLoadNumber: () => number;
			setCurrentLoadNumber: (num: number) => void;
			getItemsPerLoad: () => number;
			currentLoadIsLast: () => boolean;
		},
		__load2pgTranslator: LoadToPageTranslator
	);


	getLoadContainingPage(pageNumber: number): Promise<any[]>;


	getRefreshedLoadContainingPage(pageNumber: number): Promise<any[]>;


	private __currentLoadContainsPage;
	private __getCurrentLoadNumber;
	private __setCurrentLoadNumber;
	private __getLoadParams;

}
