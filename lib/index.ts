import { LoadToPageTranslator } from '../../load-to-page-translator/lib';
import { PageLoadAccess } from '../../page-load-access/lib';
import { ArrayPaginator } from '@writetome51/array-paginator';
import { CurrentPage } from './current-page';


export { CurrentPage } from './current-page';


export function getInstance_CurrentPage(
	params: { dataSource, pageInfo, loadInfo }
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
