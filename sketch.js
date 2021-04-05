var fixedRect,movingRect;


function setup() {
  createCanvas(800,500);
  fixedRect = createSprite(400, 50, 50, 70);
  movingRect = createSprite(400,450,70,50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  movingRect.velocityY = -2;
  fixedRect.velocityY = +2;
  

  // fixedRect.debug = true;
  // movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
  
  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  //isTouching();

  if( movingRect.y-fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
     fixedRect.y-movingRect.y <= movingRect.height/2 + fixedRect.height/2){
       movingRect.velocityY = movingRect.velocityY * (-1);
       fixedRect.velocityY = fixedRect.velocityY * (-1);
     }
  
  if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x-movingRect.x <= movingRect.width/2 + fixedRect.width/2){

      movingRect.velocityX = movingRect.velocityX * (-1);
       fixedRect.velocityX = fixedRect.velocityX * (-1);


    }
  

 
  drawSprites();
}

function isTouching(){

  if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x-movingRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y-fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y-movingRect.y <= movingRect.height/2 + fixedRect.height/2
     ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }


}