import { LoadToPageTranslator } from './load-to-page-translator';
import { setArray } from '@writetome51/set-array';


// Intended to help a separate Paginator paginate data that can't all be stored in memory at once.

export class CurrentPage {

	private __data = [];


	constructor(
		private __loadPaginator: {
			getPage: (pageNumber) => any[],
			data: any[] // the entire load
		},
		private __load2pgTranslator: LoadToPageTranslator,

		private __pageLoadAccess: {
			getLoadContainingPage: (pageNumber) => Promise<any[]>,
			getRefreshedLoadContainingPage: (pageNumber) => Promise<any[]>
		}
	) {
	}


	get(): any[] {
		return this.__data;
	}


	async set(pageNumber): Promise<void> {
		await this.__getLoadAndSetPage(this.__pageLoadAccess.getLoadContainingPage, pageNumber);
	}


	async reset(pageNumber): Promise<void> {
		await this.__getLoadAndSetPage(
			this.__pageLoadAccess.getRefreshedLoadContainingPage, pageNumber
		);
	}


	private async __getLoadAndSetPage(
		getLoad: (pageNumber) => Promise<any[]>,
		pageNumber
	) {
		let load = await getLoad.apply(this.__pageLoadAccess, [pageNumber]);
		this.__setPage_fromLoad(load, pageNumber);
	}


	private __setPage_fromLoad(load: any[], pageNumber): void {
		setArray(this.__loadPaginator.data, load);
		pageNumber = this.__load2pgTranslator.getPageNumberOfLoadFromAbsolutePage(pageNumber);

		this.__data = this.__loadPaginator.getPage(pageNumber);
	}


}
