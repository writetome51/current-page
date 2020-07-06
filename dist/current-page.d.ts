import { LoadToPageTranslator } from '@writetome51/load-to-page-translator';
export declare class CurrentPage {
    private __loadPaginator;
    private __load2pgTranslator;
    private __pageLoadAccess;
    private __data;
    constructor(__loadPaginator: {
        getPage: (pageNumber: any) => any[];
        data: any[];
    }, __load2pgTranslator: LoadToPageTranslator, __pageLoadAccess: {
        getLoadContainingPage: (pageNumber: any) => Promise<any[]>;
        getRefreshedLoadContainingPage: (pageNumber: any) => Promise<any[]>;
    });
    get(): any[];
    set(pageNumber: any): Promise<void>;
    reset(pageNumber: any): Promise<void>;
    private __getLoadAndSetPage;
    private __setPage_fromLoad;
}
