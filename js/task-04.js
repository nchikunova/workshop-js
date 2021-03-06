const students = [
  { name: 'Olha', gender: 'female' },
  { name: 'Oleh', gender: 'male' },
  { name: 'Kristi', gender: 'female' },
];

function sortByGender(students) {
  let result = { male: [], female: [] };
  students.forEach(student => {
    student.gender === 'male'
      ? result.male.push(student)
      : result.female.push(student);
  });
  return result;
}
console.log(sortByGender(students));

// const students = [
//   { name: 'Ольга', gender: 'female' },
//   { name: 'Олег', gender: 'male' },
//   { name: 'Кристи', gender: 'female' },
// ];

// function sortByGender(students) {
//   let maleArray = [];
//   let femaleArray = [];
//   students.forEach(student => {
//     if (student.gender === 'male') {
//       maleArray.push(student);
//     } else {
//       femaleArray.push(student);
//     }
//   });
//   return {
//     female: femaleArray,
//     male: maleArray,
//   };
// }

// console.log(sortByGender(students));
