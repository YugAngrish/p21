var car , wall ;
var weight , speed = car.velocityX;


function setup() {
  createCanvas(800,400);

  speed = random(55,90);
  weight = random(400,1500);//1500

 wall = createSprite( 700, 200, 60, height/2);
 car = createSprite(50,200,20,50)
car.velocityX = speed;
car.shapeColor = "white"
}

function draw() {
  background(0); 

  car.velocityX = speed ;
  

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0
    var deformation =0.5*weight*speed*speed/22500

    if(deformation>=180){
      car.shapeColor = "red"      //    color(225,0,0)
   }
    if(deformation<180 || deformation>100){
      car.shapeColor = "yellow" //color(230,230,0)
    }
    if(deformation<100){
      car.shapeColor =  "green"      //color(0,255,0)
    }
  }
  background(0);  
  drawSprites();
}