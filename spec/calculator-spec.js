import { Person } from './../src/calculator.js'

describe('Person', function() {

  let personDate;

  it('creates person object with a date in format(MM/DD/YYYY)', function() {
    personDate = new Person("6/28/1994");
    expect(personDate.date).toEqual("6/28/1994");
  });
});
