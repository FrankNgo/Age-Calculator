import { Calculator } from './../src/calculator.js'

describe('Calculator', function() {

  const testDate = new Calculator("6/28/1994");
  const earthExpectency = 100;
  const olderTestDate = new Calculator("6/28/1800");

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

  it('provides life expectancy for user mercury', function() {
    let mercurianExpectency = earthExpectency / .24;
    let convertedAge = Math.abs((Number(mercurianExpectency - testDate.mercurianAge()).toFixed(1)));
    expect(testDate.mercuryLifeExpectency()).toEqual(convertedAge);
  });

  it('provides years passed since life expectancy mercury', function() {
    olderTestDate.ageToSeconds();
    let mercurianExpectency = earthExpectency / .24;
    let mercurianAge = olderTestDate.mercurianAge();
    let convertedAge = Math.abs((Number(mercurianAge - mercurianExpectency).toFixed(1)));
    expect(olderTestDate.mercuryLifeExpectency()).toEqual(convertedAge);
  });

  it('provides life expectancy for user venus', function() {
    let venusianExpectency = earthExpectency / .62;
    let convertedAge = Math.abs((Number(venusianExpectency - testDate.venusianAge()).toFixed(1)));
    expect(testDate.venusLifeExpectency()).toEqual(convertedAge);
  });

  it('provides years passed since life expectancy venus', function() {
    olderTestDate.ageToSeconds();
    let venusianExpectency = earthExpectency / .62;
    let venusianAge = olderTestDate.venusianAge();
    let convertedAge = Math.abs((Number(venusianAge - venusianExpectency).toFixed(1)));
    expect(olderTestDate.venusLifeExpectency()).toEqual(convertedAge);
  });

  it('provides life expectancy for user mars', function() {
    let martianExpectency = earthExpectency / 1.88;
    let convertedAge = Math.abs((Number(martianExpectency - testDate.martianAge()).toFixed(1)));
    expect(testDate.martianLifeExpectency()).toEqual(convertedAge);
  });

  it('provides years passed since life expectancy mars', function() {
    olderTestDate.ageToSeconds();
    let martianExpectency = earthExpectency / 1.88;
    let martianAge = olderTestDate.martianAge();
    let convertedAge = Math.abs((Number(martianAge - martianExpectency).toFixed(1)));
    expect(olderTestDate.martianLifeExpectency()).toEqual(convertedAge);
  });


});
