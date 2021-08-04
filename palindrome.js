function isPalindrome(s) {
  if (typeof s === 'string' && s) {
    const strLowerCase = s.toLowerCase().replace(/[\W_]/g, '');
    const reverseString = strLowerCase.split('').reverse().join('');
    return reverseString === strLowerCase ? true : false;
  } else return false;
}


console.log(isPalindrome('La mariée ira mal'))
