import { LoadToPageTranslator } from '@writetome51/load-to-page-translator';
import { setArray } from '@writetome51/set-array';


// Intended to help a separate Paginator paginate data that can't all be stored in memory at once.


export class CurrentPage {

	private __data = [];


	constructor(
		private __loadPaginator: {
			getPage: (pageNumber) => any[],

			data: any[]
		},
		private __load2pgTranslator: LoadToPageTranslator,

		private __pageLoadAccess: {
			containingPage: (pageNumber) => Promise<any[]>;

			// This must load the load containing `pageNumber` even if that load is already
			// currently loaded.

			byForce_containingPage: (pageNumber) => Promise<any[]>;
		}
	) {
	}


	get(): any[] {
		return this.__data;
	}


	async set(pageNumber): Promise<void> {
		let load = await this.__pageLoadAccess.containingPage(pageNumber);
		this.__setPage_fromLoad(load, pageNumber);
	}


	async reset(pageNumber): Promise<void> {
		let load = await this.__pageLoadAccess.byForce_containingPage(pageNumber);
		this.__setPage_fromLoad(load, pageNumber);
	}


	private __setPage_fromLoad(load: any[], pageNumber): void {
		setArray(this.__loadPaginator.data, load);
		pageNumber = this.__load2pgTranslator.getPageNumberInLoadFromAbsolutePage(pageNumber);

		this.__data = this.__loadPaginator.getPage(pageNumber);
	}


}
