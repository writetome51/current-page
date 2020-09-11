import { ArrayPaginator } from '@writetome51/array-paginator';
import { LoadedPage } from './loaded-page';
import { LoadToPageTranslator } from './load-to-page-translator';
import { PageLoadAccess } from './page-load-access';


export { LoadedPage } from './loaded-page';


export function getInstance_LoadedPage(

	params: {
		dataSource: {

			// If `isLastLoad` is true, it must only return the remaining items in the dataset and
			// ignore `itemsPerLoad`.

			getLoad: (
				loadNumber: number, itemsPerLoad: number, isLastLoad: boolean
			) => Promise<any[]>;
		},

		pageInfo: { 
			setItemsPerPage: (num) => void, 
			getItemsPerPage: () => number,
			getTotalPages: () => number
		},

		loadInfo: {
			getCurrentLoadNumber: () => number,
			setCurrentLoadNumber: (num) => void,
			getItemsPerLoad: () => number,
			currentLoadIsLast: () => boolean,
			getPagesPerLoad: () => number
		}
	}

): LoadedPage {

	let {dataSource, pageInfo, loadInfo} = params;

	let load2pgTranslator = new LoadToPageTranslator(pageInfo, loadInfo);

	let pageLoadAccess = new PageLoadAccess(
		dataSource, loadInfo, load2pgTranslator
	);

	let loadPaginator: {
		getPage: (pageNumber) => any[],
		data: any[]
	};
	loadPaginator = new ArrayPaginator([], pageInfo);

	return new LoadedPage(
		loadPaginator, load2pgTranslator, pageLoadAccess
	);
}
