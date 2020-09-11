import {getInstance_LoadedPage} from './index.js';
import {getCountup} from '@writetome51/get-countup-countdown';
import {arraysMatch} from '@writetome51/arrays-match';


async function runTests() {

	console.time('check');

	let dataSource = {
		getLoad: async function(loadNumber, itemsPerLoad, isLastLoad) {
			let start = (loadNumber - 1) * itemsPerLoad + 1;
			let end = loadNumber * itemsPerLoad;
			if (end > this.dataTotal) end = this.dataTotal;
			return getCountup(start, end);
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
		getCurrentLoadNumber: function() {
			return this.__currentLoadNum;
		},
		setCurrentLoadNumber: function(num) {
			this.__currentLoadNum = num;
		},
		getItemsPerLoad: () => 25,
		currentLoadIsLast: () => true,
		getPagesPerLoad: () => 5
	};
	let loadedPage = getInstance_LoadedPage({
		dataSource,
		pageInfo,
		loadInfo
	});
	await loadedPage.reset(1);
	if (arraysMatch(loadedPage.get(), [1, 2, 3, 4, 5]))
		console.log('test 1 passed');
	else
		console.log('test 1 FAILED');
	if (loadInfo.getCurrentLoadNumber() === 1)
		console.log('test 2 passed');
	else
		console.log('test 2 FAILED');
	await loadedPage.set(2);
	if (arraysMatch(loadedPage.get(), [6, 7, 8, 9, 10]))
		console.log('test 3 passed');
	else
		console.log('test 3 FAILED');
	await loadedPage.set(3);
	if (arraysMatch(loadedPage.get(), [11, 12, 13, 14, 15]))
		console.log('test 4 passed');
	else
		console.log('test 4 FAILED');
	await loadedPage.set(4);
	if (arraysMatch(loadedPage.get(), [16, 17, 18, 19, 20]))
		console.log('test 6 passed');
	else
		console.log('test 6 FAILED');
	await loadedPage.set(5);
	if (arraysMatch(loadedPage.get(), [21, 22, 23, 24, 25]))
		console.log('test 7 passed');
	else
		console.log('test 7 FAILED');
	await loadedPage.set(6);
	if (arraysMatch(loadedPage.get(), [26, 27, 28, 29, 30]))
		console.log('test 8 passed');
	else
		console.log('test 8 FAILED');
	await loadedPage.set(7);
	if (arraysMatch(loadedPage.get(), [31, 32, 33, 34, 35]))
		console.log('test 10 passed');
	else
		console.log('test 10 FAILED');
	await loadedPage.set(8);
	if (arraysMatch(loadedPage.get(), [36, 37, 38, 39, 40]))
		console.log('test 11 passed');
	else
		console.log('test 11 FAILED');
	await loadedPage.set(9);
	if (arraysMatch(loadedPage.get(), [41, 42, 43, 44, 45]))
		console.log('test 12 passed');
	else
		console.log('test 12 FAILED');
	await loadedPage.set(10);
	if (arraysMatch(loadedPage.get(), [46, 47, 48, 49, 50]))
		console.log('test 13 passed');
	else
		console.log('test 13 FAILED');
	if (loadInfo.getCurrentLoadNumber() === 2)
		console.log('test 14 passed');
	else
		console.log('test 14 FAILED');

	console.timeEnd('check')

}

runTests();

