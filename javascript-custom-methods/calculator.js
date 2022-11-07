/* exported calculator */

var calculator = {

  add: function (x, y) {
    var sum = x + y;
    return sum;
  },

  subtract: function (x, y) {
    var subtraction = x - y;
    return subtraction;
  },

  multiply: function (x, y) {
    var multiplication = x * y;
    return multiplication;
  },

  divide: function (x, y) {
    var division = x / y;
    return division;
  },

  square: function (x) {
    var squared = x * x;
    return squared;
  },

  sumAll: function (numbers) {
    var sumTotal = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumTotal += numbers[i];
    }
    return sumTotal;
  },

  getAverage: function (numbers) {
    var totalSum = 0;
    for (var j = 0; j < numbers.length; j++) {
      totalSum += numbers[j];
    }
    var average = totalSum / numbers.length;
    return average;
  }
};
