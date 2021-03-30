
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObj, chain;
var mango1,mango2,mango3,mango5,mango6,mango7, mango8;
var world,person;
var stoneObj;
function preload()
{
	person=loadImage("person.png");
	mango1Img=loadImage("mango.png");
	mango2Img=loadImage("mango.png");
	mango3Img=loadImage("mango.png");
    mango4Img=loadImage("mango.png");
	mango5Img=loadImage("mango.png");
    mango6Img=loadImage("mango.png");
    mango7Img=loadImage("mango.png");
    mango8Img=loadImage("mango.png");
	treeImg=loadImage("tree.png");
	stoneImg=loadImage("stone.png");
	
}

function setup() {
	createCanvas(1300, 600);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new mango(1100,100,30);
	mango2 = new mango(1200,200,30);
	mango3 = new mango(1100,150,30);
	mango4 = new mango(1000,100,30);
	mango5 = new mango(1000,200,30);
	mango6 = new mango(900,200,30);
	mango7 = new mango(900,200,30);
	mango8 = new mango(800,250,30);

	treeObj=new tree(1050,580);
	groundObj=new ground(width/2,600,width,40);
    stoneObj = new stone();
    chain = new Slingshot();


	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("grey");

  text("Press Space to get another chance",50,50);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  groundObject.display();
  stoneObj.display();
  chain.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x : mouseX , y : mouseY});
	}
	function mouseReleased(){
		chain.fly();
	}
	function detectollision(stoneObj,lmango){
	mangoBodyPosition = mangoObj.body.position
	stoneBodyPosition = stoneObj.body.position
	
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance <= lmango.r + stoneObj.r){
     Matter.Body.setStatic(mangoObj.body,false);
	}
}
function keyPressed(){
	if(keyCode === 32){
		
	chain.attach(stone.body);
		
		
	}
}
	

