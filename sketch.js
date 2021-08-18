var sea1
var ship1
function preload(){
seaImg=loadImage("sea.png")
ShipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}
 
function setup(){
   sea1 = createSprite(200, 200);
   sea1.addImage(seaImg);
   sea1.scale=0.3
   sea1.velocityX=-2
   ship1= createSprite(200, 200);
   ship1.addAnimation("ship",ShipImg)
   ship1.scale=0.5
  createCanvas(1000,1000);

}

function draw() {
  background("white");
  
 if (sea1.x<450) {
  sea1.x=sea1.width/8;

 }
 
 drawSprites();
}