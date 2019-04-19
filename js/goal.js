function Goal (canvas) {
    this.speed = 2;
    this.width= 50;
    this.direction = -1;
    this.canvas = canvas;
    this.height=this.canvas.height;
    this.ctx = this.canvas.getContext('2d')
    this.x = this.canvas.width - 100;
    this.y = this.height/2;
    this.image = new Image();
    this.image.src = "../img/metaline.png";
  }
  
  Goal.prototype.draw = function () {
  console.log('draw meta')
  this.ctx.drawImage(this.image,this.x - this.width/2,this.y - this.height/2,this.width, this.height)
  }
  
  Goal.prototype.update = function () {
   this.x += this.direction * this.speed;
  }