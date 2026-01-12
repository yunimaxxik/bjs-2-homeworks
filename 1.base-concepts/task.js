'use strict';
function solveEquation(a, b, c) {
	let arr = [];
	let D = b ** 2 - 4 * a * c;
	if (D == 0) {
		arr.push(-b / (2 * a));
	} else if (D > 0) {
		arr.push((-b + Math.sqrt(D)) / (2 * a));
		arr.push((-b - Math.sqrt(D)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let n = countMonths;
	let P = percent / 100 / 12;
	let S = amount - contribution;
	if (S === 0) {
		return 0;
	}
	let monthlyPayment = S * (P + P / (Math.pow(1 + P, n) - 1));
	let totalPayment = monthlyPayment * n;
	return Number(totalPayment.toFixed(2));
}
