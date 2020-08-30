/******************************
 This is intended to be used by a paginator.
 Its methods return a load (array) of data from a larger set that is too big to be
 loaded all at once.  Each load can contain multiple pages of data.
 ******************************/

export class PageLoadAccess {

	constructor(__dataSource, __loadInfo, __load2pgTranslator) {

		this.__dataSource = __dataSource;
		this.__loadInfo = __loadInfo;
		this.__load2pgTranslator = __load2pgTranslator;
	}


	async getLoadContainingPage(pageNumber) {
		if (this.__load2pgTranslator.loadContainsPage(
			pageNumber, this.__loadInfo.getCurrentLoadNumber()
		)) {
			return this.__currentLoad;
		}
		else return await this.getRefreshedLoadContainingPage(pageNumber);
	}


	async getRefreshedLoadContainingPage(pageNumber) {
		this.__loadInfo.setCurrentLoadNumber(
			this.__load2pgTranslator.getLoadNumberOfPage(pageNumber)
		);

		this.__currentLoad = await this.__dataSource.getLoad(
			this.__loadInfo.getCurrentLoadNumber(),
			this.__loadInfo.getItemsPerLoad(),
			this.__loadInfo.currentLoadIsLast()
		);
		return this.__currentLoad;
	}

}
