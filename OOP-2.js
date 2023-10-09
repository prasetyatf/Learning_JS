// OOP: Inheritence, Overriding
// Mobile Legend: Unit -> Turret & Hero

class Unit {
  constructor(unitName, unitHp) {
    this.name = unitName;
    this.hp = unitHp;
  }
  attack() {
    return `attacking!`;
  }
}

class Turret extends Unit {
  attack() {
    return `turret is ${super.attack()}`;
  }
}

class Hero extends Unit {
  skillAttack() {
    return `${this.name} skill ${this.attack()}`;
  }
}

const redTurret = new Turret("Red Turret", 400);
const zilong = new Hero("Zilong", 300);

console.log(redTurret);
console.log(redTurret.attack());

console.log(zilong);
console.log(zilong.name);
console.log(zilong.attack()); // attack() sudah otomatis method overriding dari super class Unit
console.log(zilong.skillAttack());
