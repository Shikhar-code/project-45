
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var player
var particles = []
function preload()
{
	
}

function setup() {
	createCanvas(800, 900);
player=createSprite(700,800,40,40)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (keyIsDown(LEFT_ARROW))
  {
player.velocityX=-5
  }
  if (keyIsDown(RIGHT_ARROW))
  {
player.velocityX=5
  }

  if (keyWentUp("LEFT_ARROW")){
	player.velocityX=0
  
   }
	if (keyWentUp("RIGHT_ARROW")){
   player.velocityX=0
	}

	if(frameCount%60===0){
		particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
	  }
	
	  if(frameCount%30===0){
		particles.push(new Particle(random(100, width/2+30), 10,10));
	  } 
	  for (var j = 0; j < particles.length; j++) {
		particles[j].display();
	  }
	  
  drawSprites();
 
}



