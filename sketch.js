const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options ={
        restitution:10

    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
      
     ball = Bodies.circle(200,200,20,ball_options);

        ball2 = Bodies.polygon(320, 210, 10, 20 );
      
     World.add(world,ball);
    console.log(ball2);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    rect(ball2.position.x,ball2.position.y,100,200);
    
}