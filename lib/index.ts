import { ArrayPaginator } from '@writetome51/array-paginator';
import { CurrentPage } from './current-page';
import { LoadToPageTranslator } from './load-to-page-translator';
import { PageLoadAccess } from './page-load-access';


export { CurrentPage } from './current-page';


export function getInstance_CurrentPage(

	params: {
		dataSource: {

			// If `isLastLoad` is true, it must only return the remaining items in the dataset and
			// ignore `itemsPerLoad`.

			getLoad: (
				loadNumber: number, itemsPerLoad: number, isLastLoad: boolean
			) => Promise<any[]>;
		},

		pageInfo: { getTotalPages: () => number },

		loadInfo: {
			getCurrentLoadNumber: () => number,
			setCurrentLoadNumber: (num) => void,
			getItemsPerLoad: () => number,
			currentLoadIsLast: () => boolean,
			getPagesPerLoad: () => number
		}
	}

): CurrentPage {

	let load2pgTranslator = new LoadToPageTranslator(params.pageInfo, params.loadInfo);

	let pageLoadAccess = new PageLoadAccess(
		params.dataSource, params.loadInfo, load2pgTranslator
	);

	let loadPaginator: {
		getPage: (pageNumber) => any[],
		data: any[]
	};
	loadPaginator = new ArrayPaginator();

	return new CurrentPage(
		loadPaginator, load2pgTranslator, pageLoadAccess
	);
}
