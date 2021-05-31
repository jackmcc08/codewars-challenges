function sum (arr) {
  "use strict";
  return arr.length === 0 ? 0 : arr.reduce((a,b) => a + b)
  // return arr.reduce((a,b) => a + b, 0) - better solution from codewars solutions - not mine
};

module.exports = sum
