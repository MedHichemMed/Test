exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
      var newNum = parseInt(num, 10).toString(2);

  },

  base10: function(str) {
      return parseInt(str,2);
  },

  convertToBinary: function(num) {
      return parseInt(num, 10).toString(2);
  },

  multiply: function(a, b) {

      // this took me 30 minutes -_-
      return parseFloat((a * b).toPrecision(1));
  }
};
