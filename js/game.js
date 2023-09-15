class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameEndScreen = document.getElementById('game-end');
        this.gameScreen = document.getElementById('game-container')
    }


    start() {
        this.startScreen.style.display = 'none'
        this.gameEndScreen.style.display = 'none'
        this.gameScreen.style.display = 'flex'
      }
}