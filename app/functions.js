exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
        return fn.apply(this,arr);
  },

  speak: function(fn, obj) {
       return fn.apply(obj);
  },

  functionFunction: function(str) {

  },

  makeClosures: function(arr, fn) {
    var tmp = arr;
    function ran(){
        return fn(tmp);
    }

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {
      var sum = 0;
      for(var k = 0 ; k < arguments.length; k++){
          sum+= arguments[k];
      }
      return sum;
  },

  callIt: function(fn) {
      var argsLength = arguments.length;
      if(argsLength === 3){
          fn(arguments[1],arguments[2]);
      }else{
          fn(arguments[1],arguments[2],arguments[3]);
      }
  },

  partialUsingArguments: function(fn) {
      var argsLength = arguments.length;
      if(argsLength === 1){
          return _.partial(fn,_);
      }else if(argsLength === 2){
          return _.partial(fn,arguments[1]);
      }else if(argsLength === 3){
          return _.partial(fn,arguments[2],arguments[1]);
      }

  },

  curryIt: function(fn) {

  }
};
