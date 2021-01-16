var canvas;
var music;
var stage1,stage2,stage3,stage4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    stage1=createSprite(80,580,130,20);
    stage2=createSprite(240,580,130,20);
    stage3=createSprite(400,580,130,20);
    stage4=createSprite(560,580,130,20);
    stage5=createSprite(720,580,130,20);

    //create box sprite and give velocity
    ball=createSprite(Math.round(random(50,270)),200,20,20);
    ball.shapeColor="white";
    ball.setVelocity(4,5);

    edges=createEdgeSprites();
}

function draw() {
    background("skyblue");
    //create edgeSprite

    
    //add condition to check if box touching surface and make it box
    
    
    if(isTouching(stage1,ball)&&ball.bounceOff(stage1)){
    ball.shapeColor="blue";
    }else{
        stage1.shapeColor="blue";
        music.play();
    }
    if(isTouching(stage2,ball)&&ball.bounceOff(stage2)){
    ball.shapeColor="red";
    }else{
        stage2.shapeColor="red";
        music.stop();
        ball.setVelocity(0);
    }
    if(isTouching(stage3,ball)&&ball.bounceOff(stage3)){
        ball.shapeColor="yellow";
    }else{
        stage3.shapeColor="yellow";
        music.play();
    }
    if(isTouching(stage4,ball)&&ball.bounceOff(stage4)){
        ball.shapeColor="purple";
    }else{
        stage4.shapeColor="purple";
        music.stop();
        ball.setVelocity(0);
    }
    if(isTouching(stage5,ball)&&ball.bounceOff(stage5)){
        ball.shapeColor="green";
    }else{
        stage5.shapeColor="green";
    }
    ball.bounceOff(edges)
    drawSprites();              
}
