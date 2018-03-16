import { Person } from './../src/calculator.js'

describe('Person', function() {

  it('creates person object with a date in format(MM/DD/YYYY)', function() {
    let personDate;
    personDate = new Person("6/28/1994");
    expect(personDate.date).toEqual("6/28/1994");
  });

  it('converts users age to seconds', function() {
    let seconds = 772786800 ;
    let personDate = new Person("6/28/1994");
    personDate.ageToSeconds();
    expect(personDate.newDate).toEqual(seconds);
  });
});
