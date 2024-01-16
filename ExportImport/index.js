// urutan berikut sudah menjadi prioritas require dalam mencari module
// CORE MODULE
const fs = require("fs");

// LOCAL MODULE
const identitas = require("./mod/identitas");

// THIRD PARTY MODULE/MODULE YG DIINSTAL LEWAT NPM

console.log(identitas); //menghasilkan object, krn semua module dianggap object
console.log(identitas.myLastName);
console.log(identitas["myLastName"]);
console.log(identitas.id.intro());
// console.log(fs);
