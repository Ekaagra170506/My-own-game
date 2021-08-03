
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,paddle,rand,edges,brick=[brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12,brick13,brick14,brick15,brick16,brick17,brick18,brick19,brick20,brick21,brick22,brick23,brick24,brick25,brick26,brick27,brick28,brick29,brick30,];

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;


	paddle = createSprite(250,420,100,15);
  paddle.shapeColor="BLUE";

	ball = createSprite(250,390,20,20);
	ball.shapeColor="YELLOW";
	ball.velocityY = -9;

  fill(255,165,0);
  brick1 = new Brick(250,100,35,15);
  brick2 = new Brick(215,100,35,15);
  brick3 = new Brick(180,100,35,15);
  brick4 = new Brick(145,100,35,15);
  brick5 = new Brick(110,100,35,15);
  brick6 = new Brick(285,100,35,15);
  brick7 = new Brick(320,100,35,15);
  brick8 = new Brick(355,100,35,15);
  brick9 = new Brick(390,100,35,15);

  brick10 = new Brick(250,115,35,15);
  brick11 = new Brick(215,115,35,15);
  brick12 = new Brick(180,115,35,15);
  brick13 = new Brick(145,115,35,15);
  brick14 = new Brick(110,115,35,15);
  brick15 = new Brick(285,115,35,15);
  brick16 = new Brick(320,115,35,15);
  brick17 = new Brick(355,115,35,15);
  brick18 = new Brick(390,115,35,15);

  brick19 = new Brick(250,130,35,15);
  brick20 = new Brick(215,130,35,15);
  brick21 = new Brick(180,130,35,15);
  brick22 = new Brick(145,130,35,15);
  brick23 = new Brick(110,130,35,15);
  brick24 = new Brick(285,130,35,15);
  brick25 = new Brick(320,130,35,15);
  brick26 = new Brick(355,130,35,15);
  brick27 = new Brick(390,130,35,15);

  fill("WHITE");
  brick28 = new Brick(250,145,35,15);
  brick29 = new Brick(215,145,35,15);
  brick30 = new Brick(180,145,35,15);
  brick31 = new Brick(145,145,35,15);
  brick32 = new Brick(110,145,35,15);
  brick33 = new Brick(285,145,35,15);
  brick34 = new Brick(320,145,35,15);
  brick35 = new Brick(355,145,35,15);
  brick36 = new Brick(390,145,35,15);

  brick45 = new Brick(250,160,35,15);
  brick37 = new Brick(215,160,35,15);
  brick38 = new Brick(180,160,35,15);
  brick39 = new Brick(145,160,35,15);
  brick40 = new Brick(110,160,35,15);
  brick41 = new Brick(285,160,35,15);
  brick42 = new Brick(320,160,35,15);
  brick43 = new Brick(355,160,35,15);
  brick44 = new Brick(390,160,35,15);

  brick46 = new Brick(250,175,35,15);
  brick47 = new Brick(215,175,35,15);
  brick48 = new Brick(180,175,35,15);
  brick49 = new Brick(145,175,35,15);
  brick50 = new Brick(110,175,35,15);
  brick51 = new Brick(285,175,35,15);
  brick52 = new Brick(320,175,35,15);
  brick53 = new Brick(355,175,35,15);
  brick54 = new Brick(390,175,35,15);

  fill("GREEN");
  brick55 = new Brick(250,190,35,15);
  brick56 = new Brick(215,190,35,15);
  brick57 = new Brick(180,190,35,15);
  brick58 = new Brick(145,190,35,15);
  brick59 = new Brick(110,190,35,15);
  brick60 = new Brick(285,190,35,15);
  brick61 = new Brick(320,190,35,15);
  brick62 = new Brick(355,190,35,15);
  brick63 = new Brick(390,190,35,15);

  brick64 = new Brick(250,205,35,15);
  brick65 = new Brick(215,205,35,15);
  brick66 = new Brick(180,205,35,15);
  brick67 = new Brick(145,205,35,15);
  brick68 = new Brick(110,205,35,15);
  brick69 = new Brick(285,205,35,15);
  brick70 = new Brick(320,205,35,15);
  brick71 = new Brick(355,205,35,15);
  brick72 = new Brick(390,205,35,15);

  brick73 = new Brick(250,220,35,15);
  brick74 = new Brick(215,220,35,15);
  brick75 = new Brick(180,220,35,15);
  brick76 = new Brick(145,220,35,15);
  brick77 = new Brick(110,220,35,15);
  brick78 = new Brick(285,220,35,15);
  brick79 = new Brick(320,220,35,15);
  brick80 = new Brick(355,220,35,15);
  brick81 = new Brick(390,220,35,15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
  rand = random(-7,7);

if(keyDown(LEFT_ARROW)){
    paddle.x+=-10;
	
}
if(keyDown(RIGHT_ARROW)){
    paddle.x+=10;
}




  edges = createEdgeSprites();
  paddle.bounceOff(edges);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);



  paddle.display();
  ball.display();

  fill(255,165,0);
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();
  brick15.display();
  brick16.display();
  brick17.display();
  brick18.display();
  brick19.display();
  brick20.display();
  brick21.display();
  brick22.display();
  brick23.display();
  brick24.display();
  brick25.display();
  brick26.display();
  brick27.display();


  fill("WHITE");
 
  brick31.display();
  brick32.display();
  brick30.display();
 
  brick34.display();
  brick35.display();
  brick36.display();

  
  brick38.display();
  brick39.display();
  brick40.display();
  
  brick42.display();
  brick43.display();
  brick44.display();
  

  
  brick48.display();
  brick49.display();
  brick50.display();
 
  brick52.display();
  brick53.display();
  brick54.display();

  fill("GREEN");
 
  brick55.display();
  brick56.display();
  brick57.display();
  brick58.display();
  brick59.display();
  brick60.display();
  brick61.display();
  brick62.display();
  brick63.display();

  brick67.display();
  brick68.display();
  brick69.display();
  brick70.display();
  brick64.display();
  brick66.display();
  brick72.display();
  brick71.display();
  brick65.display();

  brick73.display();
  brick74.display();
  brick76.display();
  brick75.display();
  brick77.display();
  brick78.display();
  brick79.display();
  brick80.display();
  brick81.display();

  fill("BLUE");
  brick28.display();
  brick29.display();
  brick33.display();
  brick45.display();
  brick37.display();
  brick41.display();
  brick46.display();
  brick47.display();
  brick51.display();
  //brick55.display();

  RandomVelocity();
  BrickHit(ball,);

  ball.bounceOff(bricks,BrickHit())
  drawSprites();

  
  
}


