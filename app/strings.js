exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
      var counter = 0,
          string ='';

      for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
          counter+= 1;
          if (counter < amount) {
            string += str[i];
          }
        } else {
          counter = 0;
          string += str[i];
        }
      };
      return string;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
      var arr = str.split('');
      arr.reverse();
      return arr.join('');
  }
};
