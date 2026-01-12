'use strict';
function solveEquation(a, b, c) {
	let arr = [];
	let D = b ** 2 - 4 * a * c;
	if (D == 0) {
		arr.push(-b / (2 * a));
	} else if (D > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent /= 100;
	let bodyCredit = amount - contribution;
	let paymant =
		bodyCredit * (percent + percent / ((1 + percent) ** countMonths - 1));
	return (paymant * countMonths).toFixed(2);
}
