let janjian = new Promise((resolve, reject) => {
  // resolve = cb func jika berhasil (then) (fulfilled)
  // reject = cb func jika gagal (catch) (rejected)
  const action = () => {
    const arrOfBool = [true, false];
    const indexSuccess = Math.floor(Math.random() * 2 - 1);
    const success = arrOfBool[indexSuccess];
    if (success) {
      resolve({
        msg: "Janji Ditepati",
        from: "Riski",
      });
    } else {
      reject({
        msg: "Janji Dibatalkan",
        reason: "Acara Keluarga",
      });
    }
  };
  console.log("Processing....."); // PENDING => FULFILLED/REJECTED
  setTimeout(action, 500);
});

// kita bisa input cb func untuk then dan catch
const promiseHistory = [];
const cbSuccess = (result) => {
  // fungsi bernama cbSuccess
  // fungsi jika berhasil
  console.log(`${result.msg} oleh ${result.from}`);
  promiseHistory.push(result);
};
const cbFail = (error) => {
  // fungsi bernama cbFail
  // fungsi jika gagal
  console.log(`${error.msg} karena ${error.reason}`);
  promiseHistory.push(error);
};
janjian.then(cbSuccess).catch(cbFail);
// promise sifatnya asynchronous

// biasanya dihandle menggunakan anonymous function
janjian
  .then((result) => {
    // anonymous function
    console.log(result);
  })
  .catch((err) => {
    // anonymous function
    // err => singkatan universal untuk error
    // e => singkatan didalam web programming untuk event
    console.log(err);
  });
