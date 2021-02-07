const arr = [false, 1, 0, 1, 2, 0, 1, 3, 'a'];
function moveZero(a, b) {
  let newArr = [];
  let secondArr = [];
  for (const item of arr) {
    if (item !== 0) {
      newArr.push(item);
    } else {
      secondArr.push(item);
    }
  }

  return [...newArr, ...secondArr];
}

console.log(moveZero(false, 1, 0, 1, 2, 0, 1, 3, 'a'));
