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
