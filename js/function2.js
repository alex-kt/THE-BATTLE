// criar a classes de defaultcharacter
const defaultcharacter = {
  name: "",
  life: 1,
  maxLife: 1,
  atack: 0,
  defense: 0,
};

// criar os objetos funcionais, isto é, funcoes que criam os objetos
function createWarrior(name) {
  return {
    ...defaultcharacter,
    name,
    life: 100,
    maxLife: 100,
    atack: 10,
    defense: 8.5,
  };
}

function createMage(name) {
  return {
    ...defaultcharacter,
    name,
    life: 80,
    maxLife: 80,
    atack: 20,
    defense: 3,
  };
}

function createWolf() {
  return {
    ...defaultcharacter,
    name: "Wolf",
    life: 50,
    maxlife: 50,
    atack: 7,
    defense: 4,
  };
}

function createDrake() {
  return {
    ...defaultcharacter,
    name: "Drake",
    life: 150,
    maxlife: 150,
    atack: 9,
    defense: 6,
  };
}
// criar a classe do stage

const stage = {
  // colocar oq vai ter no stage
  char: null,
  monster: null,
  charElements: null,
  monsterElements: null,

  start(char, monster, charElements, monsterElements) {
    this.char = char;
    this.monster = monster;
    this.charElements = charElements;
    this.monsterElements = monsterElements;

    this.charElements
      .querySelector(".atackButton")
      .addEventListener("click", () => this.atack(this.char, this.monster));
    this.monsterElements
      .querySelector(".atackButton")
      .addEventListener("click", () => this.atack(this.monster, this.char));

    this.update();
  },

  update() {
    document.querySelector("#player-name").innerHTML = `${
      this.char.name
    } - ${this.char.life.toFixed(1)} HP`;
    document.querySelector("#enemy-name").innerHTML = `${
      this.monster.name
    } - ${this.monster.life.toFixed(1)} HP`;

    let charPct = (this.char.life / this.char.maxLife) * 100;
    document.querySelector(".playerlife").style.width = `${charPct}%`;

    let monsterPct = (this.monster.life / this.monster.maxlife) * 100;
    document.querySelector(".enemylife").style.width = `${monsterPct}%`;
  },

  atack(atacker, atacked) {
    randomAtack = (Math.random() * 2).toFixed(1);
    randomDefense = (Math.random() * 1.4).toFixed(1);

    finalAtack = atacker.atack * randomAtack;
    finalDefense = atacked.defense * randomDefense;

    if (atacked.life == 0) {
      this.logWinMessage(`${atacker.name} WON !!!!`);
      return;
    } else if (atacker.life == 0) {
      this.logDefeatMessage(`${atacker.name} LOST! GAME OVER!!!`);
      return;
    }

    if (finalAtack > finalDefense) {
      atacked.life -= finalAtack;
      atacked.life = atacked.life < 0 ? 0 : atacked.life;
      this.logMessage(
        `${atacker.name} caused ${finalAtack.toFixed(2)} of damage! `
      );
    } else {
      this.logMessage(`${atacker.name} MISSED the atack!`);
    }

    this.update();
  },

  logWinMessage(msg) {
    let log = document.querySelector("#log");
    let newLi = document.createElement("li");
    newLi.innerHTML = msg;
    newLi.style.color = "lime";
    log.appendChild(newLi).scrollIntoView();
  },

  logDefeatMessage(msg) {
    let log = document.querySelector("#log");
    let newLi = document.createElement("li");
    newLi.innerHTML = msg;
    newLi.style.color = "red";
    log.appendChild(newLi).scrollIntoView();
  },

  logMessage(msg) {
    let log = document.querySelector("#log");
    let newLi = document.createElement("li");
    newLi.innerHTML = msg;
    log.appendChild(newLi).scrollIntoView();
  },
};
