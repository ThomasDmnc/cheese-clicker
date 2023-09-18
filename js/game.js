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
    this.gameOver = false;
  }

  gameLoop() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      this.replaceCounter();

      if (this.currentTime >= 20000){
        this.gameOver = true;
      }
  
      if (this.gameOver){
        this.startScreen.style.display = "none";
        this.gameEndScreen.style.display = "flex";
        this.gameScreen.style.display = "none";
      }
    }, 10);
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.gameLoop();
  }

  clickAddCounter() {
    this.counter += 1;
    this.currentTime = 0;
    this.replaceCounter();
  }

  replaceCounter() {
    let counterText = document.querySelector(".counter");
    counterText.innerText = `${this.counter} Camemberts`;
    console.log(`this counter is ${this.counter}`);
  }

  replaceRate() {
    let rateText = document.querySelector('.rate');
    rateText.innerText = `per sec ${this.rate}`
    console.log(`this rate is ${this.rate}`)
  }



  buyCursor(){

  }

  buyCow(){

  }
}
