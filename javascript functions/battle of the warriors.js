function Warrior(name, strength) {
    return {
        name: name,
        hp: 100,
        strength: strength,
        attack: function () {
            return Math.floor(Math.random() * (this.strength + 1));
        }
    };
}

const warrior1 = Warrior("Thor", 20);
const warrior2 = Warrior("Ares", 25);

for (let round = 1; round <= 10; round++) {
    console.log(`Round ${round}:`);
    
    let damage1 = warrior1.attack();
    warrior2.hp -= damage1;
    if (warrior2.hp < 0) warrior2.hp = 0;
    console.log(`${warrior1.name} attacks ${warrior2.name} for ${damage1} damage. ${warrior2.name} HP: ${warrior2.hp}`);
    
    let damage2 = warrior2.attack();
    warrior1.hp -= damage2;
    if (warrior1.hp < 0) warrior1.hp = 0;
    console.log(`${warrior2.name} attacks ${warrior1.name} for ${damage2} damage. ${warrior1.name} HP: ${warrior1.hp}`);
    
    console.log("--------------------------------");
}

if (warrior1.hp > warrior2.hp) {
    console.log(`🏆 ${warrior1.name} WINS the battle! with ${warrior1.hp} HP remaining! 🏆`);
} else if (warrior2.hp > warrior1.hp) {
    console.log(`🏆 ${warrior2.name} WINS the battle! with ${warrior2.hp} HP remaining! 🏆`);
} else {
    console.log("It's a draw!");
}

console.log("Battle ended!");