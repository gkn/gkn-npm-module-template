var assert = require('assert');
var t = require('./index');

describe('module-template', function() {

  describe('#(1)', function() {
    it('should return true when argument is 1', function() {
      assert.equal(true, t(1));
    });
  });

  describe('#(-1)', function() {
    it('should return false when argument is -1', function() {
      assert.equal(false, t(-1));
    });
  });

  describe('#(0)', function() {
    it('should return false when argument is 0', function() {
      assert.equal(false, t(0));
    });
  });
  
});

