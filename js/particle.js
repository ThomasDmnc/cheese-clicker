class Particle {
    constructor(screen, left, top, height, width) {
        this.screen = screen;
        this.left = left;
        this.top = top;
        this.height = height;
        this.width = width;

        this.element = document.createElement('img');
        this.element.src = '../images/camembert.png';
        this.element.style.position = 'absolute'
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
        this.element.style.zIndex = '1';

        this.screen.appendChild(this.element)
    }

    descend(){
        this.top += Math.floor(Math.random() * 3);
        this.element.style.top = `${this.top}px`;
    }
}