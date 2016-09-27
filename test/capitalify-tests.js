var expect = require('chai').expect;
var capitalify = require('../lib/capitalify');

describe('capitalify', function() {
  it('should capitalify lower case text', function() {
    expect(capitalify('hello')).to.equal('HELLO');
  });
  it('should capitalify upper case text', function() {
    expect(capitalify('HELLO')).to.equal('HELLO');
  });
  it('should capitalify mixed case text', function() {
    expect(capitalify('hElLo')).to.equal('HELLO');
  });
  it('should only capitalify all the words', function() {
    expect(capitalify('some text')).to.equal('SOME TEXT');
  });
});
