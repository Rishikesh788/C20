var fixedRect;
var movingRect;
var movingRect1;
var movingRect2
function setup() {

  createCanvas(800,400);
fixedRect = createSprite(700,200,50,80)
 fixedRect.shapeColor= "green";
movingRect = createSprite(100,200,50,50)
movingRect.shapeColor = "green"
movingRect1 = createSprite(700,100,50,50)
movingRect1.shapeColor = "purple"
movingRect2 = createSprite(100,100,50,50)
movingRect2.shapeColor = "pink"
movingRect1.velocityX = -2
movingRect2.velocityX = 2
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY


  if(fixedRect.x - movingRect.x <= movingRect.width/2+fixedRect.width/2 &&
    movingRect.x - fixedRect.x <= movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2+fixedRect.height/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2+fixedRect.height/2
    ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor= "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor= "green";
  }

if(movingRect1.x - movingRect2.x <= movingRect1.width/2+movingRect2.width/2 &&
  movingRect2.x - movingRect1.x <= movingRect1.width/2+movingRect2.width/2){

    movingRect1.velocityX = movingRect1.velocityX*(-1);
    movingRect2.velocityX = movingRect2.velocityX*(-1);
}


if(movingRect1.y - movingRect2.y <= movingRect1.height/2+movingRect2.height/2 &&
  movingRect2.y - movingRect1.y <= movingRect1.height/2+movingRect2.height/2){

    movingRect1.velocityY = movingRect1.velocityY*(-1);
    movingRect2.velocityY = movingRect2.velocityY*(-1);
}

  drawSprites();
}