function makeArray(firstArray = [], secondArray = [], maxLength = 15) {
  //
  // Start validation of input data
  if (!Array.isArray(firstArray)) {
    return 'Error.First argument is not array!';
  } else if (!Array.isArray(secondArray)) {
    return 'Error.Second argument is not array!';
  } else if (typeof maxLength !== 'number') {
    return 'Error.Last argument is not number!';
  } else if (maxLength < 0) {
    return 'Error.The last argument is negative number!';
  } else if (maxLength % 1 !== 0) {
    return 'Error.The last argument is not an integer!';
  }
  // End validation of input data
  //
  const mainArray = firstArray.concat(secondArray);

  if (mainArray.length > maxLength) {
    return mainArray.slice(0, maxLength);
  } else {
    return mainArray;
  }
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
console.log(makeArray([23], [67], -1.1));
