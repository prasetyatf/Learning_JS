// synchronous callback

// sync. callback menggunakan built in function
const iniArray = [1, 2, 3, 4];

console.log(iniArray.map((isiArray) => isiArray + 1));

// sync. callback menggunakan function sendiri
function pertama(a) {
  return `function pertama: ${a}`;
}

function kedua(cb) {
  const varKedua = "data berasal dari function kedua";
  cb(varKedua);
}

console.log(kedua(pertama)); //output knp undefined?
