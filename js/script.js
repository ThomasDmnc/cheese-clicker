window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    const cheeseButton = document.querySelector('.cheese');
    const crossWinButton = document.querySelector('.winning .cross-header');
    const winningWindow = document.querySelector('.winning');


    const settingsButton = document.querySelector('.question');
    const settingsWindow = document.querySelector('.settings');
    const crossSettingsButton = document.querySelector('.settings-cross-image');
    let settingsCheckbox = document.querySelector('.settings-checkbox');


    // all tools query selectors
    const cursorsButton = document.querySelector('[data-name="cursor"]');
    const cowsButton = document.querySelector('[data-name="cow"]');
    const knifeButton =  document.querySelector('[data-name="knife"]');
    const farmerButton =  document.querySelector('[data-name="farmer"]');
    const farmButton =  document.querySelector('[data-name="farm"]');
    const factoryButton =  document.querySelector('[data-name="factory"]');
    const aliensButton =  document.querySelector('[data-name="aliens"]');

    const audio = new Audio('./music/click-sound.mp3') 

    let game;

    function startGame(){
        game = new Game();
        game.start()
    };

    startButton.addEventListener('click', function () {
        startGame();
        const playerName = document.getElementById('player-name').value;
        let helloTitle = document.querySelector('.title')
        helloTitle.innerText = `Hello ${playerName} 👋`;
        game.playerName = playerName;

        if (window.localStorage.length <= 8){
            console.log('does it work?')
            game.startLocalStorage();
        } else {
            game.loadLocalStorage();
            helloTitle.innerText = `Welcome back ${localStorage.playerName} 👋`;
            game.startLocalStorage();
        }
    });

    restartButton.addEventListener('click', function () {
        location.reload();
        startGame();
    });

    cheeseButton.addEventListener("click", function () {
        audio.play();
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

    crossWinButton.addEventListener('click', function(){
        console.log('check');
        winningWindow.style.display = "none";
    })

    settingsButton.addEventListener('click', function(){
        console.log('check'); 
        settingsWindow.style.display = 'block';
    })

    crossSettingsButton.addEventListener('click', function(){
       if (settingsCheckbox.checked) {
            game.settings = false;
        }
        settingsWindow.style.display = 'none';
        console.log(game.settings);
    })

    document.addEventListener('keydown', event => {
        if (event.code === 'Digit1'){
            document.getElementById('cheese-button').src = './images/beaufort.png';
        }
        if (event.code === 'Digit2'){
            document.getElementById('cheese-button').src = './images/comte.png';
        }
        if (event.code === 'Digit3'){
            document.getElementById('cheese-button').src = './images/parmigiano.png';
        }
        if (event.code === 'Digit4'){
            document.getElementById('cheese-button').src = './images/camembert.png';
        }
    })

});