// function multiplyArray(arr, num, callback) {
//     const result = []
//     for(const num of arr) {
//         result.push(element * num)
//     }
//     callback(result)
// }

// function cb(newArr){
//     console.log(`New result arrey: ${newArr}`);}
// // multiplyArray(arr, 3, (newArr) => {console.log(`New result arrey: ${newArr}`);});

// multiplyArray(arr1, 5, (newArr) => {console.log(`New result arrey: ${newArr}`)})


// Створити стрілкову функцію hello1(), яка при визові буде вертати текст “Привіт JavaScript

// const hello1 = (text) => {
//     return text;
// }

// console.log(hello1("Привіт JavaScript"));


const students = [
     {
  name: "Anton",
  age: 14,
  gender: "male",
  grade: 10
}
,
{
    name: "Vasya",
    age: 27,
    gender: "male",
    grade: 8
  },

  {
    name: "Karina",
    age: 47,
    gender: "female",
    grade: 6
  }

]


function avarageGrades(students) {
    let result = 0;
    let total = 0;
    for (const student of students) {
        result += student.grade
    }
    total = result / students.length
    return total;
}

console.log(avarageGrades(students));