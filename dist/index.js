"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_paginator_1 = require("@writetome51/array-paginator");
const current_page_1 = require("./current-page");
const load_to_page_translator_1 = require("./load-to-page-translator");
const page_load_access_1 = require("./page-load-access");
var current_page_2 = require("./current-page");
exports.CurrentPage = current_page_2.CurrentPage;
function getInstance_CurrentPage(params) {
    let { dataSource, pageInfo, loadInfo } = params;
    let load2pgTranslator = new load_to_page_translator_1.LoadToPageTranslator(pageInfo, loadInfo);
    let pageLoadAccess = new page_load_access_1.PageLoadAccess(dataSource, loadInfo, load2pgTranslator);
    let loadPaginator;
    loadPaginator = new array_paginator_1.ArrayPaginator([], pageInfo);
    return new current_page_1.CurrentPage(loadPaginator, load2pgTranslator, pageLoadAccess);
}
exports.getInstance_CurrentPage = getInstance_CurrentPage;
