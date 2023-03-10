const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(5,{x:245,y:30})
  fruit = Bodies.circle(300,300,15,{density:0.001})
  Matter.Composite.add(rope.body,fruit)
  fruitConnection = new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  Engine.update(engine);
  background(51);
  ground.show();
  rope.show()
  ellipse(fruit.position.x, fruit.position.y,15,15)

  
  

 
   
}
