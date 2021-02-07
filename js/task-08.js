function f(num, num1) {
  if (num1) {
    return num + num1;
  }
  return function (num1) {
    return num + num1;
  };
}

console.log(f(2, 3));
console.log(f(2)(3));
