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
