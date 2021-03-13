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
		if (pageNumber === this.__number) return;
		await this.__getLoadAndSetPage('getLoadContainingPage', pageNumber);
	}


	async reset(pageNumber) {
		await this.__getLoadAndSetPage('getRefreshedLoadContainingPage', pageNumber);
	}


	getNumber() {
		return this.__number;
	}


	async __getLoadAndSetPage(getLoadFn, pageNumber) {
		let load = await this.__pageLoadAccess[getLoadFn](pageNumber);
		this.__setPage_fromLoad(load, pageNumber);
		this.__number = pageNumber;
	}


	__setPage_fromLoad(load, pageNumber) {
		this.__loadPaginator.data = load;
		pageNumber = this.__load2pgTranslator.getPageNumberOfLoadFromAbsolutePage(pageNumber);
		this.__data = this.__loadPaginator.getPage(pageNumber);
	}

}
