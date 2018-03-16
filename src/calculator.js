export class Calculator {
  constructor(date) {
    this.date = date;
    this.newDate = new Date();
  }

  ageToSeconds() {
    this.newDate = Date.parse(this.date)/1000;
    return this.newDate;
  }

  dateDifference() {
     let currentDay = Math.floor(Date.now() / 1000);
     let comparedDates = currentDay - this.newDate;
     return comparedDates;
  }

  mercurianAge () {
    let age = this.dateDifference();
    let convertedAge = age/(365 * .24);
    return convertedAge;
  }

  venusianAge () {
    let age = this.dateDifference();
    let convertedAge = age/(365 * .62);
    return convertedAge;
  }

  martianAge () {
    let age = this.dateDifference();
    let convertedAge = age/(365 * 1.88);
    return convertedAge;
  }

  jovianAge () {
    let age = this.dateDifference();
    let convertedAge = age/(365 * 11.86);
    return convertedAge;
  }
}
