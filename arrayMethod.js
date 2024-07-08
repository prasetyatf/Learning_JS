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

// input: array
const barisAngka = [1,2,3,4]

// FOREACH : mengaplikasikan fungsi ke setiap nilai
// output : undefined

const forits = barisAngka.forEach((value, index, arr) => {
    return value+1
})
console.log(`forEach: ${forits}`)


// MAP : mengaplikasikan fungsi ke setiap nilai
// output : array

const mep = barisAngka.map((value, index, arr) => {
    return value+1
})
console.log(`map: ${mep}`)


// FILTER : mengecek semua nilai dengan kondisi tertentu
// output: array

const saring = barisAngka.filter((val, index, arr)=>{
    return val<4
})
console.log(`filter: ${saring}`)


// FIND : mengecek nilai-nilai sampai memenuhi kodisi tertentu
// output : value

const cari = barisAngka.find((val, index)=>{
    return val > 2
})
console.log(`find: ${cari}`)


// REDUCE : mengaplikasikan fungsi ke semua elemen untuk memproduksi satu value
// output : value

const REDUCE = barisAngka.reduce((totalPrevValue, value, index, arr)=>{
    return totalPrevValue + value
})
console.log(`reduce: ${REDUCE}`)


// EVERY (analogi logika AND) : mengecek semua nilai sesuai kondisi tertentu
// output: boolean

const semua = barisAngka.every((val, index, arr)=>{
    return val > 1
})
console.log(`every: ${semua}`)


// SOME(analogi logika OR) : mengecek semua nilai sesuai kondisi tertentu
// output: boolean

const beberapa = barisAngka.some((val, index, arr)=>{
    return val > 1
})
console.log(`some: ${beberapa}`)
