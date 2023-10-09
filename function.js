// Anonymous Function
const iniFun = function (arg) {
  if (arg == "tegar") {
    return arg;
  } else {
    return "salah";
  }
};

console.log(iniFun("tegar"));

// Rest Parameter
function iniRest(...masukan) {
  return masukan;
}

console.log(iniRest(1, 2, 3, 4));

// Arrow Function (tidak perlu menulis keyword function)

// Arrow Function yg memiliki >1 parameter
const iniArrow2 = (a, b) => {
  return a + b;
};
console.log(iniArrow2(1, 2));

// Arrow Function yg memiliki 1 parameter. argumen bs tnp tanda kurung
const iniArrow = (a) => {
  return a;
};
console.log(iniArrow("tegar"));

// Arrow Function yg tidak memiliki parameter
const iniArrow3 = () => {
  return "kosong";
};
console.log(iniArrow3("tegar"));

// Arrow Function 1 baris. tidak perlu return dan tanda kurung
const iniArrow4 = (z, x) => z * x;
console.log(iniArrow4(2, 3));

// Variable Scope: Global vs Local(function scope, block scope)
// penentuan variable scopenya didasarkan pada dimana declaration variable nya

// Closure, seperti fitur private di java. pelajari ini di luar
