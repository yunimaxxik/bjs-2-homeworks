function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	arr.map((a) => {
		a < min ? (min = a) : a > max ? (max = a) : 1;
		sum += a;
	});
	let avg = sum / arr.length;
	avg = Number.isInteger(avg) ? avg : Number(avg.toFixed(2));
	return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
	if (!arr.length) {
		return 0;
	}
	return arr.reduce((acm, a) => acm + a, 0);
}

function differenceMaxMinWorker(...arr) {
	if (!arr.length) {
		return 0;
	}
	return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
	if (!arr.length) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	arr.map((a) => {
		a % 2 == 0 ? (sumEvenElement += a) : (sumOddElement += a);
	});
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (!arr.length) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	arr.map((a) => {
		if (a % 2 == 0) {
			sumEvenElement += a;
			countEvenElement++;
		}
	});
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	if (typeof func !== 'function') {
		arrOfArr = arrOfArr.map((a) => a.reduce((acm, b) => acm + b, 0));
		return Math.max(...arrOfArr);
	}
	const results = arrOfArr.map((subArr) => func(...subArr));
	// Return the maximum result
	return Math.max(...results);
}

console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }
