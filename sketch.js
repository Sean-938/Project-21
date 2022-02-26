var speed,weight;
var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,5);
  wall=createSprite(1200,200,thickness, height/2);
  bullet.velocityX = speed;
  bullet.shapeColor = "pink";
  

}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

function draw() {
  background(0);
  
  if(hasCollided(bullet,wall)) {
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
    
  }
  
  drawSprites();
}