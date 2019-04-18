'use strict';

function Game (canvas) {
  this.player = null;
  this.enemies = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.timeRemaining=30;

};




Game.prototype.startLoop = function () {
  this.player = new Player(this.canvas);

  const loop = () => {

  if (Math.random() > 0.99) { // setting the probability that a new enemy is created 
    const randomNumber = Math.random() * this.canvas.height;
    this.enemies.push(new Enemy(this.canvas, randomNumber))
  }

  this.clearCanvas();
  this.updateCanvas();
  this.drawCanvas();
  this.checkCollisions();
  if (this.gameOver === false){
   window.requestAnimationFrame(loop);
  }
  //console.log(this.player.direction);
  window.requestAnimationFrame(loop);
  }

  window.requestAnimationFrame(loop);
}

Game.prototype.clearCanvas = function () {
  this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
}

Game.prototype.updateCanvas = function () {
  this.player.update();
  this.enemies.forEach( (enemy) => { // since enemies is an array we need to call this method for each one of them
    enemy.update();
  })
  
}

Game.prototype.drawCanvas = function () {
  this.player.draw();
  this.enemies.forEach( (enemy) => { // since enemies is an array we need to call this method for each one of them
    enemy.draw();
  })
}

Game.prototype.checkCollisions = function () {
  this.enemies.forEach( (enemy, index) => {
    const isColliding = this.player.checkCollisionWithEnemy(enemy);
    if (isColliding) {
      this.timeRemaining -= 2;
      this.enemies.splice(index, 1)
      this.player.setLives();

      console.log(this.player.lives)
      if (this.player.lives === 0){
        this.gameOver === true;
        this.buildGameOverScreen();
     }
    }
  })
  //this.player.checkCollisionWithScreen();
  //this.enemies.checkInScreen(); // to delete enemy after they exit the screen
}


Game.prototype.setGameOverCallback = function (buildGameOverScreen) { // calling back the function bc we dont have access to it from another script since we dont use global variables
  this.buildGameOverScreen = buildGameOverScreen;
}







