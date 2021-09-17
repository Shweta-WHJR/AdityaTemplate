


function preload(){
  



}

function setup() {
  createCanvas(displayWidth,displayHeight);
  o=createSprite(400,0,800,800)
  o.addAnimation("oggy",)
  o.addAnimation("friend1",)
  o.addAnimation("friend2",)
  o.addAnimation("friend3",)
 
 
  
  cockroachgroup=createGroup();
  buildinggrp=createGroup();
  stonegrp=createGroup();
  
  enemyGroup=createGroup();
  

  rectMode(CENTER);


}

function draw() {
  background(0);
 if(gameState==="play"){
  spaceship.x=mouseX;
  space.velocityY = 2;
  
  if (space.y > 500) {
    space.y = space.height/2;
  }
  
  if (keyDown("space")) {
    createBullet(spaceship.x);
  }
  

  
  
  
  var select_enemy = Math.round(random(0,4));
  
  if (World.frameCount % 50 == 0) {
    if (select_enemy == 0) {
      createcocroach();
    } else if (select_enemy == 1) {
      createbuilding();
    } else if (select_enemy == 2) {
      createstone();
    } 
    
  }

  if(o.isTouching(enemyGroup)){
    
    gameState="end"
  }
 }else if(gameState==="end"){
  
   enemyGroup.setLifetimeEach(0);
   enemyGroup.setVelocityYEach(0);
   
   textSize(30);
   fill("red")
   text("MISSION FAILED",displayWidth/2-100,120)
 }

  

  
  drawSprites();
  textSize(20);
  fill("green")
  text("ENEMY DESTROYED: "+ score, 10, 30);
}


function createcockroach() {
  var cockroach = createSprite();
  
  cockroachgroup.add(cockroach);
  enemyGroup.add(cockroach)
}

function createBuilding() {
  var building = createSprite();
  
  buildinggrp.add(building);
  enemyGroup.add(buolding)
}

function createstone() {
  var stone = createSprite(Math.round(random(30, displayWidth-100)), 0, 10, 10);
  
  stonegrp.add(stone);
  enemyGroup.add(stone);
}




  
  
