var arr = [
  { name: 'width', value: 10 },
  { name: 'height', value: 20 },
];

const obj = {};

for (const item of arr) {
  obj[item.name] = item.value;
}

console.log(obj);
