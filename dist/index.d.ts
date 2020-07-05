import { LoadToPageTranslator } from '@writetome51/load-to-page-translator';
export declare class CurrentPage {
    private __loadPaginator;
    private __bch2pgTranslator;
    private __getLoad;
    private __data;
    constructor(__loadPaginator: {
        getPage: (pageNumber: any) => any[];
        data: any[];
    }, __bch2pgTranslator: LoadToPageTranslator, __getLoad: {
        containingPage: (pageNumber: any) => Promise<any[]>;
        byForce_containingPage: (pageNumber: any) => Promise<any[]>;
    });
    get(): any[];
    set(pageNumber: any): Promise<void>;
    reset(pageNumber: any): Promise<void>;
    private __set_loadedPage_fromLoad;
}
