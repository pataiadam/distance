# distance-calc
A JS module for calculating several distances between two (n-dimensional) points

## Installation

  npm install distance-calc --save

## Usage

### p-norm
```
  var d = require('distance-calc');
  var vector1 = [1, 2, 3, 4];
  var vector2 = [3, 2, 1, 0];

  // to get Euclidean length or size of vectors
  d.norm(vector1);
  d.norm(vector1, 2);

  //p-norm
  d.norm(vector1, 42);
  d.norm(vector1, Number.POSITIVE_INFINITY);
  d.norm(vector1, 'inf');

  //Euclidean distance between two points
  d.norm(vector1, vector2);

  //p-norm dist. between two points
  d.norm(vector1, vector2, 42);

  //different dimensional
  var a2dVector = [5, 5];
  var a4dVector = [5, 5, 0, 0];
  var isEqual = d.norm(a2dVector, vector1) == d.norm(a4dVector, vector1); //true
   isEqual = d.norm(vector1, a2dVector) == d.norm(vector1, a4dVector); //true
```
## Tests

  npm test

## Release History

* 0.1.0 Initial release