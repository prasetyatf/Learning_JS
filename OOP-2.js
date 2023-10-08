// OOP: Inheritence
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

class Turret extends Unit {}

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
console.log(zilong.attack());
console.log(zilong.skillAttack());
