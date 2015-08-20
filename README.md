# distance-calc
A JS module for calculating several distances between two (n-dimensional) points
<p>
    <a href="https://npmjs.org/package/distance-calc">
        <img src="https://badge.fury.io/js/distance-calc.svg"
             alt="npm version">
    </a>
    <a href="https://travis-ci.org/badges/distance-calc">
        <img src="https://travis-ci.org/pataiadam/distance-calc.svg?branch=master"
             alt="build status">
    </a>
</p>

[![NPM](https://nodei.co/npm/distance-calc.png)](https://npmjs.org/package/distance-calc)

## Installation

```
  npm install distance-calc --save
```

## Usage

```
  var d = require('distance-calc');
```

### p-norm
`d.norm(vector1 [ [, vector2] || [, p=2] ])`

#### Arguments

1. `required` *vector1* (Array)
2. *vector2* (Array): default is the null vector ( [0, 0, 0, ...] )
3. *p* (number): the number of norm (p >= 1) (default 2)

#### Examples
```
  var vector1 = [2, 2, 2, 2];
  var vector2 = [3, 3, 3, 3];
  var point2D = [5, 5];

  d.norm(vector1); // 4 - Euclidean distance/length
  d.norm(vector1, 2); // 4 - Euclidean distance/length

  d.norm(vector1, 1); // 8 - Manhattan, Taxicab distance/length
  d.norm(vector1, Number.POSITIVE_INFINITY); // 2 -  Maximum, Uniform norm
  d.norm(vector1, 'inf'); // 2 -  Maximum, Uniform norm

  d.norm(vector1, vector2); // 4 - Euclidean distance
  d.norm(vector1, vector2, 2); // 4 - Euclidean distance
  d.norm(vector1, vector2, 'inf'); // 2 - Maximum, Uniform norm

  d.norm(point2D, vector1); // returns NaN if dimensions are different
  d.norm(vector1, 1/2); // returns NaN if p<1

  //complex vectors - e.g. complex 2D vector is [ a = 3 + 4i, b = 0 - 2i ]
  var modA = norm([3,4]);
  var modB = norm([0,-2]);
  d.norm([modA, modB], 1) // 7
  d.norm([modA, modB], 'inf') // 5
```

### hamming
`d.hamming(param1, param2)`

#### Arguments

1. `required` *param1* (Array | String)
1. `required` *param2* (Array | String)

#### Examples
```
  var array1 = [1, 2, 3, 4];
  var array2 = [1, 1, 1, 1];
  var string1 = 'abcd';
  var string2 = 'aaaa';

  d.hamming(array1, array1); // 0
  d.hamming(array1, array2); // 3

  d.hamming(string1, string1); // 0
  d.hamming(string1, string2); // 3

  d.hamming(array1, string1); // NaN - different types
  d.hamming(array1, [1,2]); // NaN - different size
  d.hamming(string1, 'ab'); // NaN - different size
  d.hamming(123, 123); // NaN - invalid type
```
## Tests
```
  npm test
```