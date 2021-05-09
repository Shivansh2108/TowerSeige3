const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground1 , ground2, ground3;
var score=0;
function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(450,395,900,20);
    ground2=new Ground(390,300,250,10);
    ground3=new Ground(700,200,200,10);
    block1=new Block(300,275,30,40);
    block2=new Block(330,275,30,40);
    block3=new Block(360,275,30,40);
    block4=new Block(390,275,30,40);
    block5=new Block(410,275,30,40);
    block6=new Block(440,275,30,40);
    block7=new Block(470,275,30,40);

    block8=new Block(330,235,30,40);
    block9=new Block(360,235,30,40);
    block10=new Block(390,235,30,40);
    block11=new Block(410,235,30,40);
    block12=new Block(440,235,30,40);
    

    block14=new Block(360,195,30,40);
    block15=new Block(390,195,30,40);
    block16=new Block(410,195,30,40);
    
    

    block19=new Block(390,155,30,40);

    block20=new Block(630,190,30,40);
    block21=new Block(660,190,30,40);
    block22=new Block(690,190,30,40);
    block23=new Block(720,190,30,40);
    block24=new Block(750,190,30,40);

    block25=new Block(660,150,30,40);
    block26=new Block(690,150,30,40);
    block27=new Block(720,150,30,40);
    
    block28=new Block(690,110,30,40);

    polygon=new Polygon(200,200,50,50);
    slingshot=new SlingShot(polygon.body,{x:200,y:200});
//y=-40
}
function draw(){
    background(0);
    Engine.update(engine);
    fill("white");
    textSize(20);
    text("SCORE : "+score,700,50);
    ground1.display();
    ground2.display();
    ground3.display();
    fill ("limegreen");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    fill("yellow");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("orange");
    block14.display();
    block15.display();
    block16.display();

    block25.display();
    block26.display();
    block27.display();
    fill("red");
    block19.display();
    block28.display();
    
    polygon.display();
    slingshot.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block14.score();
    block15.score();
    block16.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    slingshot.attach(polygon.body);
}