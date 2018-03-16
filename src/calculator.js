export class Person {
  constructor(date) {
    this.date = date;
    this.newDate = new Date();
  }


  ageToSeconds() {
    this.newDate = Date.parse(this.date)/1000;
    return this.newDate;
  }
}
