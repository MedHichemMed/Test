exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

      for(let k = start; k <= end; k++){
          setTimeout(100);
          console.log(k);
      }

  }
};