function RandomVelocity(){
	if(ball.isTouching(paddle)){
		ball.velocityX = rand;
		ball.bounceOff(paddle);
	}
}

function BrickHit(ball,brick){
  brick.remove();
  if(ball.isTouching(brick1)){
    brick1.destroy();
  }
  if(ball.isTouching(brick2)){
    brick2.destroy();
  }
  if(ball.isTouching(brick3)){
    brick3.destroy();
  }
  if(ball.isTouching(brick4)){
    brick4.destroy();
  }
  if(ball.isTouching(brick5)){
    brick5.destroy();
  }
  if(ball.isTouching(brick6)){
    brick6.destroy();
  }
  if(ball.isTouching(brick7)){
    brick7.destroy();
  }
  if(ball.isTouching(brick8)){
    brick8.destroy();
  }
  if(ball.isTouching(brick9)){
    brick9.destroy();
  }
  if(ball.isTouching(brick10)){
    brick10.destroy();
  }
  if(ball.isTouching(brick11)){
    brick11.destroy();
  }
  if(ball.isTouching(brick12)){
    brick12.destroy();
  }
  if(ball.isTouching(brick13)){
    brick13.destroy();
  }
  if(ball.isTouching(brick14)){
    brick14.destroy();
  }
  if(ball.isTouching(brick15)){
    brick15.destroy();
  }
  if(ball.isTouching(brick16)){
    brick16.destroy();
  }
  if(ball.isTouching(brick17)){
    brick17.destroy();
  }
  if(ball.isTouching(brick18)){
    brick18.destroy();
  }
  if(ball.isTouching(brick19)){
    brick19.destroy();
  }
  if(ball.isTouching(brick20)){
    brick20.destroy();
  }
  if(ball.isTouching(brick21)){
    brick21.destroy();
  }
  if(ball.isTouching(brick22)){
    brick22.destroy();
  }
  if(ball.isTouching(brick23)){
    brick23.destroy();
  }
  if(ball.isTouching(brick24)){
    brick24.destroy();
  }
  if(ball.isTouching(brick25)){
    brick25.destroy();
  }
  if(ball.isTouching(brick26)){
    brick26.destroy();
  }
  if(ball.isTouching(brick27)){
    brick27.destroy();
  }
  if(ball.isTouching(brick28)){
    brick28.destroy();
  }
  if(ball.isTouching(brick29)){
    brick29.destroy();
  }
  if(ball.isTouching(brick30)){
    brick30.destroy();
  }
  if(ball.isTouching(brick31)){
    brick31.destroy();
  }
  if(ball.isTouching(brick32)){
    brick32.destroy();
  }
  if(ball.isTouching(brick33)){
    brick33.destroy();
  }
  if(ball.isTouching(brick34)){
    brick34.destroy();
  }
  if(ball.isTouching(brick35)){
    brick35.destroy();
  }
  if(ball.isTouching(brick36)){
    brick36.destroy();
  }
  if(ball.isTouching(brick37)){
    brick37.destroy();
  }
  if(ball.isTouching(brick38)){
    brick38.destroy();
  }
  if(ball.isTouching(brick39)){
    brick39.destroy();
  }
  if(ball.isTouching(brick40)){
    brick40.destroy();
  }
  if(ball.isTouching(brick41)){
    brick41.destroy();
  }
  if(ball.isTouching(brick42)){
    brick42.destroy();
  }
  if(ball.isTouching(brick43)){
    brick43.destroy();
  }
  if(ball.isTouching(brick44)){
    brick44.destroy();
  }
  if(ball.isTouching(brick45)){
    brick45.destroy();
  }
  if(ball.isTouching(brick46)){
    brick46.destroy();
  }
  if(ball.isTouching(brick47)){
    brick47.destroy();
  }
  if(ball.isTouching(brick48)){
    brick48.destroy();
  }
  if(ball.isTouching(brick49)){
    brick49.destroy();
  }
  if(ball.isTouching(brick50)){
    brick50.destroy();
  }
  if(ball.isTouching(brick51)){
    brick51.destroy();
  }
  if(ball.isTouching(brick52)){
    brick52.destroy();
  }
  if(ball.isTouching(brick53)){
    brick53.destroy();
  }
  if(ball.isTouching(brick54)){
    brick54.destroy();
  }
  if(ball.isTouching(brick55)){
    brick55.destroy();
  }
  if(ball.isTouching(brick56)){
    brick56.destroy();
  }
  if(ball.isTouching(brick57)){
    brick57.destroy();
  }
  if(ball.isTouching(brick58)){
    brick58.destroy();
  }
  if(ball.isTouching(brick59)){
    brick59.destroy();
  }
  if(ball.isTouching(brick60)){
    brick60.destroy();
  }
  if(ball.isTouching(brick61)){
    brick61.destroy();
  }
  if(ball.isTouching(brick62)){
    brick62.destroy();
  }
  if(ball.isTouching(brick63)){
    brick63.destroy();
  }
  if(ball.isTouching(brick64)){
    brick64.destroy();
  }
  if(ball.isTouching(brick65)){
    brick65.destroy();
  }
  if(ball.isTouching(brick66)){
    brick66.destroy();
  }
  if(ball.isTouching(brick67)){
    brick67.destroy();
  }
  if(ball.isTouching(brick68)){
    brick68.destroy();
  }
  if(ball.isTouching(brick69)){
    brick69.destroy();
  }
  if(ball.isTouching(brick70)){
    brick70.destroy();
  }
  if(ball.isTouching(brick71)){
    brick71.destroy();
  }
  if(ball.isTouching(brick72)){
    brick72.destroy();
  }
  if(ball.isTouching(brick73)){
    brick73.destroy();
  }
  if(ball.isTouching(brick74)){
    brick74.destroy();
  }
  if(ball.isTouching(brick75)){
    brick75.destroy();
  }
  if(ball.isTouching(brick76)){
    brick76.destroy();
  }
  if(ball.isTouching(brick77)){
    brick77.destroy();
  }
  if(ball.isTouching(brick78)){
    brick78.destroy();
  }
  if(ball.isTouching(brick79)){
    brick79.destroy();
  }
  if(ball.isTouching(brick80)){
    brick80.destroy();
  }
  if(ball.isTouching(brick81)){
    brick81.destroy();
  }

}




