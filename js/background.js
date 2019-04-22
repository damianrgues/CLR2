"use strict";

//Constructor for the moving background image
function BackgroundImg (canvas){
  this.img = new Image();
  this.img.src = "./img/background_bruto_deffff.png";
  this.speed = -2;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = 0;
};

//Draw Backgroundimage
BackgroundImg.prototype.draw = function (){
  this.ctx.drawImage(this.img, this.x, 0, this.img.width-1800,this.canvas.height);
  this.ctx.drawImage(this.img, this.x+this.img.width-1800, 0, this.img.width-1800,this.canvas.height);
 
  };

//move Backgroundimage
BackgroundImg.prototype.move = function (){
  if(this.x < 0 - this.img.width+1800){
    this.x = 0
  }else{
    this.x += this.speed;
  }
    
    //this.x %= this.canvas.width;
};
