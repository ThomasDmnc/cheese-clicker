window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    const cheeseButton = document.querySelector('.cheese');
    // all tools query selectors
    const cursorsButton = document.querySelector('[data-name="cursor"]');
    const cowsButton = document.querySelector('[data-name="cow"]');

    let game;

    function startGame(){
        console.log('startiiing the game');
        game = new Game();
        game.start()
    };

    startButton.addEventListener('click', function () {
        startGame()
    });

    // restartButton.addEventListener('click', function () {
    //     startGame()
    // });

    cheeseButton.addEventListener("click", function () {
        console.log("test");
        game.clickAddCounter();
    })

    cursorsButton.addEventListener('click', function() {
        console.log('cursor');
        game.buyCursor();
    })

    cowsButton.addEventListener('click', function() {
        console.log('cow');
        game.buyCow();
    })

});