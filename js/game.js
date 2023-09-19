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

      this.updateAllPrices();

      // if (this.currentTime >= 2000){
      //   this.gameOver = true;
      // }
      
      if (this.counter >= 1000){
        this.gameWon();
      }
  
      if (this.gameOver){
        this.startScreen.style.display = "none";
        this.gameEndScreen.style.display = "flex";
        this.gameScreen.style.display = "none";
      }
    }, 10);
  }

  updateAllPrices(){
    this.updateCursorPrice();
    this.updateCheeseKnifePrice();
    this.updateCowPrice();
    this.updateFarmPrice();
    this.updateFarmerPrice();
    this.updateAliensPrice();
    this.updateFactoryPrice();
  }

  stopGame(){
    this.intervalId = null;
    this.gameOver = false;
  }

  gameWon(){
    const winningWindow = document.querySelector('.winning');
    winningWindow.style.style.display = "block";
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
    let cardText = document.getElementById('cursor-card');
    let price = 10;

    if (this.cursorCounter != 0) {
      price *= Math.pow(1.2, this.cursorCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Cursors: ${this.cursorCounter}`

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
    let cardText = document.getElementById('knife-card');
    let price = 100;

    if (this.knifeCounter != 0) {
      price *= Math.pow(1.2, this.knifeCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Cheese Knifes: ${this.knifeCounter}`
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
    let cardText = document.getElementById('cow-card');
    let price = 500;

    if (this.cowCounter != 0) {
      price *= Math.pow(1.2, this.cowCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Cows: ${this.cowCounter}`
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
    let cardText = document.getElementById('farmer-card');
    let price = 1000;

    if (this.farmerCounter != 0) {
      price *= Math.pow(1.2, this.farmerCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Farmers: ${this.farmerCounter}`
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
    let cardText = document.getElementById('farm-card');
    let price = 50000;

    if (this.farmCounter != 0) {
      price *= Math.pow(1.2, this.farmCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Farms: ${this.farmCounter}`
  }

  buyFactory(){
    let price = 100000;
    let rate = 250;

    if (this.factoryCounter != 0) {
      price *= Math.pow(1.2, this.factoryCounter);
    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.factoryCounter += 1;
    }
  }

  updateFactoryPrice(){
    let factoryCard = document.getElementById('factory-surprise');
    let rateText = document.querySelector('[data-name="factory"]').children[1];
    let cardText = document.getElementById('factory-card');
    let price = 100000;

    if (this.factoryCounter < 1){
      factoryCard.style.display = "none";
    }

    let cardVisibility = document.querySelector('[data-name="factory"]');
    
    if (this.counter >= 10000){
      cardVisibility.classList.remove('disabled');
    }

    if (this.factoryCounter != 0) {
      price *= Math.pow(1.2, this.factoryCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Factories: ${this.factoryCounter}`
  }

  buyAliens(){
    let price = 100000000;
    let rate = 500;

    if (this.aliensCounter != 0) {
      price *= Math.pow(1.2, this.aliensCounter);
    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.aliensCounter += 1;
    }
  }

  updateAliensPrice(){
    let alienCard = document.getElementById('aliens-surprise');
    let rateText = document.querySelector('[data-name="aliens"]').children[1];
    let price = 100000000;
    let cardVisibility = document.querySelector('[data-name="aliens"]');

    if (this.aliensCounter < 1){
      alienCard.style.display = "none";
    }

    if (this.counter >= 1000000){
      cardVisibility.classList.remove('disabled');
    }

    if (this.aliensCounter != 0) {
      price *= Math.pow(1.2, this.aliensCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
  }

}