'use strict';
	
	function Player (canvas) {
	  this.lives = 100;
		this.height = 141;
		this.width = 60;
	  this.canvas = canvas;
	  this.x = 50;
	  this.y = 100;
	  this.ctx = this.canvas.getContext('2d');
	  this.speed = 2;
	  this.xDirection = 0;
	  this.yDirection = 0;
	  this.image = new Image();
		this.image.src = "./img/Person_def.png";
		
	
	}
	
	
	
	Player.prototype.draw = function () {
	  this.ctx.drawImage(this.image,this.x-this.width/2,this.y-this.height/2,this.width,this.height);
	
	
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
	
	 
	
	
	Player.prototype.setYDirection = function (newDirection) {
	  this.yDirection = newDirection;
	}
	
	Player.prototype.setXDirection = function (newDirection) {
	  this.xDirection = newDirection;
	}

	
	// Player.prototype.setLives = function () {
	//   this.lives--;
	// }
	
	Player.prototype.checkCollisionWithEnemy = function (enemy) {
	  const collisionRight = this.x + this.width/2 > enemy.x - enemy.size/2;
	  const collisionLeft = this.x - this.width/2 < enemy.x + enemy.size/2;
	  const collisionTop = this.y - this.height/2 < enemy.y + enemy.size/2;
	  const collisionBottom = this.y + this.height/2 > enemy.y - enemy.size/2;
	
	  return collisionTop && collisionLeft && collisionBottom && collisionRight; // will return either true or false 
	
	}	
	

	Player.prototype.checkCollisionWithTourists = function (tourists) {
	  const collisionRight = this.x + this.width/2 > tourists.x - tourists.size/2;
	  const collisionLeft = this.x - this.width/2 < tourists.x + tourists.size/2;
	  const collisionTop = this.y - this.height/2 < tourists.y + tourists.size/2;
	  const collisionBottom = this.y + this.height/2 > tourists.y - tourists.size/2;
	
	  return collisionTop && collisionLeft && collisionBottom && collisionRight; // will return either true or false 
	
	}	
	

	Player.prototype.checkCollisionWithMimos = function (mimos) {
	  const collisionRight = this.x + this.width/2 > mimos.x - mimos.size/2;
	  const collisionLeft = this.x - this.width/2 < mimos.x + mimos.size/2;
	  const collisionTop = this.y - this.height/2 < mimos.y + mimos.size/2;
	  const collisionBottom = this.y + this.height/2 > mimos.y - mimos.size/2;
	
	  return collisionTop && collisionLeft && collisionBottom && collisionRight; // will return either true or false 
	
	}	


	
	Player.prototype.checkCollisionWithGoal = function (goal) {
		const collisionRight = this.x + this.width/2 > goal.x - goal.width/2;
		const collisionLeft = this.x - this.width/2 < goal.x + goal.width/2;
		const collisionTop = this.y - this.height/2 < goal.y + goal.height/2;
		const collisionBottom = this.y + this.height/2 > goal.y - goal.height/2;
	
		return collisionTop && collisionLeft && collisionBottom && collisionRight; // will return either true or false


	};