class Paper{
 constructor(x,y,radius){
 var position={
 isStatic:false,
 restitution:0.3,
 friction:0.5,
 density:1.2
 }
 
 this.p=Bodies.circle(x,y,radius/2,position);
 
 World.add(world,this.p);
 this.image=loadImage("paper.png");
 this.r=radius;
    }
    display(){
        var pos=this.p.position
        push();
        translate(pos.x, pos.y); 
        rectMode(CENTER); 
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r);
        pop();
    }
}
        
