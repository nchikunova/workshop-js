const arr = [1, 2, 3];
const arr1 = [5, 3, 2];
const arr2 = [7, 3, 2];

function comon(arr, arr1, arr2) {
  let total = 0;
  for (let item of arr) {
    if (arr1.includes(item) && arr2.includes(item)) {
      total += item;
    }
  }
  return total;
}

console.log(comon([1, 2, 3], [5, 3, 2], [7, 3, 2]));
console.log(comon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]));
