exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
      var result = arr.reduce(function(a,b){
          return a + b;
      },0);
      return result;
  },

  remove: function(arr, item) {
     var newArray = arr.filter(function(current){
         return current !== item;
     });
     return newArray;
  },

  removeWithoutCopy: function(arr, item) {
    arr =  arr.filter(function(current){
         return current !== item;
     });
    return arr;

  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
      arr.pop(arr);
      return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function(arr1, arr2) {
      var newArray = arr1.concat(arr2);
      return newArray;
  },

  insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count: function(arr, item) {
      var res = 0;
      for(let i=0; i < arr.length; i++){
          if(arr[i] === item){
              res++;
          }
      }
      return res;
  },

  duplicates: function(arr) {
    var res = [];
    arr.sort();
    for(let i = 0; i < arr.length -1; i++){
        if((arr[i] === arr[i+1])){
            res.push(arr[i]);
            res = _.uniq(res);
        }
    }
    return res;
  },

  square: function(arr) {
      arr= arr.map(function(e){
          return e * e;
      });
      return arr;
  },

  findAllOccurrences: function(arr, target) {
      var res = [];
      arr.forEach(function(element, index){
          if(element === target){
              res.push(index);
          }
      });
      return res;

      return res;
  }
};
