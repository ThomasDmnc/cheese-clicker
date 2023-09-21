class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameScreen = document.getElementById("game-container");
    this.playerName = '';
    this.counter = 0;
    this.rate = 0;
    this.currentTime = 0;
    this.intervalId = null;
    this.settings = true;
    this.gameOver = false;
    this.cursorCounter = 0;
    this.cowCounter = 0;
    this.knifeCounter = 0;
    this.farmerCounter = 0;
    this.farmCounter = 0;
    this.factoryCounter = 0;
    this.aliensCounter = 0;
    this.leftPanelScreen = document.querySelector('.col1');
    this.particles = [];
  }

  gameLoop() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      this.replaceCounter();
      this.counter += (this.rate / 100);
      this.replaceRate();

      this.updateAllPrices();

      if (this.settings) this.winLoseSettings();
  
      if (this.gameOver){
        this.startScreen.style.display = "none";
        this.gameEndScreen.style.display = "flex";
        this.gameScreen.style.display = "none";
      }
    }, 10);
  }

  createParticle(){
    let rateRework = Number(parseFloat(this.rate/10));

    if (this.particles.length < rateRework){
      this.particles.push(
        new Particle(this.leftPanelScreen,
          Math.random() * (this.leftPanelScreen.clientWidth - 40 - 100) + 50,
          -150,
          50,
          50
          ))
      }
    }

  particlesLoop(){
    setInterval(() => {
      this.particles.forEach( particle => {
        particle.descend();

        if(particle.top > this.leftPanelScreen.clientHeight){
          particle.element.remove()
        }
      })
    }, 100)
  }
  
  winLoseSettings(){
      if (this.currentTime >= 2000){
        this.gameOver = true;
      }
    
      if (this.counter >= 1000){
        this.gameWon();
      }
  }

  startLocalStorage(){
    setInterval(() => {
      localStorage.setItem('counter', this.counter);
      localStorage.setItem('playerName', this.playerName);
      localStorage.setItem('rate', this.rate);
      localStorage.setItem('settings', this.settings);
      localStorage.setItem('cursorCounter', this.cursorCounter);
      localStorage.setItem('cowCounter', this.cowCounter);
      localStorage.setItem('knifeCounter', this.knifeCounter);
      localStorage.setItem('farmerCounter', this.farmerCounter);
      localStorage.setItem('farmCounter', this.farmCounter);
      localStorage.setItem('factoryCounter', this.factoryCounter);
      localStorage.setItem('aliensCounter', this.aliensCounter);
    }, 60000)
  }

  loadLocalStorage() {
    this.counter = parseInt(localStorage.getItem('counter'));
    this.rate = parseInt(localStorage.getItem('rate'));
    this.settings = localStorage.getItem('settings') === "true" ? true : false;
    this.cursorCounter = parseInt(localStorage.getItem('cursorCounter'));
    this.cowCounter = parseInt(localStorage.getItem('cowCounter'));
    this.knifeCounter = parseInt(localStorage.getItem('knifeCounter'));
    this.farmerCounter = parseInt(localStorage.getItem('farmerCounter'));
    this.farmCounter = parseInt(localStorage.getItem('farmCounter'));
    this.factoryCounter = parseInt(localStorage.getItem('factoryCounter'));
    this.aliensCounter = parseInt(localStorage.getItem('aliensCounter'));
  }

  reloadImage(toolName, counter){
    for (let i = 0; i < counter; i++) {
      this.addImage(toolName);
    }
  }


  updateAllPrices(){
    this.updateCursorPrice();
    this.updateCheeseKnifePrice();
    this.updateCowPrice();
    this.updateFarmPrice();
    this.updateFarmerPrice();
    this.updateAliensPrice();
    this.updateFactoryPrice();

    this.createParticle();
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
    this.particlesLoop();
  }

  clickAddCounter() {
    this.counter += 1;
    this.currentTime = 0;
    this.replaceCounter();
  }

  replaceCounter() {
    let counterText = document.querySelector(".counter");
    counterText.innerText = `${Math.floor((this.counter))} Camemberts`;
  }

  addImage(toolName){
    let ctn = document.querySelector(`.tool-images-${toolName}`)
    let lastChild = getComputedStyle(document.querySelector(`.tool-images-${toolName} > img:last-child`))
    let leftLastChild = parseFloat(lastChild.getPropertyValue('left'));
    let newImg = document.createElement('img');
    newImg.src = `./images/${toolName}.png`;
    newImg.alt =`${toolName}`;
    newImg.className = 'image-cursor';

    newImg.style.left = `${leftLastChild + 2 + Math.floor(Math.random() * 10)}px`;

    ctn.appendChild(newImg);
  }

  replaceRate() {
    let rateText = document.querySelector('.rate');
    rateText.innerText = `per sec ${this.rate}`
  }

  buyCursor(){
    let price = 10;
    let rate = 0.5;

    if (this.cursorCounter != 0) {
      price *= Math.pow(1.16, this.cursorCounter);
    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.cursorCounter += 1;

      if (this.cursorCounter > 1) {
        this.addImage('cursor')
      }
    }
  }

  updateCursorPrice(){
    let rateText = document.querySelector('[data-name="cursor"]').children[1];
    let cardText = document.getElementById('cursor-card');
    let price = 10;

    if (this.cursorCounter != 0) {
      price *= Math.pow(1.16, this.cursorCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Cursors: ${this.cursorCounter}`
  }


  buyCheeseKnife(){
    let price = 100;
    let rate = 1;

    if (this.knifeCounter != 0) {
      price *= Math.pow(1.16, this.knifeCounter);
    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.knifeCounter += 1;


      if (this.knifeCounter > 1) {
        this.addImage('knife')
      }
    }
  }
  
  updateCheeseKnifePrice(){
    let rateText = document.querySelector('[data-name="knife"]').children[1];
    let cardText = document.getElementById('knife-card');
    let price = 100;

    if (this.knifeCounter != 0) {
      price *= Math.pow(1.16, this.knifeCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Cheese Knives: ${this.knifeCounter}`
  }

  buyCow(){
    let price = 500;
    let rate = 10;

    if (this.cowCounter != 0) {
      price *= Math.pow(1.16, this.cowCounter);

    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.cowCounter += 1;

      if (this.cowCounter > 1) {
        this.addImage('cow');
      }
    }
  }

  updateCowPrice(){
    let rateText = document.querySelector('[data-name="cow"]').children[1];
    let cardText = document.getElementById('cow-card');
    let price = 500;

    if (this.cowCounter != 0) {
      price *= Math.pow(1.16, this.cowCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Cows: ${this.cowCounter}`
  }


  buyFarmer(){
    let price = 1000;
    let rate = 50;

    if (this.farmerCounter != 0) {
      price *= Math.pow(1.16, this.farmerCounter);

    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.farmerCounter += 1;
      if (this.farmerCounter > 1) {
        this.addImage('farmer');
      }
    }
  }

  updateFarmerPrice(){ 
    let rateText = document.querySelector('[data-name="farmer"]').children[1];
    let cardText = document.getElementById('farmer-card');
    let price = 1000;

    if (this.farmerCounter != 0) {
      price *= Math.pow(1.16, this.farmerCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Farmers: ${this.farmerCounter}`
  }

  buyFarm(){
    let price = 50000;
    let rate = 100;

    if (this.farmCounter != 0) {
      price *= Math.pow(1.16, this.farmCounter);

    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.farmCounter += 1;
      if (this.farmCounter > 1) {
        this.addImage('farm');
      }
    }
  }

  updateFarmPrice(){
    let rateText = document.querySelector('[data-name="farm"]').children[1];
    let cardText = document.getElementById('farm-card');
    let price = 50000;

    if (this.farmCounter != 0) {
      price *= Math.pow(1.16, this.farmCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Farms: ${this.farmCounter}`
  }

  buyFactory(){
    let price = 100000;
    let rate = 250;

    if (this.factoryCounter != 0) {
      price *= Math.pow(1.16, this.factoryCounter);

    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.factoryCounter += 1;
      if (this.factoryCounter > 1) {
        this.addImage('factory');
      }
    }
  }

  updateFactoryPrice(){
    let factoryCard = document.getElementById('factory-surprise');
    let rateText = document.querySelector('[data-name="factory"]').children[1];
    let cardText = document.getElementById('factory-card');
    let price = 100000;

    if (this.factoryCounter == 0 ){
      factoryCard.style.display = "none";
    } else if (this.factoryCounter <= 1 ){
      factoryCard.style.display = "flex";
    }

    let cardVisibility = document.querySelector('[data-name="factory"]');
    
    if (this.counter >= 10000){
      cardVisibility.classList.remove('disabled');
    }

    if (this.factoryCounter != 0) {
      price *= Math.pow(1.16, this.factoryCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Factories: ${this.factoryCounter}`
  }

  buyAliens(){
    let price = 100000000;
    let rate = 500;

    if (this.aliensCounter != 0) {
      price *= Math.pow(1.16, this.aliensCounter);

    }

    if (this.counter >= price){
      this.counter -= price;
      this.rate += rate;
      this.aliensCounter += 1;
      if (this.aliensCounter > 1) {
        this.addImage('aliens');
      }
    }
  }

  updateAliensPrice(){
    let alienCard = document.getElementById('aliens-surprise');
    let rateText = document.querySelector('[data-name="aliens"]').children[1];
    let cardText = document.getElementById('aliens-card');
    let price = 100000000;
    let cardVisibility = document.querySelector('[data-name="aliens"]');

    if (this.aliensCounter ==  0){
      alienCard.style.display = "none";
    } else if (this.aliensCounter <= 1 ){
      alienCard.style.display = "flex";
    }

    if (this.counter >= 1000000){
      cardVisibility.classList.remove('disabled');
    }

    if (this.aliensCounter != 0) {
      price *= Math.pow(1.16, this.aliensCounter);
    }
    rateText.innerText = `${Math.floor(price)}`;
    cardText.innerText = `Aliens Cheese Makers: ${this.aliensCounter}`
  }

}