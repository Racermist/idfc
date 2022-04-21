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
var fruit;
var fruitCon;

function setup() 
{
  
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground=new Ground(200,690,600,20);
  rope= new Rope(6,{x:245,y:30});
  var fruitOption={
    density:0.001,
  }
  fruit=Bodies.circle(300,300,15,fruitOption);
  Matter.Composite.add(rope.body,fruit);
  fruitCon=new Link(rope,fruit)
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
   ground.display();
   rope.show();
   ellipse(fruit.position.x,fruit.position.y,15,15)
}




