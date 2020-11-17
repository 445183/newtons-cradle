class Bob{
    constructor(x,y){
       this.body=Bodies.circle(x,y,25,{isStatic:false,restitution:1.25,density:1});
       World.add(world,this.body);
    }
    display(){
       var x=this.body.position.x;
       var y=this.body.position.y;
       ellipseMode(RADIUS);
       fill("white");
       ellipse(x,y,25);
    }
}