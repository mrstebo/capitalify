var expect = require('chai').expect;
var capitalify = require('../lib/capitalify');

describe('capitalify', function() {
  it('should capitalize lower case text', function() {
    expect(capitalify('hello')).to.equal('Hello');
  });
  it('should capitalize upper case text', function() {
    expect(capitalify('HELLO')).to.equal('Hello');
  });
  it('should only capitalize the first word', function() {
    expect(capitalify('some text')).to.equal('Some text');
  });
});
