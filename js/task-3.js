function filterArray(numbers = [], value = 0) {
  if (!Array.isArray(numbers) || typeof value !== 'number')
    return 'Incorrect data. First argument is not array or second argument is not number!';
  for (const item of numbers) {
    if (typeof item !== 'number') return 'Elements of array are not numbers';
  }

  let newArray = [];

  for (const item of numbers) {
    if (item > value) {
      newArray.push(item);
    }
  }
  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
console.log(filterArray(['fsdg', 'fwefwe'], 5));
