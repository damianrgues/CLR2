function Enemy (canvas, y) {
  this.speed = 3;
  this.size = 100;
  this.direction = -1;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d')
  this.x = this.canvas.width - this.size/2;
  this.y = y;
  this.image = new Image();
	this.image.src = "../img/prosti.png";
}

Enemy.prototype.draw = function () {

this.ctx.drawImage(this.image,this.x,this.y, this.size,this.size )
}

Enemy.prototype.update = function () {
 this.x += this.direction * this.speed;
}