function parseCount(count) {
	const parsed = Number.parseFloat(count);
	if (Number.isNaN(parsed)) {
		throw new Error('Невалидное значение');
	}
	return parsed;
}

function validateCount(count) {
	try {
		return parseCount(count);
	} catch (error) {
		return error;
	}
}

// exercise 2

class Triangle {
	constructor(a, b, c) {
		if (a <= 0 || b <= 0 || c <= 0) {
			throw new Error('Стороны должны быть положительными');
		}
		if (a + b <= c || a + c <= b || b + c <= a) {
			throw new Error('Треугольник не существует');
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}
	get perimeter() {
		return this.a + this.b + this.c;
	}
	get area() {
		let p = (this.a + this.b + this.c) / 2;
		return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(
			3,
		);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
		};
	}
}
const triangle = getTriangle(1, 3, 100);
console.log(triangle.area);
console.log(triangle.perimeter);
