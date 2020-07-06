import { CurrentPage } from './current-page';


export { CurrentPage } from './current-page';


export declare function getInstance_CurrentPage(
	params: {
		dataSource: {
			getLoad: (loadNumber: number, itemsPerLoad: number, isLastLoad: boolean) => Promise<any[]>;
		};
		pageInfo: {
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
): CurrentPage;
