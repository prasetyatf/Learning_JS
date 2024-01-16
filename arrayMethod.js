// Function diperlukan utk abstraksi
// Function dpt berada di argumen dan return
// Contoh penerapan Higher-order(pembungkus) function & Callback(dibungkus): iniArray.map(() => return 'hai';)
const arrayKTP = new Array(1, 2, 3);
const objKTP = new Object({ NIK: 33000, nama: "Tegar", usia: 99 });
const setKTP = new Set([3309, "Tegar", 26]);
const mapKTP = new Map([
  ["NIK", 33090],
  ["nama", "Tegar"],
  ["usia", 26],
]);

console.log(arrayKTP);
console.log(objKTP);
console.log(setKTP);
console.log(mapKTP);

console.log("----Built in Function ada di setiap non-primitive data type----");
const hasilMap = arrayKTP.map((item) => item); // return array
console.log(hasilMap);

const hasilForeach = arrayKTP.forEach((item) => item); // return undefined. krn dibuat hanya utk memanggil callback
console.log(hasilForeach);

const hasilForeach2 = arrayKTP.forEach((item) => console.log(item)); // callback berupa menampilkan nilai
console.log(hasilForeach2);
