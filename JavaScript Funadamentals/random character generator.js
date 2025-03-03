// Function to generate a new character with random attributes
function generateCharacter(name) {
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"]; //list of names
    const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"]; //list of classes
    const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"]; //list of special attakces
  
    return {
      name: name || names[Math.floor(Math.random() * names.length)], //this will select random name
      class: classes[Math.floor(Math.random() * classes.length)],//this will select random class
      health: Math.floor(Math.random() * (150 - 50 + 1)) + 50, //assign a random health from 50 - 150
      specialAbility: abilities[Math.floor(Math.random() * abilities.length)],//this will select random abilities
  
      // this will be for the battle part
      battle: function (otherCharacter) {
        if (!otherCharacter || typeof otherCharacter.health !== "number") {
          console.log("Invalid opponent.");
          return;
        }

        const damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // generate a random damage value between 5 and 20
        const previousHealth = otherCharacter.health; // it will store the opponent health
        otherCharacter.health = Math.max(0, otherCharacter.health - damage);// Reduce the opponent health by the damage value
  
        console.log(
          `Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ${previousHealth} to ${otherCharacter.health}.`
        );
  
        // Check if the opponent health has reached zero
        if (otherCharacter.health === 0) {
          console.log(`${otherCharacter.name} has been defeated!`);
        }
      }
    };
  }
  

  const char1 = generateCharacter(); 
  const char2 = generateCharacter("Drake"); 
  
  console.dir(char1); 
  console.dir(char2); 
  
  char1.battle(char2);
  
  

  function generateMultipleCharacters(x) {

    if (typeof x !== "number" || x <= 0) {
      console.log("Please provide a valid number of characters.");
      return [];
    }
  
    const characters = [];
  
    for (let i = 0; i < x; i++) {
      characters.push(generateCharacter());
    }
  
    return characters; 
  }
  
  const characterArray = generateMultipleCharacters(3);
  console.dir(characterArray);
  