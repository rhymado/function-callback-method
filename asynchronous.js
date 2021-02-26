// Synchronous
const p1 = () => {
  console.log("P1");
};

const p2 = () => {
  console.log("P2");
};

const p3 = () => {
  console.log("P3");
};

// p2();
// p1();
// p3();

// Asynchronous
// bisa simulasikan menggunakan setTimeout
// setTimeout => fungsi yang dijalankan setelah waktu habis (ms)
const a1 = () => {
  const printA1 = () => console.log("A1");
  setTimeout(printA1, 200);
};

const a2 = () => {
  const printA2 = () => console.log("A2");
  setTimeout(printA2, 400);
};

const a3 = () => {
  const printA3 = () => console.log("A3");
  setTimeout(printA3, 300);
};

a3();
a2();
a1();
