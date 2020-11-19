class Ground {
 constructor(x,y,width,height){
 var position={
  isStatic:true
 } 

 this.ground= Bodies.rectangle(x,y,width,height,position);
 World.add(world,this.ground);
 this.w=width;
 this.h=height;

}
display(){

    var pos =this.ground.position;
    rectMode(CENTER)
    fill("red");
    rect(pos.x,pos.y,this.w,this.h);
}
}