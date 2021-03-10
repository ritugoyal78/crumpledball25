
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,redzone_1,redzone_2,redzone_3;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(700,680,1400,20)
	redzone_1 = new Dustbin(1140,636,20,50);
	redzone_2 = new Dustbin(1250,650,200,20);
	redzone_3 = new Dustbin(1350,636,20,50);

	paper=new Paper(200,450,20);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
	rectMode(CENTER);
  
  background(0);
  ground.display()
  paper.display();
  redzone_1.display();
  redzone_2.display();
  redzone_3.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-30});
  
	}
}

