// method = fungsi didalam objek

const tryMethod = {
  // local this
  firstName: "Riski",
  lastName: "Arifani",
  methodOne: function () {
    console.log("Method One");
  },
  methodTwo() {
    console.log("Method Two");
  },
  methodThree: () => {
    console.log("Method Three");
  },
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

// tryMethod.methodOne();
// tryMethod.methodTwo();
// tryMethod.methodThree();
// tryMethod.printFullName();

// built-in method
// array.push, array.pop
const arrayOfInt = [1, 2, 3];

// push = menambahkan elemen di posisi paling belakang / index tinggi, meretunkan panjang array terbaru
const length = arrayOfInt.length;
// console.log(length, arrayOfInt);
const newLength = arrayOfInt.push(5);
// console.log(newLength, arrayOfInt);

// pop = mengeluarkan elemen di posisi paling belakang / index tinggi, mereturnkan elemen tersebut
const lastElement = arrayOfInt.pop();
// console.log(arrayOfInt.length, arrayOfInt, lastElement);

// sort, map, filter
// sort => method array untuk mengurutkan elemen
const randomNumberGen = () => {
  const arrOfInt = [];
  for (let i = 0; i < 5; i++) {
    let e = Math.floor(Math.random() * 10 + 1);
    arrOfInt.push(e);
  }
  return arrOfInt;
};

const randomArray = randomNumberGen();
// console.log(randomArray);
// randomArray.sort(); // ascending berdasarkan ASCII
const ascendingSort = (a, b) => a - b;
const descendingSort = (a, b) => b - a;
randomArray.sort(ascendingSort); // ascending
// console.log(randomArray);
randomArray.sort(descendingSort); // descending
// console.log(randomArray);

// map => berfungsi untuk melakukan iterasi sepanjang array dan melakukan perubahan berdasarkan fungsi cb, return array hasil perubahan
// for in, for of
const mapCb = (value) => {
  //   console.log(value);
  // return undefined
  //   return value + 1;
  return value % 2 === 0 ? "genap" : "ganjil";
};
const mapResult = [1, 3, 2].map(mapCb);
// console.log(mapResult);

// filter => berfungsi untuk menyaring elemen yang tidak diinginkan, return hasil saringan (true maka return sebagai hasil)
const generatedArray = randomNumberGen();
console.log(generatedArray);

const evenFilter = (value) => {
  //   console.log(value);
  return value % 2 === 0 ? true : false;
};
const oddFilter = (value) => {
  //   console.log(value);
  return value % 2 !== 0 ? true : false;
};

const evenNumber = generatedArray.filter(evenFilter);
// console.log(evenNumber);
const oddNumber = generatedArray.filter(oddFilter);
// console.log(oddNumber);

// method chaining
const sortedEvenNumber = generatedArray.filter(evenFilter).sort(ascendingSort);
const sortedOddNumber = generatedArray.filter(oddFilter).sort(descendingSort);
console.log(sortedEvenNumber);
console.log(sortedOddNumber);
