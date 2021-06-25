const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var backgroundImg,platform;
var ball,ballp
var  slingshot;
var score
var gameState = "onSling";
var bg = "images/bg1.png";
var score = 0;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,
box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32;


function preload() {
    ballp = loadImage("hexagon.png")
    bgImage();


}

function setup(){
createCanvas(1000,600)    
   engine = Engine.create();
    world = engine.world;

    
    ball = Bodies.circle(50, 200, 10);
    World.add(world, ball);

    slingshot = new Sling(this.ball, {x: 100, y: 200});


    
    ground = new Ground(390,300,250,10);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    //level 2
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
//level3
box13 = new Box(360,195,30,40);
box14 = new Box(390,195,30,40);
box15 = new Box(420,195,30,40);
//top
box16 = new Box(390,155,30,40);
//new 
ground2 = new Ground(700,200,250,10);
box17 = new Box(600,30,30,40);
box18 = new Box(630,30,30,40);
box19 = new Box(660,30,30,40);
box20 = new Box(690,30,30,40);
box21 = new Box(720,30,30,40);
box22 = new Box(750,30,30,40);
//level2
box23 = new Box(630,10,30,40);
box24 = new Box(660,10,30,40);
box25 = new Box(690,10,30,40);
box26 = new Box(720,10,30,40);
//level3
box27 = new Box(750,0,30,40);
box28 = new Box(780,0,30,40);
box29 = new Box(660,0,30,40)
box30 = new Box(690,0,30,40)
box31 = new Box(720,0,30,40)
box32 = new Box(690,155,30,40) 

ground3 = new Ground(500,580,1000,20)


}

function draw(){
if (backgroundImg)
  background(backgroundImg);     
    Engine.update(engine);
    strokeWeight(2);
    stroke("white")
    textSize(13);
    fill('red')
    text("Score:"+score,width-500,50)

    box1.display();
    box1.score();
    box2.display();
    box2.score();
    ground.display();
    box3.display(); 
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();
    ground2.display()
    box17.display();
    box17.score();
    box18.display();
    box18.score();
    box19.display();
    box19.score();
    box20.display();
    box20.score();
    box21.display();
    box21.score();
    box22.display();
    box22.score();
    box23.display();
    box23.score();
    box24.display();
    box24.score();
    box25.display();
    box25.score();
    box26.display();
    box26.score();
    box27.display();
    box27.score();
    box28.display();
    box28.score();
    box29.display();
    box29.score();
    box30.display();
    box30.score();
    box31.display();
    box31.score();
    box32.display();
    box32.score();
   ground3.display();
    slingshot.display();
    
    imageMode(CENTER);
    image(ballp, ball.position.x, ball.position.y, 40, 40)
    //log6.display();
    //slingshot.display();    
}

function mouseDragged(){
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
slingshot.fly()


}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(ball,{x:100,y:200})
        slingshot.attach(ball);
    }
}
    
async function bgImage(){
    var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var time2 = await time.json()
    
    var datetime = time2.datetime
    var hour= datetime.slice(11,13)

    if(hour>06 && hour<18){
        bg = ("images/bg2.jpg")
    }else{
        bg = ("images/bg1.png")
    }
    backgroundImg = loadImage(bg);
  }

  