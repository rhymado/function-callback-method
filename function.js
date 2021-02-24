// es5
// deklarasi
const var1 = null;
const var2 = [1, 2, 3];
const var3 = {
  id: 1,
  title: "Harry Potter",
};

function namaFungsi(param1, param2) {
  // implementasi
  // inisialisasi variabel lokal dengan nama parameter yang memiliki value dari input berdasarkan posisinya
  console.log(param1, param2);
}

// namaFungsi(var3, var2);

// ekspresi
// variabel diassign dengan value fungsi tak bernama
const addition = function (a, b) {
  const total = a + b;
  return total;
};

const hasilPenjumlahan = addition(1, 2); // hanya return
// console.log(hasilPenjumlahan); // yang di return di tampilkan ke console

// es6 arrow function
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

const multiplyWithImplicitReturn = (a, b) => a * b;

const multiplyResult = multiply(2, 3);
// console.log(multiplyResult);

// Perbedaan antara fungsi es5 dan es6
// 1. Syntax
// 2. nilai this
const anotherFunc = () => {
  console.log("-".repeat(50), "\n", this);
  // this mengacu ke fungsi parent (non-arrow) pembungkus fungsi tsb
};
function parentFunc() {
  this.greet = "Hello World";
  console.log(this);
  // mengacu ke fungsi tsb
  const childFunc = () => {
    console.log("-".repeat(50), "\n", this);
  };
  childFunc();
}
// parentFunc();
// anotherFunc();

// 3. constructor
const Car = function (color) {
  this.color = color;
  this.printColor = () => {
    console.log(this.color);
  };
};

// fungsi deklarasi dan ekspresi merupakan constructor

const blueCar = new Car("blue");
// console.log(blueCar instanceof Car);
// blueCar.printColor();

const newCar = (color) => {
  this.color = color;
};

// arrow function bukan merupakan constructor

// const redCar = new newCar("red");
// console.log(redCar instanceof newCar);

// 4. arguments (special keyword)
function showArgs() {
  console.log(arguments[0]);
  const showArgsChild = () => {
    console.log(arguments);
  };
  showArgsChild();
}
// showArgs([1, 2, 3], null, "Hello World");

// fungsi es5 bisa menggunakan keyword arguments untuk mengakses parameter yang diberikan

const cannotShowArgs = () => {
  console.log(arguments);
};

// fungsi es6 tidak bisa menggunakan keyword arguments, namun bisa mengakses milik parentnya

// cannotShowArgs([1, 2, 3], null, "Hello World");

// 5. implicit return
function withReturn() {
  "Hello";
  // return undefined
}
console.log(withReturn());

const noReturn = () => "World";

// untuk implementasi simpel (1 baris), maka bisa menggunakan implicit return

console.log(noReturn());
