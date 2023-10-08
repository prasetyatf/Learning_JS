// JS is prototype-based lang, not class-based lang.
// method created by constructor function
function Hero(name, mana) {
  this.name = name;
  this.hp = 500;
  this.mana = mana;
}

Hero.prototype.basicAttack = function () {
  return `${this.name} basic attacking!`;
};

zilong = new Hero("Zilong", 300);

console.log(zilong);
console.log(zilong.basicAttack());

// --di ES6 terdapat fitur Class--
class Minion {
  constructor(color) {
    this.name = "Minion";
    this.side = color;
    this.hp = 100;
  }

  attack(enemy) {
    return `${this.side} ${this.name} attacking ${enemy}!`;
  }
}
blueMinion = new Minion("Blue");
redMinion = new Minion("Red");
redMinion.hp = 0; //ternyata nilai atribut dapat diubah dan menghilangkan nilai atribut awal

console.log(redMinion);
console.log(blueMinion.attack());
console.log(redMinion.attack("Blue Minion"));
console.log(redMinion.hp);

// supaya dapat mengubah atribut tanpa menghilangkan atribut awal, mk menggunakan getter setter
// getter harus mengembalikan nilai
// setter harus menerima 1 argumen dan mengembalikan nilai paling akhir(nilai argumen)

class Identitas {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

namaSaya = new Identitas("Prasetya", "Tegar");
console.log(namaSaya.fullName());

namaSaya.firstName = "Tegar";
console.log(namaSaya.fullName()); //firstName data has been overwriten & merubah nilai fullName

// membuat class dg atribut yg dpt dioverwrite, tetapi nilai awalnya tidak berubah
class Identitas2 {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return this._firstName + " " + this.lastName;
  }
  set fullName(argumen) {
    const [firstName, lastName] = argumen.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const namaKamu = new Identitas2("Tegar", "Fitriaji");
console.log(namaKamu.fullName);

namaKamu.firstName = "Prasetya";
console.log(namaKamu.firstName); // ffirstName telah berubah
console.log(namaKamu.fullName); // sedangkan fullName tetap dg nilai awal

namaKamu._firstName = "aaa";
console.log(namaKamu.fullName); //LOH MASIH BISA BERUBAH WKWKWK
// komunitas JavaScript menyepakati bahwa hal properti yang diberi-
// tanda underscore bukan untuk diakses, alias bersifat privat
// private identifier: private property, private method
// private property
class Id {
  #firstName = "Mr.";
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get firstName() {
    return this.#firstName;
  }
  set firstName(arg) {
    return arg;
  }

  fullName() {
    return this.#firstName + " " + this.lastName;
  }
}
const myName = new Id("Prasetya", "Tegar");

console.log(myName.fullName());
console.log(myName.firstName);

myName.firstName = "Pak";
console.log(myName.firstName); // firstName tdk berubah jadi Pak


