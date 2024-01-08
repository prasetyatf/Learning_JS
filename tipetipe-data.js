// primitive data type: number, string, bigint, undefined, null, boolean
// non-primitive data type: object 
// array, map, set

// empty object is called cabinet
const emptyObj = {};
const emptyObj2 = new Object();

// object is key-value pair. 
// the value can be anything, even a function.
const iniObject = new Object({ nama: "tegar", usia: 22 });
const objFunc = {anu: function(){return 2*2}};
// the key is string or computed property [].
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.apple ); // 5 if fruit="apple"

// if the value = variable then it can be simplified
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
  };
}

// if key = value then it can be simplified
const iniObj = {
  name, //name:name
  age:30,
};


// accessing and modifying object
console.log(iniObject.nama);
console.log(iniObject["nama"]); //best practice krn dpt menggunakan spasi
iniObject["usia"] = 99;
console.log(iniObject);

// destructuring object
const { nama, usia } = iniObject;
console.log(nama, usia);
const { pekerjaan = false } = iniObject;
console.log(nama, pekerjaan);

// spreading object
const ituObject = new Object({ skill: "javascript" });
const newObject = new Object({ ...iniObject, ...ituObject });
console.log(newObject);

// array
const iniArray = new Array(["aku", "adalah", "tegar"]);

// accessing and modifying array
console.log(iniArray[0]);
iniArray.splice(2, 1, "prasetya");
console.log(iniArray);

// destructuring array
const [, , namasaya] = iniArray;
console.log(`destructuring array: ${namasaya}`);

// spreading array
const ituArray = ["dan", "prasetya"];
console.log([...iniArray, ...ituArray]);

// map (object dengan key tipe data apapun, menulisnya dg array di dalam array)
// declare pake new Map(), supaya dianggap Map bukan Array di dlm Array
const iniMap = new Map([
  ["1a", "prasetya"],
  ["1b", "tegar"],
]);
console.log(iniMap);

// accesnya pakai .get(), menambahnya pakai .set(), menghapus .delete()
console.log(iniMap["1a"]);
console.log(iniMap.get("1a")); //akan error jika Map declarenya ga seharusnya
iniMap.set("2a", "fitriaji");
console.log(iniMap);
iniMap.delete("2a", "fitriaji");
console.log(iniMap);

// Set (unindexed, unordered, unique)
const iniSet = new Set([1, 1, 1, 2, 3]);
console.log(iniSet);

// .add(), .delete()
iniSet.add(9);
console.log(iniSet);
iniSet.delete(1);
console.log(iniSet);



