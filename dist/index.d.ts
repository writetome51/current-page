import { LoadedPage } from './loaded-page';


export { LoadedPage } from './loaded-page';


export declare function getInstance_LoadedPage(

	params: {
		dataSource: {
			getLoad: (loadNumber: number, itemsPerLoad: number, isLastLoad: boolean) => Promise<any[]>;
		};
		pageInfo: {
			setItemsPerPage: (num: number) => void;
			getItemsPerPage: () => number;
			getTotalPages: () => number;
		};
		loadInfo: {
			getCurrentLoadNumber: () => number;
			setCurrentLoadNumber: (num: number) => void;
			getItemsPerLoad: () => number;
			currentLoadIsLast: () => boolean;
			getPagesPerLoad: () => number;
		};
	}

): LoadedPage;
