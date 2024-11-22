const char = createWarrior("Alex");
const monster = createDrake();

stage.start(
  char,
  monster,
  document.querySelector("#player"),
  document.querySelector("#enemy")
);
