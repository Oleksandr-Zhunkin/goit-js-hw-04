function slugify(title = '') {
  if (typeof title !== 'string')
    return 'Incorrect data. Argument is not string!';

  const arrTitle = title.toLowerCase().split(' ');

  const slug = arrTitle.join('-');

  return slug;
}

console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
console.log(slugify(true));
