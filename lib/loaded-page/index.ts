import { LoadToPageTranslator } from '../load-to-page-translator';
import { PageLoadAccess } from '../page-load-access';


// Intended to help a separate Paginator paginate data that can't all be stored in memory at once.

export class LoadedPage {

	private __data = [];
	private __number: number;


	constructor(
		private __loadPaginator: {
			getPage: (pageNumber) => any[],
			data: any[] // the entire load
		},
		private __load2pgTranslator: LoadToPageTranslator,

		private __pageLoadAccess: PageLoadAccess
	) {
	}


	get(): any[] {
		return this.__data;
	}


	async set(pageNumber): Promise<void> {
		if (pageNumber === this.__number) return;
		await this.__getLoadAndSetPage('getLoadContainingPage',  pageNumber);
	}


	async reset(pageNumber): Promise<void> {
		await this.__getLoadAndSetPage('getRefreshedLoadContainingPage',  pageNumber);
	}


	getNumber(): number {
		return this.__number;
	}


	private async __getLoadAndSetPage(getLoadFn: string, pageNumber) {
		let load = await this.__pageLoadAccess[getLoadFn](pageNumber);
		this.__setPage_fromLoad(load, pageNumber);
		this.__number = pageNumber;
	}


	private __setPage_fromLoad(load: any[], pageNumber): void {
		this.__loadPaginator.data = load;
		pageNumber = this.__load2pgTranslator.getPageNumberOfLoadFromAbsolutePage(pageNumber);

		this.__data = this.__loadPaginator.getPage(pageNumber);
	}

}
