const increment = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i]++;
    if (array[i] > 9) {
      array[i] = 0;
      if (i === 0) {
        // Last iteration, but we need to carry - unshift a 1:
        array.unshift(1);
      }
    } else break;
  }
  return array;
};

console.log(increment([1, 2, 7, 9]));
console.log(increment([3, 9, 9, 9]));
console.log(increment([9, 9, 9, 9]));
console.log(increment([1, 1, 1, 1]));
