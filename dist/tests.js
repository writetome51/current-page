var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getInstance_CurrentPage } from './index.js';
import { getCountup } from '@writetome51/get-countup-countdown';
import { arraysMatch } from '@writetome51/arrays-match';

function runTests() {
    return __awaiter(this, void 0, void 0, function* () {
        let dataSource = {
            getLoad: function (loadNumber, itemsPerLoad, isLastLoad) {
                return __awaiter(this, void 0, void 0, function* () {
                    let start = (loadNumber - 1) * itemsPerLoad + 1;
                    let end = loadNumber * itemsPerLoad;
                    if (end > this.dataTotal)
                        end = this.dataTotal;
                    return getCountup(start, end);
                });
            },
            dataTotal: 50
        };
        let pageInfo = {
            setItemsPerPage: (num) => num,
            getItemsPerPage: () => 5,
            getTotalPages: () => 10
        };
        let loadInfo = {
            __currentLoadNum: undefined,
            getCurrentLoadNumber: function () {
                return this.__currentLoadNum;
            },
            setCurrentLoadNumber: function (num) {
                this.__currentLoadNum = num;
            },
            getItemsPerLoad: () => 25,
            currentLoadIsLast: () => true,
            getPagesPerLoad: () => 5
        };
        let currentPage = getInstance_CurrentPage({
            dataSource,
            pageInfo,
            loadInfo
        });
        yield currentPage.reset(1);
        if (arraysMatch(currentPage.get(), [1, 2, 3, 4, 5]))
            console.log('test 1 passed');
        else
            console.log('test 1 FAILED');
        if (loadInfo.getCurrentLoadNumber() === 1)
            console.log('test 2 passed');
        else
            console.log('test 2 FAILED');
        yield currentPage.set(2);
        if (arraysMatch(currentPage.get(), [6, 7, 8, 9, 10]))
            console.log('test 3 passed');
        else
            console.log('test 3 FAILED');
        yield currentPage.set(3);
        if (arraysMatch(currentPage.get(), [11, 12, 13, 14, 15]))
            console.log('test 4 passed');
        else
            console.log('test 4 FAILED');
        yield currentPage.set(4);
        if (arraysMatch(currentPage.get(), [16, 17, 18, 19, 20]))
            console.log('test 6 passed');
        else
            console.log('test 6 FAILED');
        yield currentPage.set(5);
        if (arraysMatch(currentPage.get(), [21, 22, 23, 24, 25]))
            console.log('test 7 passed');
        else
            console.log('test 7 FAILED');
        yield currentPage.set(6);
        if (arraysMatch(currentPage.get(), [26, 27, 28, 29, 30]))
            console.log('test 8 passed');
        else
            console.log('test 8 FAILED');
        yield currentPage.set(7);
        if (arraysMatch(currentPage.get(), [31, 32, 33, 34, 35]))
            console.log('test 10 passed');
        else
            console.log('test 10 FAILED');
        yield currentPage.set(8);
        if (arraysMatch(currentPage.get(), [36, 37, 38, 39, 40]))
            console.log('test 11 passed');
        else
            console.log('test 11 FAILED');
        yield currentPage.set(9);
        if (arraysMatch(currentPage.get(), [41, 42, 43, 44, 45]))
            console.log('test 12 passed');
        else
            console.log('test 12 FAILED');
        yield currentPage.set(10);
        if (arraysMatch(currentPage.get(), [46, 47, 48, 49, 50]))
            console.log('test 13 passed');
        else
            console.log('test 13 FAILED');
        if (loadInfo.getCurrentLoadNumber() === 2)
            console.log('test 14 passed');
        else
            console.log('test 14 FAILED');
    });
}
runTests();
