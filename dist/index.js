"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../../load-to-page-translator/lib");
const lib_2 = require("../../page-load-access/lib");
const array_paginator_1 = require("@writetome51/array-paginator");
const current_page_1 = require("./current-page");
var current_page_2 = require("./current-page");
exports.CurrentPage = current_page_2.CurrentPage;
function getInstance_CurrentPage(dataSource, pageInfo, loadInfo) {
    let load2pgTranslator = new lib_1.LoadToPageTranslator(pageInfo, loadInfo);
    let pageLoadAccess = new lib_2.PageLoadAccess(dataSource, loadInfo, load2pgTranslator);
    let loadPaginator;
    loadPaginator = new array_paginator_1.ArrayPaginator();
    return new current_page_1.CurrentPage(loadPaginator, load2pgTranslator, pageLoadAccess);
}
exports.getInstance_CurrentPage = getInstance_CurrentPage;
