exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
      var regExpression = /\d/;
      return regExpression.test(str);
  },

  containsRepeatingLetter: function(str) {
      var regExpression  = /([a-zA-Z]).*?\1/;
      return regExpression.test(str);
  },

  endsWithVowel: function(str) {
      var regExpression  = /.*[aeiou]$/i;
      return regExpression.test(str);
  },

  captureThreeNumbers: function(str) {
      var regExpression  = /.*?(\d)(\d)(\d).*?/;
      var res = regExpression.$1 + regExpression.$2 + regExpression.$3;
      return res;
  },

  matchesPattern: function(str) {
      var regExpression  = /^\d{3}\-\d{3}\-\d{4}$/;
      return regExpression.test(str);
  },

  isUSD: function(str) {
      var regExpression  = /^\d{3}\-\d{3}\-\d{4}$/;
      return regExpression.test(str);
  }
};
