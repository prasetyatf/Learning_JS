// OOP: Object Composition
// inheritance(pengelompokan berdasar peran) vs Object composition(pengelompokan berdasar fungsi)

// inheritance
class Developer {
  constructor(name) {
    this.name = name;
  }
}

class FrontEndDeveloper extends Developer {
  designingUI() {
    return "designing UI";
  }
}

class BackEndDevloper extends Developer {
  buildingMachine() {
    return "building machine";
  }
}

// fullstack = FrontEnd + BackEnd. HOW?
// this is why Object Composition needed

// Object Composition(Pengelompokan berdasarkan tugas)
// tugas terdiri dari class, function. Object.assign(class, function, etc.)
// di dalam setiap function terdapat object
// key dari object yang akan menjadi method
class Developer2 {
  constructor(name) {
    this.name = name;
  }
}

function canDesignUI() {
  return {
    designUI: () => "building UI",
  }; // harus berupa object
}

function canBuildMachine() {
  return {
    buildMachine: () => "building machine",
  };
}

function createFullStack() {
  const developer = new Developer2("developer"); // krn Developer2 adl class, mk perlu dideclare
  return Object.assign(developer, canDesignUI(), canBuildMachine()); // Object composition
}

const fullstackDeveloper = createFullStack();
console.log(fullstackDeveloper.buildMachine()); // method berasal dari key object di dalam function

console.log(
  `Seorang Fullstack ${fullstackDeveloper.name} 
  dapat melakukan ${fullstackDeveloper.buildMachine()} dan ${fullstackDeveloper.designUI()}`
);
