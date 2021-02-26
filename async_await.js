const additionAsync = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log("Pending", new Date().getTime());
    setTimeout(() => {
      // anonymous function
      const success = true;
      if (success) {
        resolve(a + b);
      } else {
        reject("GAGAL");
      }
    }, 300);
  });
};

// async await
// declaration
// async function nama (){}
// expression
// const nama = async function (){}
// arrow
// const nama = async () => {}
async function timesTwo() {
  try {
    const result = await additionAsync(3, 5);
    // bisa berhasil atau gagal
    // jika berhasil, maka lanjut ke bawah
    // jika gagal, maka loncat ke blok catch
    console.log(`Result = ${result * 2}`, new Date().getTime());
  } catch (error) {
    console.log(`Error = ${error}`, new Date().getTime());
  } finally {
    console.log("Promise Selesai");
  }
}

timesTwo();

// Handle Promise itu ada 2
// 1. then catch
// 2. try catch finally

// catatan task 3
// callback(new Error("Sorry Data Not Found"),[])
// const getMonth = (cb) => {
// copas dari slide
// };

// getMonth((param1, param2) => {
//   // do something
// });
