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


// const students = [
//      {
//   name: "Anton",
//   age: 14,
//   gender: "male",
//   grade: 10
// }
// ,
// {
//     name: "Vasya",
//     age: 27,
//     gender: "male",
//     grade: 8
//   },

//   {
//     name: "Karina",
//     age: 47,
//     gender: "female",
//     grade: 6
//   }

// ]


// function avarageGrades(students) {
//     let result = 0;
//     let total = 0;
//     for (const student of students) {
//         result += student.grade
//     }
//     total = result / students.length
//     return total;
// }

// console.log(avarageGrades(students));


// frontend-mentor frontend-mentor
// 18:44
// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив ["premium", "promoted", "top"].
// frontend-mentor frontend-mentor
// 18:48
// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".

const apartaments = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
  name: "Henry",
  phone: "982-126-1588",
  email: "henry.carter@aptmail.com",
  }
}



const aptRating = apartaments.rating
const aptDescr = apartaments.descr
const aptPrice = apartaments.price
const aptTags = apartaments.tags

 const ownerName = apartaments.owner.name
 const ownerPhone = apartaments.owner.phone
 const ownerEmail = apartaments.owner.email
 const numberOfTags = apartaments.tags.length
 const firstTag = apartaments.tags[0]
 const lastTag = apartaments.tags[2]

 