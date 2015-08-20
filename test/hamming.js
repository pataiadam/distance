var should = require('chai').should(),
    d = require('../index'),
    hamming = d.hamming;

describe('#hamming', function() {
    var array1 = [0,1,2,3,4,5];
    var array2 = [1,0,2,3,4,5];
    var array3 = [0,1,2,3,4,5,6];
    var string1 = '012345';
    var string2 = '102345';
    var string3 = 'abcdefg';

    it('should return correct hamming distance (array)', function() {
        hamming(array1, array2).should.equal(2);
        hamming(array1, array1).should.equal(0);
    });

    it('should return correct hamming distance (string)', function() {
        hamming(string1, string2).should.equal(2);
        hamming(string1, string1).should.equal(0);
        hamming(string3, string3).should.equal(0);
    });

    it('should return NaN (diff. array length)', function() {
        isNaN(hamming(array1, array3)).should.equal(true);
    });

    it('should return NaN (diff. string length)', function() {
        isNaN(hamming(string1, string3)).should.equal(true);
    });

    it('should return NaN (invalid type)', function() {
        isNaN(hamming(213, 213)).should.equal(true);
    });

    it('should return NaN (different types)', function() {
        isNaN(hamming(array1, string1)).should.equal(true);
    });

});