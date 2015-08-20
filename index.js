module.exports = {
    norm: function(a, b, p) {
        if(!Array.isArray(a)){
            return Number.NaN;
        }
        if(typeof b === 'number' || b === 'inf'){
            p=b;
            b=null;
        }
        b = b || Array.apply(null, Array(a.length)).map(Number.prototype.valueOf,0);
        p = p || 2;
        if(p === 'inf' || p === Number.POSITIVE_INFINITY){
            var max = -1;
            for(var i = a.length; i--; ) {
                var act = Math.abs(a[i] - b[i]);
                max = act > max ? act : max;
            }
            return max;
        }
        if(a.length !== b.length || p < 1){
            return Number.NaN;
        }
        var sum = 0;
        for(var n = a.length; n--; ) {
            sum += Math.pow(Math.abs(a[n] - b[n]), p);
        }
        return Math.pow(sum, 1/p);
    }
};