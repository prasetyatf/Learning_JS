// WeakMap adlah Map yang memiliki Keys berupa non-primitiv data type
// WeakMap mendukung garbage collection scr otomatis(hanya dimiliki oleh non-primitif data type)
// Weak mengacu pada referensi nilai, jika nilai tidak digunakan/tak terjangkau maka referensi dihapus
// WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().
// WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.

// Map vs WeakMap: mengguanakn Map tidak benar-benar menghapus nilai dari memory
const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // Menambahkan user "Jonas"

jonas = null; // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(visitsCountMap);
}, 10000);

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/

// Map vs WeakMap: menggunakan WeakMap dapat menghapus nilai dari memory
const { inspect } = require("util");

const visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // Menambahkan user "Jonas"

jonas = null; // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);

/* output
  WeakMap {  }
*/

// WeakSet adalah varian Set dengan reference
// WeakSet tidak bisa menyimpan nilai primitif.
// WeakSet bukan iterable dan hanya memiliki method add(), has(), dan delete().
// WeakSet tidak memiliki properti size.
