// INI LOCAL MODULE. SEMUA MODULE BISA MENGEXPORT APAPUN

const myLastName = "Tegar";

const id = {
  nama: "tegar",
  umur: 22,
  intro() {
    return `nama saya ${this.nama}, berumur ${this.umur}`;
  },
};

const isiDompet = () => console.log(0);

// CARA EXPORT 1: SEMUA EXPORT ADL OBJECT.
// module.exports.myLastName = myLastName;
// module.exports.isiDompet = isiDompet;
// module.exports.id = id;

// CARA EXPORT 2
// module.exports = {
//     myLastName: myLastName,
//     id: id,
//     isiDompet: isiDompet,
// }
module.exports = { myLastName, id, isiDompet };
