var fixedRect;
var movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
 // fixedRect=createSprite(200, 200, 50, 80);
  //fixedRect.shapeColor="green";
  movingRect=createSprite(400, 200, 80, 50);
  movingRect.shapeColor="white";
  movingRect.debug=true;
  gameObject1=createSprite(350,500,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(450,500,50,50);
  gameObject2.shapeColor="red";
  gameObject3=createSprite(550,500,50,50);
  gameObject3.shapeColor="yellow";
  gameObject4=createSprite(650,500,50,50);
  gameObject4.shapeColor="orange";
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (isTouching(movingRect,gameObject2)){
    gameObject2.shapeColor="red";
    movingRect.shapeColor="red";
    
  }
  else if(isTouching(movingRect,gameObject1)){
    gameObject1.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else if(isTouching(movingRect,gameObject3)){
    gameObject3.shapeColor="yellow";
    movingRect.shapeColor="yellow";
  }
  else if(isTouching(movingRect,gameObject4)){
    gameObject4.shapeColor="orange";
    movingRect.shapeColor="orange";
  }
  else{
    movingRect.shapeColor="white";
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 && object2.x-object1.x<object2.width/2+object1.width/2
    && object2.y-object1.y<object2.height/2+object1.height/2 && object1.y-object2.y<object1.height/2+object2.height/2){
   return true;
  }
  else{
    return false;
  }
}