class Garbage
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:1.0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("garbage.png");
		this.body=Bodies.circle(x, y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var garbagepos=this.body.position;		

			push()
			translate(garbagepos.x, garbagepos.y);
			rotate(this.body.angle)
			//strokeWeight(4);
			fill("red")
			imageMode(CENTER);
			image(this.image, 0,0,this.r,50,50)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}