import { Calculator } from './../src/calculator.js'

describe('Calculator', function() {

  it('creates person object with a date in format (MM/DD/YYYY)', function() {
    let testDate = new Calculator("6/28/1994");
    expect(testDate.date).toEqual("6/28/1994");
  });

  it('converts users age to seconds', function() {
    let seconds = 772786800 ;
    let testDate = new Calculator("6/28/1994");
    testDate.ageToSeconds();
    expect(testDate.newDate).toEqual(seconds);
  });

  it('compares users age in seconds with current date in seconds', function() {
    let testDate = new Calculator("6/28/1994");
    let currentDate = Math.floor(Date.now() / 1000);
    let differenceBetweenDates = currentDate - testDate.newDate;
    expect(testDate.dateDifference()).toEqual(differenceBetweenDates);
  });

  it('convertrs and returns users age in mercurian  years', function() {
    let testDate = new Calculator("6/28/1994");
    let age = testDate.dateDifference();
    let result = age/(365 * .24);
    expect(testDate.mercurianAge()).toEqual(result);
  });
});
