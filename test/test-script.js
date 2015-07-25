var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var chirp = require('../chirp.js')

describe('chirpRecursion', function() {

  it('should be a function', function() {
    expect(chirp).to.be.a('function');
  });
});