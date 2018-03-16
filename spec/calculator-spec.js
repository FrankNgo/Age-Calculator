import { Calculator } from './../src/calculator.js'

describe('Calculator', function() {

  const testDate = new Calculator("6/28/1994");

  it('creates person object with a date in format (MM/DD/YYYY)', function() {
    expect(testDate.date).toEqual("6/28/1994");
  });

  it('converts users age to seconds', function() {
    let seconds = 772786800 ;
    testDate.ageToSeconds();
    expect(testDate.newDate).toEqual(seconds);
  });

  it('compares users age in seconds with current date in seconds', function() {
    let currentDate = Math.floor(Date.now() / 1000);
    let differenceBetweenDates = currentDate - testDate.newDate;
    expect(testDate.dateDifference()).toEqual(differenceBetweenDates);
  });

  it('converts and returns users age in mercurian years', function() {
    let age = testDate.dateDifference();
    let convertedAge = age/(365 * .24);
    expect(testDate.mercurianAge()).toEqual(convertedAge);
  });

  it('converts and returns users age in venusian years', function() {
    let age = testDate.dateDifference();
    let convertedAge = age/(365 * .62);
    expect(testDate.venusianAge()).toEqual(convertedAge);
  });

  it('converts and returns users age in martian years', function() {
    let age = testDate.dateDifference();
    let convertedAge = age/(365 * 1.88);
    expect(testDate.martianAge()).toEqual(convertedAge);
  });

  it('converts and returns users age in jovian years', function() {
    let age = testDate.dateDifference();
    let convertedAge = age/(365 * 11.86);
    expect(testDate.jovianAge()).toEqual(convertedAge);
  });
});
