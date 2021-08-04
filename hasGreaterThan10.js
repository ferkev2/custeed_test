/*
const hasGreaterThan10 = () => { // useless function already exists in native javascript
  var a = this; // is an empty object we are in an arrow function. Useless variable
  var greater = false; // can use let instead of var
  for(let i=0; i < a.length; i++) { // the loop not working because this is an empty object with no length
    if(a[i] > 10) { // the check of first value will always return false
      greater = true;
    }
  }

  return greater;
}
*/
Array.prototype.hasGreaterThan10 = hasGreaterThan10; // no need to rewrite array class prototype of javascript

	if([1, 5, 7, 12, 4, 3].hasGreaterThan10()) { // can test intermediate value to stock the result but will return false
	  console.log('OK');
	} else {
	  console.log('KO');
  }

///////////////// RESPONSE 1 //////////////////
if([1, 5, 7, 12, 4, 3].find(element => element > 10)) {
  console.log('OK');
} else {
  console.log('KO');
}
//////// RESPONSE 2 ///////////

function hasGreaterThan10() {
  let greater = false;
  this.forEach(value => {
    if (value > 10) {
      greater = true;
    };
  })

  return greater;
}
