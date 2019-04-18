'use strict';

function Player (canvas) {
  this.lives = 3;
  this.size = 150;
  this.canvas = canvas;
  this.x = 50;
  this.y = 100;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 2;
  this.xDirection = 0;
  this.yDirection = 0;
  this.image = new Image();
  this.image.src = "../img/Person_def.png";
  
}



Player.prototype.draw = function () {
  console.log("drawing");
  this.ctx.drawImage(this.image,this.x,this.y, this.size,this.size );
 

}

Player.prototype.update = function () {
  let newX = this.x + this.xDirection * this.speed;
  let newY = this.y + this.yDirection * this.speed;

  if (newX < 0 || newX > this.canvas.width - this.size){
    return this.x;
  } else {
    this.x = this.x + this.xDirection * this.speed;
  }

  if (newY < 0 || newY > this.canvas.height - this.size) {
    return this.y;
  } else {
    this.y = this.y + this.yDirection * this.speed;
  }
}

document.addEventListener('keyup', movePlayer);

function movePlayer(event){
  switch (event.keyCode) {
    case 37:
    game.Player.setXdirection(-1)
      break;

    case 37:
    game.Player.setXdirection(-1)
      break;
    
    case 37:
    game.Player.setXdirection(-1)
      break;

    case 37:
    game.Player.setXdirection(-1)
      break;
  
    default:
      break;
  }
} 


Player.prototype.setYDirection = function (newDirection) {
  this.yDirection = newDirection;
}

Player.prototype.setXDirection = function (newDirection) {
  this.xDirection = newDirection;
}



Player.prototype.setLives = function () {
  this.lives--;
}

Player.prototype.checkCollisionWithEnemy = function (enemy) {
  const collisionRight = this.x + this.size/2 > enemy.x - enemy.size/2;
  const collisionLeft = this.x - this.size/2 < enemy.x + enemy.size/2;
  const collisionTop = this.y - this.size/2 < enemy.y + enemy.size/2;
  const collisionBottom = this.y + this.size/2 > enemy.y + enemy.size/2;

  return collisionTop && collisionLeft && collisionBottom && collisionRight; // will return either true or false 
}

