class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameScreen = document.getElementById("game-container");
    this.counter = 0;
    this.rate = 0;
    this.ToolsArr = [];
    this.currentTime = 0;
    this.intervalId = null;
  }

  gameLoop() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;

      this.replaceCounter();
    }, 1000);
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.gameLoop();
  }

  clickAddCounter() {
    this.counter += 1;
    console.log(this.counter);
    this.replaceCounter();
  }

  replaceCounter() {
    let counterText = document.querySelector(".counter");
    counterText.innerText = `${this.counter} Camemberts`;
    console.log(`${this.counter}`);
  }
}
