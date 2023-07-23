class Player {

}

class Projectile {

}


class Enemy {

}


class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.width = this.canvas.width
        this.height = this.canvas.height
    }
}

window.addEventListener('load',()=>{
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')
    canvas.width = 600;
    canvas.height = 800;

    const game = new Game(canvas)
    game.render()
})