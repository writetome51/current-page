export class PageLoadAccess {

	constructor(__dataSource, __loadInfo, __load2pgTranslator) {
		this.__dataSource = __dataSource;
		this.__loadInfo = __loadInfo;
		this.__load2pgTranslator = __load2pgTranslator;
	}


	async getLoadContainingPage(pageNumber) {
		if (this.__currentLoadContainsPage(pageNumber)) return this.__currentLoad;
		else return await this.getRefreshedLoadContainingPage(pageNumber);
	}


	async getRefreshedLoadContainingPage(pageNumber) {
		this.__setCurrentLoadNumber(this.__load2pgTranslator.getLoadNumberOfPage(pageNumber));
		this.__currentLoad = await this.__dataSource.getLoad(...this.__getLoadParams());
		return this.__currentLoad;
	}


	__currentLoadContainsPage(pageNumber) {
		return (this.__load2pgTranslator.loadContainsPage(this.__getCurrentLoadNumber(), pageNumber));
	}


	__getCurrentLoadNumber() {
		return this.__loadInfo.getCurrentLoadNumber();
	}


	__setCurrentLoadNumber(num) {
		this.__loadInfo.setCurrentLoadNumber(num);
	}


	__getLoadParams() {
		return [
			this.__loadInfo.getCurrentLoadNumber(),
			this.__loadInfo.getItemsPerLoad(),
			this.__loadInfo.currentLoadIsLast()
		];
	}
}
