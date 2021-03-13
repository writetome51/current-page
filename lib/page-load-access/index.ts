import { LoadToPageTranslator } from '../load-to-page-translator';


export class PageLoadAccess {

	private __currentLoad: any[];


	constructor(
		private __dataSource: {

			// The number of items `getLoad()` returns must match `itemsPerLoad`.  If `isLastLoad`
			// is true, it must only return the remaining items in the dataset and ignore itemsPerLoad.

			getLoad: (
				loadNumber: number, itemsPerLoad: number, isLastLoad: boolean
			) => Promise<any[]>;
		},
		private __loadInfo: {
			getCurrentLoadNumber: () => number, setCurrentLoadNumber: (num: number) => void,
			getItemsPerLoad: () => number, currentLoadIsLast: () => boolean
		},
		private __load2pgTranslator: LoadToPageTranslator
	) {
	}


	async getLoadContainingPage(pageNumber): Promise<any[]> {
		if (this.__currentLoadContainsPage(pageNumber)) return this.__currentLoad;
		else return await this.getRefreshedLoadContainingPage(pageNumber);
	}


	async getRefreshedLoadContainingPage(pageNumber): Promise<any[]> {
		this.__setCurrentLoadNumber(this.__load2pgTranslator.getLoadNumberOfPage(pageNumber));

		this.__currentLoad = await this.__dataSource.getLoad(...this.__getLoadParams());
		return this.__currentLoad;
	}


	private __currentLoadContainsPage(pageNumber) {
		return (this.__load2pgTranslator.loadContainsPage(this.__getCurrentLoadNumber(), pageNumber));
	}


	private __getCurrentLoadNumber() {
		return this.__loadInfo.getCurrentLoadNumber();
	}


	private __setCurrentLoadNumber(num) {
		this.__loadInfo.setCurrentLoadNumber(num);
	}


	private __getLoadParams(): [number, number, boolean] {
		return [
			this.__loadInfo.getCurrentLoadNumber(),
			this.__loadInfo.getItemsPerLoad(),
			this.__loadInfo.currentLoadIsLast()
		];
	}

}
