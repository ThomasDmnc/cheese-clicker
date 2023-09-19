window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    const cheeseButton = document.querySelector('.cheese');
    // all tools query selectors
    const cursorsButton = document.querySelector('[data-name="cursor"]');
    const cowsButton = document.querySelector('[data-name="cow"]');
    const knifeButton =  document.querySelector('[data-name="knife"]');
    const farmerButton =  document.querySelector('[data-name="farmer"]');
    const farmButton =  document.querySelector('[data-name="farm"]');
    const factoryButton =  document.querySelector('[data-name="factory"]');
    const aliensButton =  document.querySelector('[data-name="aliens"]');


    let game;

    function startGame(){
        console.log('startiiing the game');
        game = new Game();
        game.start()
    };

    startButton.addEventListener('click', function () {
        const playerName = document.getElementById('player-name').value;
        let helloTitle = document.querySelector('.title')
        helloTitle.innerText = `Hello ${playerName} 👋`
        startGame();
    });

    restartButton.addEventListener('click', function () {
        location.reload();
        startGame();
    });

    cheeseButton.addEventListener("click", function () {
        game.clickAddCounter();
    })

    cursorsButton.addEventListener('click', function() {
        game.buyCursor();
    })

    cowsButton.addEventListener('click', function() {
        game.buyCow();
    })

    knifeButton.addEventListener('click', function() {
        game.buyCheeseKnife();
    })

    farmerButton.addEventListener('click', function() {
        game.buyFarmer();
    })

    farmButton.addEventListener('click', function() {
        game.buyFarm();
    })

    factoryButton.addEventListener('click', function() {
        game.buyFactory();
    })

    aliensButton.addEventListener('click', function() {
        game.buyAliens();
    })

});