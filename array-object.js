const isiDompet = ["uang 1000", "ktp", "sim"];

a = isiDompet[2];
isiDompet.splice(2, 1, "sim a");

console.log(`isi dompet awal ${a}`);
console.log(`isi dompet disp  lice ${isiDompet}`);

console.log(...isiDompet);

const isiSaku = ["sim c", "karcis"];

console.log("menggabungkan 2 array menggunakan SPREAD:", [
  ...isiSaku,
  ...isiDompet,
]);

const objek1 = {a:1, b:2}
const objek2 = {z:00, y:11}

console.log('menggabungkan dua object dengan SPREAD:', {...objek1, ...objek2})

const identitas = {nama:'tegar', umur:22, manusia:true, anak:false}

// destructuring object atau mengubah KEY menjadi VARIABLE
const {nama, manusia} = identitas
console.log(`destucturing object identitas: ${nama} ${manusia}`)

// menambahkan key baru
const {pekerjaan = false} = identitas
console.log(`destucturing assignment object identitas: pekerjaan = ${pekerjaan}`)

let anak = 'taa'; // tidak pakai ; jadi error

({anak} = identitas)
console.log(anak)

// destructuring array: memasukkan data ke variable

const hobi = ['mancing', 'baca', 'berenang']
const [hobi1] = hobi
console.log(`hobi[1] = ${hobi1}`)

const [,,hobi3] = hobi //jumlah koma berarti jumlah index yang dilewati
console.log(`hobi[3] = ${hobi3}`)

