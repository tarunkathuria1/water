class Person {
    constructor(x, y) {
      var options = {
        isStatic: true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("person.jpg");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(keyDown("LEFT_ARROW")){
        pos.x=pos.x-2;
      }
    
      if(keyDown("RIGHT_ARROW")){
        pos.x=pos.x+2;
      }
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
        image(this.image, 0, 0);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  