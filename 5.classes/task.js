// exercise 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = type;
	}
	fix() {
		this.state *= 1.5;
	}
	set state(state) {
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state;
		}
	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, type = 'magazine') {
		super(name, releaseDate, pagesCount, type);
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, type = 'book') {
		super(name, releaseDate, pagesCount, type);
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, type = 'novel') {
		super(author, name, releaseDate, pagesCount, type);
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, type = 'fantastic') {
		super(author, name, releaseDate, pagesCount, type);
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, type = 'detective') {
		super(author, name, releaseDate, pagesCount, type);
	}
}
// exercise 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		const book = this.books.find((item) => item[type] === value);
		return book || null;
	}

	giveBookByName(bookName) {
		const bookIndex = this.books.findIndex((book) => book.name === bookName);
		if (bookIndex === -1) {
			return null;
		}
		const book = this.books[bookIndex];
		this.books.splice(bookIndex, 1);
		return book;
	}
}

// exercise 3

class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.marks = {};
	}
	addMark(score, subjectName) {
		if (score < 2 || score > 5) {
			return;
		}
		if (!this.marks[subjectName]) {
			this.marks[subjectName] = [score];
		} else {
			this.marks[subjectName].push(score);
		}
	}
	getAverageBySubject(subjectName) {
		if (!this.marks.hasOwnProperty(subjectName)) {
			return 0;
		}
		const marks = this.marks[subjectName];
		const sum = marks.reduce((total, mark) => total + mark, 0);
		return sum / marks.length;
	}
	getAverage() {
		if (!Object.keys(this.marks)) {
			return 0;
		}
		let sum = 0;
		let count = 0;
		Object.entries(this.marks).forEach(([key, value]) => {
			count += Object.values(value).length;
			sum += Object.values(value).reduce((acm, a) => acm + a, 0);
		});
		return sum / count;
	}
	excluded(reason) {
		delete this.marks;
		this.excluded = reason;
	}
}
