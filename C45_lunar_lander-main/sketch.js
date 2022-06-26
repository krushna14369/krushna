var spaceship,spaceshipImg;
var earth,earthImg;
var monster,monsterImg;
var leser,leserImg;
var star,oneStar,twoStar,emptystar,starImg;
var score=0;


function preload(){
  bg =loadImage("assets/bg.png");
  spaceshipImg =loadImage("assets/spaceship.png");
  earthImg =loadImage("assets/earth.png");
  monsterImg =loadImage("assets/monster.png")
  leserImg =loadImage("assets/leser.png");
  
  star =loadAnimation("assets/star.png")
  oneStar =loadAnimation("assets/one_star.png")
  twoStar =loadAnimation("assets/stars.png")
  emptystar =loadAnimation("assets/empty.png")
} 

function setup() {
  canvas = createCanvas(1500,700);

  earth=createSprite(1400,600,80,80);
  earth.addImage("k",earthImg);
  earth.scale=2;

  monster=createSprite(1200,500,90,90);
  monster.addImage("m",monsterImg);
  monster.scale=0.7;

  starImg=createSprite(1300,80,50,50);
  starImg.addAnimation("empty",emptystar)
  starImg.addAnimation("one",oneStar)
  starImg.addAnimation("two",twoStar)
  starImg.changeAnimation("empty")
  starImg.scale=0.2;  

  spaceshipGroup=new Group();
  leserGroup=new Group();
}


function draw() {
  background(bg);
  fill("yellow");
  textSize(35);
  text("Space Warriors",800,50);
  
  text("SCORE " +score,1250,80)

if(spaceshipGroup.isTouching(leserGroup)){
  for(var i=0;i<spaceshipGroup;i++){
   if(spaceshipGroup[i].isTouching(leserGroup)){
    spaceshipGroup[i].destroyEach();
    starImg.changeAnimation("two")
    score = score+1;
   }
    
  }
}
  drawSprites();
  monsters();
}

function monsters(){
  if(frameCount%110===0){
  spaceship=createSprite(0,0,90,90)
  spaceship.scale=0.9;
  spaceship.addImage("space",spaceshipImg)
  spaceship.y=Math.round(random(0,200))
  spaceship.x=Math.round(random(0,300))
  spaceship.velocityX=1;
  spaceship.velocityY=1;
  spaceshipGroup.add(spaceship);
  }
}
 
function keyPressed(){
  if(keyCode==UP_ARROW){
    monster.y-=50;trew
  }

  if(keyCode==DOWN_ARROW){
    monster.y+=50;
  }
  if(keyCode==32){
    leser=createSprite(1200,monster.y,30,30);
    leser.addImage("l",leserImg);
    leser.scale=0.4;
    leserGroup.add(leser);
    leser.velocityX=-5;
    
  }
}