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
    this.cursorCounter = 0;
    this.cowCounter = 0;
    this.knifeCounter = 0;
    this.farmerCounter = 0;
    this.farmCounter = 0;
    this.factoryCounter = 0;
    this.aliensCounter = 0;
  }

  gameLoop() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      this.replaceCounter();
      this.counter += (this.rate / 100);
      this.replaceRate();

      this.updateCursorPrice();
      this.updateCowPrice();

      // if (this.currentTime >= 20000){
      //   this.gameOver = true;
      // }
  
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
    counterText.innerText = `${Math.floor((this.counter))} Camemberts`;
    // console.log(`this counter is ${this.counter}`);
  }


  replaceRate() {
    let rateText = document.querySelector('.rate');
    rateText.innerText = `per sec ${this.rate}`
    // console.log(`this rate is ${this.rate}`)
  }

  buyCursor(){
    let price = 10;
    let rate = 0.5;

    if (this.cursorCounter != 0) {
      price *= Math.pow(1.2, this.cursorCounter);
    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.cursorCounter += 1;
    }
  }

  updateCursorPrice(){
    let rateText = document.querySelector('[data-name="cursor"]').children[1];
    let price = 10;

    if (this.cursorCounter != 0) {
      price *= Math.pow(1.2, this.cursorCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
  }


  buyCheeseKnife(){
    let price = 100;
    let rate = 1;

    if (this.knifeCounter != 0) {
      price *= Math.pow(1.2, this.knifeCounter);
    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.knifeCounter += 1;
    }
  }
  
  updateCheeseKnifePrice(){
    let rateText = document.querySelector('[data-name="knife"]').children[1];
    let price = 100;

    if (this.knifeCounter != 0) {
      price *= Math.pow(1.2, this.cursorCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
  }

  buyCow(){
    let price = 500;
    let rate = 10;

    if (this.cowCounter != 0) {
      price *= Math.pow(1.2, this.cowCounter);
    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.cowCounter += 1;
    }
  }

  updateCowPrice(){
    let rateText = document.querySelector('[data-name="cow"]').children[1];
    let price = 500;

    if (this.cowCounter != 0) {
      price *= Math.pow(1.2, this.cowCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
  }


  buyFarmer(){
    let price = 1000;
    let rate = 50;

    if (this.farmerCounter != 0) {
      price *= Math.pow(1.2, this.farmerCounter);
    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.farmerCounter += 1;
    }
  }

  updateFarmerPrice(){ 
    let rateText = document.querySelector('[data-name="farmer"]').children[1];
    let price = 1000;

    if (this.farmerCounter != 0) {
      price *= Math.pow(1.2, this.farmerCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
  }

  buyFarm(){
    let price = 50000;
    let rate = 100;

    if (this.farmCounter != 0) {
      price *= Math.pow(1.2, this.farmCounter);
    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.farmCounter += 1;
    }
  }

  updateFarmPrice(){
    let rateText = document.querySelector('[data-name="farm"]').children[1];
    let price = 50000;

    if (this.farmCounter != 0) {
      price *= Math.pow(1.2, this.farmCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;

  }

  buyFactory(){

  }

  updateFactoryPrice(){

  }

  buyAliens(){

  }

  updateAliensPrice(){

  }

}