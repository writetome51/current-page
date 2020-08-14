import {ArrayPaginator} from '@writetome51/array-paginator';
import {CurrentPage} from './current-page';
import {LoadToPageTranslator} from './load-to-page-translator';
import {PageLoadAccess} from './page-load-access';


export {CurrentPage} from './current-page';


export function getInstance_CurrentPage(params) {

	let {dataSource, pageInfo, loadInfo} = params;

	let load2pgTranslator = new LoadToPageTranslator(pageInfo, loadInfo);
	let pageLoadAccess = new PageLoadAccess(dataSource, loadInfo, load2pgTranslator);

	let loadPaginator;
	loadPaginator = new ArrayPaginator([], pageInfo);

	return new CurrentPage(loadPaginator, load2pgTranslator, pageLoadAccess);
}
