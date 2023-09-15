window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    const cheeseButton = document.querySelector('.cheese');

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

});