// Returning and accessing vars
var sentence = ['my', 'Hello', 'name', 'Rane', 'is', '.'];
var cloudObj = {};

function aFunction() {
  var hidden = 'I am inside a function';
  var second = ' today. Today is Tuesday';
  console.log('function working');
  cloudObj.hidden = hidden;
  cloudObj.second = second;

}

aFunction();

console.log(cloudObj);
