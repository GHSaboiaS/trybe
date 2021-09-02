const mage = {
  healthPoints: 120,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 150,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
const minDamage = 15;

const randomBetween = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const dragonDamage = () => {
  return randomBetween(dragon.strength, minDamage);
}

const warriorDamage = () => { 
  return randomBetween(warrior.strength, warrior.strength * warrior.weaponDmg);
}

const mageDamageCalculator = () => {
  const mana = mageManaCalculator();
  if (mana > 0) {
    return randomBetween(mage.intelligence * 2, mage.intelligence);
  } else {
    return 'Not enough mana';
  }
}

const mageManaCalculator = () => {
  if (mage.mana < 15) {
    return 0;
  } else {
    return 15;
  }
}

const mageCost = () => {
  return {
    mageDamage: mageDamageCalculator(),
    mageManaUsed: mageManaCalculator(),
  }
}

const gameActions = {
  warriorTurn: function (func) {
    const warriorDamage = func();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: function (func) {
    const mageDamage = func().mageDamage;
    const mageManaCost = func().mageManaUsed;
    mage.damage = mageDamage;
    mage.mana -= mageManaCost;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: function (func) {
    const dragonDamage = func();
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  roundResult: function () {
    console.log(battleMembers);
    if (warrior.healthPoints <= 0) {
      console.log('warrior is dead');
    }
    if (mage.healthPoints <= 0) {
      console.log('mage is dead');
    }
    if (dragon.healthPoints <= 0) {
      console.log('DRAGON IS DEAD, WE LIVE FOREVER!')
    }
    return battleMembers;
  },
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageCost);
gameActions.dragonTurn(dragonDamage);
gameActions.roundResult();
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageCost);
gameActions.dragonTurn(dragonDamage);
gameActions.roundResult();
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageCost);
gameActions.dragonTurn(dragonDamage);
gameActions.roundResult();
