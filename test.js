
const assert = require('assert');
const greet = require('./greet');

describe('greeter:', () => {
  it('greets with name', () => {
    let greeting = greet('tester');
    assert.equal(greeting, 'hello tester');
  });

  it('greets with "insert cool name" when no name given', () => {
    let greeting = greet();
    assert.equal(greeting, 'hello insert cool name');
  });
});


describe('arguments:', () => {
  it('arguments are being processsed correctly', () => {
    assert.equal('blah', process.argv[3]);
  });
});