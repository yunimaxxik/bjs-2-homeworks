function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
	if (this.marks) {
		this.marks.push(...marks);
	}
};

Student.prototype.getAverage = function () {
	if (this.marks && this?.marks.length > 0) {
		return this.marks.reduce((acm, a) => acm + a, 0) / this.marks.length;
	} else {
		return 0;
	}
};

Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
};

let student2 = new Student('Артём', 'мужской', 25);
student2.setSubject('Geometry');
student2.exclude('плохая учёба');
console.log(student2);
student2.getAverage();
