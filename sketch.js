var bullet , wall ;
var weight , speed , thickness;


function setup() {
  createCanvas(800,400);

  speed = random(223,321);
  weight = random(30,52);//1500
  thickness = random(22,83)

 wall = createSprite( 700, 200, 60, height/2);
 bullet = createSprite(50,200,50,10)


}

function draw() {
  background(0); 
  bullet.shapeColor = "white"
  bullet.velocityX = speed ;

  wall.depth = bullet.depth + 1
  bullet.depth = bullet.depth2 + 1

  if(hasCollided(bullet,wall)){
 bullet.velocityX = 0
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
   
   
    if(damage>10){
      wall.shapeColor = "green"      //    color(225,0,0)
   }
    if(damage<10){
      wall.shapeColor = "red" //color(230,230,0)
    }
  }
  
// wall= obj1
  background(0);  
  drawSprites();
}
