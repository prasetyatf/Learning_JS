// promise ada krn masalah callback hell & konsekuensi async(berhasil / gagal)
// DEKLARASI fungsi dg promise
function getUsers(isOffline) {
  // return a promise object
  return new Promise((resolve, reject) => {

    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
    
      if (isOffline) {
        reject(new Error('cannot retrieve users due offline'));
        return;
      }

      resolve(users);
    }, 3000);
  });
}

// PEMANGGILAN fungsi dg method dr promise
getUsers(false)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));

// 2 cara mengubah callback menjadi promise: refactor & fitur promisify

// Promise berantai. pemaggilan function dg  bnyk .then

// Promise static method digunakan utk mengatur banyak promise
// Promise.all, Promise.race, Promise.allSettled, dan Promise.any.  di bawah adl contoh promise.all()

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values)); // [1, 2, 3] setelah 3 detik

