const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var backGround,backGroundImage,person,personImage,garbage,slingshot;
var engine,world;
function preload(){
//backGroundImage=loadImage("clean river.jpg");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(1200,800);
  //garbage=new Garbage(200,200,30)


  backGround=new river(1200,800);
 
  person=new Person(1000,200);
 
 garbage=createSprite(200,200,50,50); 
 garbage.shapeColor="red";

 slingshot = new Slingshot(garbage.body,{x:200, y:50});

}

function draw() {
  background("white");  
Engine.update(engine);

  
 garbage.depth = backGround.depth;
 backGround.depth = backGround.depth + 1;
 // garbage.display();
 person.display();
backGround.display();
slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(garbage.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if (keyCode===32){
      slingshot.attach(garbage.body);
  }
}