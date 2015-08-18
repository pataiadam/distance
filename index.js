module.exports = {
    norm: function(a, b, p) {
        b = b || Array.apply(null, Array(a.length)).map(Number.prototype.valueOf,0);
        p = p || 2;
        if(a.length!== b.length){
            if(a.length<b.length){
                a.concat(Array.apply(null, Array(b-a)).map(Number.prototype.valueOf,0));
            }else{
                b.concat(Array.apply(null, Array(a-b)).map(Number.prototype.valueOf,0));
            }
        }
        var sum = 0;
        for(var n = a.length; n--; )
            sum += Math.pow(a[n]-b[n], p);
        return Math.pow(sum, 1/p);
    }
};