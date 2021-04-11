class User {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname, year);
  }
  getFullNameStudent() {
    super.getFullName();
  }
  getCourse(thisYear) {
    if (thisYear < 2017) {
      throw "СЛИШКОМ МАЛЕНЬКИЙ ГОД";
    } else {
      const course = this.year - thisYear;
      return `Курс: ${course}`;
    }
  }
}

const user = new Student("df", "dd", 2021);
