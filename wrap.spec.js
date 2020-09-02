const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('returns whole strong if number is longer than string', () => {
      expect(wrap("hello",6)).to.equal('hello')
  });
  it('returns string after line number', () => {
      expect(wrap('loren ipsum ', 6)).to.equal('loren\nipsum\n')
  })
  it('returns strings at spaces within line numbers',()=> {
      expect(wrap('Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.', 20)).to.equal('Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.\n')
  })
});

