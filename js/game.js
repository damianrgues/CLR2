'use strict';

function Game (canvas) {
  this.player = null;
  this.enemies = [];
  // this.tourists=[];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.timeRemaining=30;
  this.gameOver = false

  this.gameSound = new Audio ("../music/game-music.mp3");
  this.collisionSound = new Audio ("../music/boton-try-retry.mp3");
  this.winSound = new Audio ("../music/index-music.mp3");
  this.gameOverSound = new Audio ("../music/gameover.mp3");


  
  


  // this.soundGame= document.createElement("audio");
  // this.soundGame.src =("../music/game-music.mp3");
  // this.soundGame.play();
  // this.soundGame.volume=0.7;



};






Game.prototype.startLoop = function () {
  this.gameSound.loop = true;
  this.gameSound.play();


  this.player = new Player(this.canvas);
  const timerDisplay = document.getElementById('timer');
    timerDisplay.innerHTML = this.timeRemaining;
  setInterval(()=>{
    this.timeRemaining -= 1;
    const timerDisplay = document.getElementById('timer');
   
    timerDisplay.innerHTML = this.timeRemaining;
  },1000)

  this.createMeta();

  const loop = () => {

  if (Math.random() > 0.99) { // setting the probability that a new enemy is created 
    const randomNumber = Math.random() * this.canvas.height;
    this.enemies.push(new Enemy(this.canvas, randomNumber));
    // this.tourists.push(new Tourists(this.canvas,randomNumber));
  }

  this.clearCanvas();
  this.updateCanvas();
  this.drawCanvas();
  this.checkCollisions();
  if(this.timeRemaining < 1){
    this.gameSound.pause();
    this.gameOverSound.play();
    this.gameOver = true
    this.buildGameOverScreen();
  
  }
  if (this.gameOver === false){
   window.requestAnimationFrame(loop);
  }
  //console.log(this.player.direction);
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
  // this.tourists.forEach( (tourists) => { // since enemies is an array we need to call this method for each one of them
  //   tourists.update();
  // })
  if (this.meta) {
    this.meta.update();
  }
}



Game.prototype.drawCanvas = function () {
  this.player.draw();
  this.enemies.forEach( (enemy) => { // since enemies is an array we need to call this method for each one of them
    enemy.draw();
  })
  // this.tourists.forEach( (tourists) => { 
  //   tourists.draw();
  // })

  if (this.meta) {
    this.meta.draw();
  }
}



Game.prototype.checkCollisions = function () {
  this.enemies.forEach( (enemy, index) => {
    const isColliding = this.player.checkCollisionWithEnemy(enemy);
    if (isColliding) {
      this.timeRemaining -= 2;
      this.enemies.splice(index, 1)
      this.player.setLives();
      this.collisionSound.play();

      console.log(this.player.lives)
      if (this.player.lives === 0){
        this.gameOver = true;
        this.gameSound.pause();
        this.gameOverSound.play();

        this.buildGameOverScreen();
     }
    }
  })
  
  // this.tourists.forEach( (tourists, index) => {
  //   const isCollidingTourits = this.player.checkCollisionWithTourists(tourists);
  //   if (isCollidingTourits) {
  //     this.timeRemaining -= 2;
  //     this.tourists.splice(index, 1)
  //     this.player.setLives();

  //     console.log(this.player.lives)
  //     if (this.player.lives === 0){
  //       this.gameOver = true;
  //       this.buildGameOverScreen();
  //    }
  //   }
  // })







  if(this.meta){
    const isCollidingGoal = this.player.checkCollisionWithGoal(this.meta);
    if (isCollidingGoal) {
      this.gameOver = true;
      this.buildGameWinScreen();
      
    }
  }
  
  
  //this.player.checkCollisionWithScreen();
 
 
 
  //this.enemies.checkInScreen(); // to delete enemy after they exit the screen
}



Game.prototype.createMeta = function () {
  setTimeout(() => {
    this.meta = new Goal(this.canvas);
    console.log ("hay meta ");
  }, 24000);
}


Game.prototype.setGameOverCallback = function (buildGameOverScreen) { // calling back the function bc we dont have access to it from another script since we dont use global variables
  this.buildGameOverScreen = buildGameOverScreen;
}


Game.prototype.setWinCallback = function (buildWinScreen) { // calling back the function bc we dont have access to it from another script since we dont use global variables
  this.buildGameWinScreen = buildWinScreen;
}




