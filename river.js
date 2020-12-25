class river  {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      this.image = loadImage("clean river.jpg");
    }
  
    display() {
        push();
        imageMode(CENTER);
        image(this.image, 0, 0);
        pop();
    }
  }
  