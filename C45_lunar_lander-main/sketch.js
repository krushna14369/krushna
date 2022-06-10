var spaceship,spaceshipImg;
var earth,earthImg;
var monster,monsterImg;
var leser,leserImg;


function preload(){
  bg =loadImage("assets/bg.png");
  spaceshipImg =loadImage("assets/spaceship.png");
  earthImg =loadImage("assets/earth.png");
  monsterImg =loadImage("assets/monster.png")
  leserImg =loadImage("assets/leser,png");

} 
function setup() {
  canvas = createCanvas(1600,800);

  earth=createSprite(1400,600,80,80);
  earth.addImage("k",earthImg);
  earth.scale=2;

  monster=createSprite(1200,500,90,90);
  monster.addImage("m",monsterImg);
  monster.scale=0.7;

  leser=createSprite(1200,500,30,30);
  leser.addImage("l",leserImg);
  

}

function draw() {
  background(bg);

  drawSprites();
  monsters();
}

function monsters(){
  if(frameCount%100===0){
  spaceship=createSprite(0,0,90,90)
  spaceship.scale=0.9;
  spaceship.addImage("space",spaceshipImg)
  spaceship.y=Math.round(random(0,200))
  spaceship.x=Math.round(random(0,300))
  spaceship.velocityX=1;
  spaceship.velocityY=1;

  }
}
