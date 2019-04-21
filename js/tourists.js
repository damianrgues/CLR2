function Tourists (canvas, y) {
    this.speed = 3;
    this.size = 140;
    this.direction = -1;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d')
    this.x = this.canvas.width - this.size/2;
    this.y = y/2;
    this.image = new Image();
    this.image.src = "../img/tourists_group copia.png";
  }
  
  Tourists.prototype.draw = function () {
  
  this.ctx.drawImage(this.image,this.x-this.size/2,this.y-this.size/2, this.size,this.size )
  }
  
  Tourists.prototype.update = function () {
   this.x += this.direction * this.speed;
  }