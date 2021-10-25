const Engine = Matter.Engine;
const World = Matter.World;

//To create PE body- rectangle,circle,polygon
const Bodies = Matter.Bodies;

//To give external properties-velocity,force..,
const Body = Matter.Body;

var button;
var angle=60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  button=createImg("up.png");
  button.position(30,40);
  button.size(50,50);
  button.mouseClicked(vForce)

  ground1=Bodies.rectangle(100,250,100,20,ground_options);
  World.add(world,ground1)



}


function draw() 
{
  background(51);
  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ellipse(ball.position.x,ball.position.y,20);
  push();
  fill("brown")
  rect(ground.position.x,ground.position.y,400,20);
  pop();
  Matter.Body.rotate(ground1,angle)

  //Rotate
  
  push();
  fill("red");
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  
  rect(0,0,100,20);
  pop();
  angle+=0.1
  
}
function vForce(){ //Y direction 
  //Matter.Body.applyForce(body, position, force)
   Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}






















