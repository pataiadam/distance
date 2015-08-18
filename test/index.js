var should = require('chai').should(),
    d = require('../index'),
    norm = d.norm;

describe('#norm', function() {
    var vector1 = [0, 0];
    var vector2 = [1, 1];
    it('should return correct euclidean distance', function() {
        norm(vector1, vector2).should.equal(Math.sqrt(2));
        norm(vector1, vector2, 2).should.equal(Math.sqrt(2));
        norm(vector2).should.equal(Math.sqrt(2));
        norm(vector2, 2).should.equal(Math.sqrt(2));
    });

    it('should return 1-norm (Taxicab norm or Manhattan norm)', function() {
        norm(vector1, vector2, 1).should.equal(2);
        norm(vector2, 1).should.equal(2);
    });

    it('should return inf-norm (Maximum norm)', function() {
        norm(vector1, vector2, Number.POSITIVE_INFINITY).should.equal(1);
        norm(vector1, vector2, 'inf').should.equal(1)
        norm(vector2, Number.POSITIVE_INFINITY).should.equal(1);
        norm(vector2, 'inf').should.equal(1);
    });
});