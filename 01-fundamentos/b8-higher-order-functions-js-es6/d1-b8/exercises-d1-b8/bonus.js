const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
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
