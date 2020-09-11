// Intended to help a separate Paginator paginate data that can't all be stored in memory at once.

export class LoadedPage {


	constructor(__loadPaginator, __load2pgTranslator, __pageLoadAccess) {

		this.__loadPaginator = __loadPaginator;
		this.__load2pgTranslator = __load2pgTranslator;
		this.__pageLoadAccess = __pageLoadAccess;
		this.__data = [];
	}


	get() {
		return this.__data;
	}


	async set(pageNumber) {
		await this.__getLoadAndSetPage(this.__pageLoadAccess.getLoadContainingPage, pageNumber);
	}


	async reset(pageNumber) {
		await this.__getLoadAndSetPage(this.__pageLoadAccess.getRefreshedLoadContainingPage, pageNumber);
	}


	async __getLoadAndSetPage(getLoad, pageNumber) {
		let load = await getLoad.apply(this.__pageLoadAccess, [pageNumber]);
		this.__setPage_fromLoad(load, pageNumber);
	}


	__setPage_fromLoad(load, pageNumber) {
		this.__loadPaginator.data = load;

		pageNumber = this.__load2pgTranslator.getPageNumberOfLoadFromAbsolutePage(pageNumber);
		this.__data = this.__loadPaginator.getPage(pageNumber);
	}
}
