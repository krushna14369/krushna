var bg,bgImg;
var monster, monsterImg;
var spaceship, spaceshipImg;
var leser;
var earth,earthImg,earthd,earthdImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var spaceshipGroup;

var score = 0;
var life = 3;
var bullets = 100;

var heart1, heart2, heart3

var gameState = "fight"

var lose, winning, explosionSound;


function preload(){
  
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  monsterImg = loadImage("assets/monster.png")
  leserImg = loadImage("assets/leser.png")
  earthImg = loadImage("assets/earth.png")

  spaceshipImg = loadImage("assets/spaceship.png")

  bgImg = loadImage("assets/bg.png")

  lose = loadSound("assets/lose.mp3")
  winning = loadSound("assets/win.mp3")
  explosionSound = loadSound("assets/explosion.mp3")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

earth = createSprite(100,150,20,20)
earth.addImage(earthImg)
earth.scale = 1.5
  


player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(monsterImg)
   player.scale = 0.6
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


   
   heart1 = createSprite(displayWidth-150,40,20,20)
   heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(displayWidth-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4
   

   
    leserGroup = new Group()
    spaceshipGroup = new Group()



}

function draw() {
  background(0); 


if(gameState === "fight"){

  
  if(life===3){
    heart3.visible = true
    heart1.visible = false
    heart2.visible = false
  }
  if(life===2){
    heart2.visible = true
    heart1.visible = false
    heart3.visible = false
  }
  if(life===1){
    heart1.visible = true
    heart3.visible = false
    heart2.visible = false
  }

  
  if(life===0){
    gameState = "lost"
    
  }


 
  if(score==50){
    gameState = "won"
    winning.play();
  }

 
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}



if(keyWentDown("space")){
  leser = createSprite(displayWidth-1150,player.y-30,20,10)
  leser.velocityX = 20
  
  leserGroup.add(leser)
  player.depth = leser.depth
  player.depth = player.depth+2
  player.addImage(monsterImg)
  leser = leser-1
  explosionSound.play();
}


else if(keyWentUp("space")){
  player.addImage(monsterImg)
}


if(leser==0){
  gameState = "leser"
  lose.play();
    
}


if(spaceshipGroup.isTouching(leserGroup)){
  for(var i=0;i<spaceshipGroup.length;i++){     
      
   if(spaceshipGroup[i].isTouching(leserGroup)){
        spaceshipGroup[i].destroy()
        leserGroup.destroyEach()
        explosionSound.play();
 
        score = score+1
        }
  
  }
}


if(spaceshipGroup.isTouching(player)){
 
   lose.play();
 

 for(var i=0;i<spaceshipGroup.length;i++){     
      
  if(spaceshipGroup[i].isTouching(player)){
       spaceshipGroup[i].destroy()
      
      life=life-1
       } 
 
 }
}




enemy();
}




drawSprites();


textSize(20)
  fill("white")
text("lesers = " + bullets,displayWidth-210,displayHeight/2-250)
text("Score = " + score,displayWidth-200,displayHeight/2-220)
text("Lives = " + life,displayWidth-200,displayHeight/2-280)


   
if(spaceshipGroup.isTouching(earth)){
  lose.play()
  earth.Image(earthdImg)
if(gameState == "lost"){
  
  textSize(100)
  fill("red")
  text("You Lost ",400,400)
  spaceshipGroup.destroyEach();
  player.destroy();


  

}
}


else if(gameState == "won"){
 
  textSize(100)
  fill("yellow")
  text("You Won ",400,400)
  spaceshipGroup.destroyEach();
  player.destroy();

}


else if(gameState == "leser"){
 
  textSize(50)
  fill("yellow")
  text("You ran out of lesers!!!",470,410)
  spaceshipGroup.destroyEach();
  player.destroy();
  leserGroup.destroyEach();

}

}



function enemy(){
  if(frameCount%50===0){

    
    spaceship = createSprite(random(800,1100),random(100,500),40,40)

    spaceship.addImage(spaceshipImg)
    spaceship.scale = 0.40
    spaceship.velocityX = -3
    spaceship.debug= true
    spaceship.setCollider("rectangle",0,0,400,400)
   
    spaceship.lifetime = 400
   spaceshipGroup.add(spaceship)
  }

}
