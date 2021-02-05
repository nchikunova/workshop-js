function findSame(...args) {
  const arr = args.map(element =>
    element.toLowerCase().split('').sort().join(''),
  );
  console.log(arr);

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i - 1] === arr[i]) {
      return 'Yes';
    }
  }
  return 'No';
}

console.log(findSame('кот', 'ток', 'окт'));
