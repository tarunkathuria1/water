const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var backGround,backGroundImage,person,personImage,garbage,slingshot;
var engine,world;
function preload(){
  backGroundImage=loadImage("clean river.jpg");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(1200,800);
  //garbage=new Garbage(200,200,30)



 
  person=new Person(1000,500);
 
 garbage=new Garbage(1000,500,50,50); 
 

 //slingshot = new Slingshot(garbage.body,{x:person.body.position.x, y:person.body.position.y});

}

function draw() {
  background(backGroundImage);  
Engine.update(engine);

 person.display();
//slingshot.display();
garbage.display();
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
  if (keyIsDown (UP_ARROW)){
		Matter.Body.applyForce(garbage.body,garbage.body.position,{x:-300,y:-300});
  console.log(garbage.body.position)
  var bg="fish.jpg";
  backGroundImage=loadImage(bg);
	}
}
