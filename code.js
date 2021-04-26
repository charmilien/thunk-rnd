var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["af5464cd-153c-4cb2-81c2-6adb16adb050","ced8aa9d-2faa-4c50-b764-bb7a0abe0d56","1fec5202-6335-40ae-9de2-efa19e753580","347586bc-9e17-4280-ab76-95fb449d19f9","b9cc773b-d324-4e8d-8156-223cd981c125","55ddf91b-ecdb-4b0a-bd52-c52d8c75346e","c2cce8d8-96d4-4501-9c7b-75ec9717c3ad","fcc93f67-35e0-4e6e-8bd4-179344ebaac4","25e148c8-a393-4b2f-9bb6-e689113e401c"],"propsByKey":{"af5464cd-153c-4cb2-81c2-6adb16adb050":{"name":"idle","sourceUrl":null,"frameSize":{"x":100,"y":127},"frameCount":1,"looping":false,"frameDelay":12,"version":"Its1wmFW9nDVs2S.NSAtvwaLHActm63x","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":127},"rootRelativePath":"assets/af5464cd-153c-4cb2-81c2-6adb16adb050.png"},"ced8aa9d-2faa-4c50-b764-bb7a0abe0d56":{"name":"shoot","sourceUrl":null,"frameSize":{"x":100,"y":127},"frameCount":2,"looping":false,"frameDelay":4,"version":"F8MvL_BrSWCBbNAv05Tib3KZVVQURfc0","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":127},"rootRelativePath":"assets/ced8aa9d-2faa-4c50-b764-bb7a0abe0d56.png"},"1fec5202-6335-40ae-9de2-efa19e753580":{"name":"orb","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":3,"version":"GU3T_qFYn7UE6h.60Gwjolpzf82ZDqdi","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/1fec5202-6335-40ae-9de2-efa19e753580.png"},"347586bc-9e17-4280-ab76-95fb449d19f9":{"name":"red","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":4,"version":"hGcUz3SOor1OvCaQu.ZFjKQhEbGA0jaq","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/347586bc-9e17-4280-ab76-95fb449d19f9.png"},"b9cc773b-d324-4e8d-8156-223cd981c125":{"name":"jump","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":5,"looping":true,"frameDelay":4,"version":"KQcmn7WrGla10HnNhtpP9fqs1eRSDUHv","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":600},"rootRelativePath":"assets/b9cc773b-d324-4e8d-8156-223cd981c125.png"},"55ddf91b-ecdb-4b0a-bd52-c52d8c75346e":{"name":"bg","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":6,"looping":true,"frameDelay":12,"version":"_AcF74rFIt6wlCVVyyGAdSPTJoQiR46w","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":1200},"rootRelativePath":"assets/55ddf91b-ecdb-4b0a-bd52-c52d8c75346e.png"},"c2cce8d8-96d4-4501-9c7b-75ec9717c3ad":{"name":"boss","sourceUrl":"assets/v3/animations/K19gOeQwmZmymB9XH4g155BECBSqr-IIVBu0wJoYA98/c2cce8d8-96d4-4501-9c7b-75ec9717c3ad.png","frameSize":{"x":370,"y":174},"frameCount":1,"looping":true,"frameDelay":4,"version":"CvCFNHo.hrGU8jy_uqWWDTWVKPlCN4Ae","loadedFromSource":true,"saved":true,"sourceSize":{"x":370,"y":174},"rootRelativePath":"assets/v3/animations/K19gOeQwmZmymB9XH4g155BECBSqr-IIVBu0wJoYA98/c2cce8d8-96d4-4501-9c7b-75ec9717c3ad.png"},"fcc93f67-35e0-4e6e-8bd4-179344ebaac4":{"name":"as - Copy (2).png_1","sourceUrl":null,"frameSize":{"x":88,"y":77},"frameCount":3,"looping":true,"frameDelay":12,"version":"9C1984kUsu9seFAKIu5eO2Dq47SwcqIf","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":154},"rootRelativePath":"assets/fcc93f67-35e0-4e6e-8bd4-179344ebaac4.png"},"25e148c8-a393-4b2f-9bb6-e689113e401c":{"name":"head","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":5,"version":"0Q5M02wA5UcQeAh5OO8JjUAz7hTqEiuY","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/25e148c8-a393-4b2f-9bb6-e689113e401c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(200,200,20,20)
var gameState = 0
var ground = createSprite(250,270,4000,10)
var mC = createSprite(25,230,20,20)

 // bg.setAnimation("bg")
mC.scale = 0.5

mC.setAnimation("idle")
 var end = createSprite(200,95,10,10)
  end.shapeColor = "cyan"
  end.setAnimation("orb")
  end.visible = false
  
  


function draw() {
  
 background("white")
  mC.setAnimation("idle");
  mC.collide(ground)
  

 
  if(gameState === 0){
text("its the year 20xx,the world is running fine,",32,72);
 text("untill a guy who goes by the name of gygabite",32,87);
 text("(purposeful mispronounciation)",32,99);
 text("did some experiments with time,space and interdimensional travel",32,112)
 text("these things go horribly wrong unexpectedly",32,127);
 text("this in turn mixes up dimesions,timelines and most importantly",32,139)
 text("c r e a t e s    a    n i g h t m a r e",32,152);
 text("press Z to continue",140,40);
 mC.visible = false
 ground.visible = false
  }
  if(keyDown("z")){
    gameState = 1
    console.log("test")
  }
  if(gameState === 1){
    
    text("DISCLAIMER:do not reset while playing",32,50)
    text("use the reset button provided",32,60)
    text("press X to continew",140,40)
    text("press ARROW keys to move",140,70)
    text("press O to jump and P to hit",140,80)
    text("get the CyAn orb to proceed to the next level.")
     mC.visible = false
 ground.visible = false
 end.visible = false
  
    if(keyDown("x")){
      gameState = 2
      music()
    }
    
   
  mC.visible = true
  ground.visible = true
  end.visible = true
  
  
}
   if(gameState===2||gameState ===3||gameState===5||gameState ===6 ){
      mC.visible = true
      ground.visible = true
      end.visible = true
      text("will this go on forever?",32,50)
      platform()
  }
  if(gameState ===4){
  mC.visible = true
      ground.visible = true
      end.visible = true
      platform()
      text("get ur hands on the P key",32,50)
 
  }
  if(gameState === 7||gameState === 8||gameState === 9){
    mC.visible = true
      ground.visible = true
      end.visible = true
      text("and,maybe,and just maybe,your question is gonna be unanswred",32,50)
      platform()
  }
  if(gameState ===10||gameState ===11){
  mC.visible = true
      ground.visible = true
      end.visible = true
      platform()
      
      text("press the P key in front of that cow",32,50)
 
  }
  if(gameState===12||gameState === 13||gameState ===14||gameState ===15|gameState ===16){
    mC.visible = true
      ground.visible = true
      end.visible = true
      platform()
      
      text("you:there's no cow game.",32,50)
  }
  if(gameState === 17||gameState ===18||gameState ===19|gameState ===20){
    mC.visible = true
      ground.visible = true
      end.visible = true
      platform()
      
      text("you:where's the text to overwrite mine,what is happening?,also the population of all the countries in the world adds up to armour 30billion people and this  is just nothing plus why would you ever read this whats the point this is supposed to discourage people from datamining games which in my opinion is like snatching toys form kids plus  it ruins fun from people who like to find secretes and thanks for reading you're a legend",32,50)
  }
  if(gameState===21||gameState===22||gameState === 23||gameState ===24||gameState ===25|gameState ===26){
    mC.visible = true
      ground.visible = true
      end.visible = true
      platform()
      
      text("you:also player,i dont have bullets.",32,50)
  }
  if(gameState===27){
    mC.visible = true
      ground.visible = true
      end.visible = true
      platform()
      
      text("an enemy will spawn the next floor get your hands on P key",32,50)
  }
  if(gameState ===28){
    mC.visible = true
      ground.visible = true
      end.visible = true
      platform()
      
      text("also since you dont have bullets ensure that your UP_ARROW is working",32,50)
  }
  if(gameState ===29){
    mC.visible = true
    ground.visible = true
    bossroom()
    
    text("this is the final room for resting your fingers because iknow you're tired")
  }
  if(gameState ===30){
    mC.visible = true
    ground.visible = true
      var bos = createSprite(200,100,20,20)
  var bosshead =  createSprite(200,75,20,7.5)
  bos.setAnimation("boss")
  bosshead.setAnimation("head")
  mC.depth = bos.depth+1
  }
  if(keyWentDown("left")){
    mC.x = mC.x-8
  }
  
  if(keyWentDown("right")){
    mC.x = mC.x+8
  }
  if(keyWentDown("up")){
    mC.velocityY = mC.velocityY-9
    mC.setAnimation("jump")
    //if(){}
  }
  mC.velocityY = mC.velocityY+1
  if(mC.isTouching(end)){
    gameState++
    mC.x = 25
    mC.y = 230
  }
  if(keyDown("p")){
    mC.setAnimation("shoot")
   
  }
  if(keyWentDown("w")){mC.x = mC.x+50}
  if(keyWentDown("s")){mC.x = mC.x-50}
  if(keyWentDown("g")){gameState = 29}
  
  
  
  
  
  
  
  

  
  drawSprites()
   
}

function platform(){
  var platform1 = createSprite(200,200,100,10)
  var platform2 = createSprite(0,180,50,10)
  var platform3 = createSprite(400,150,50,10)
  var platform4 = createSprite(200,120,100,10)
 
  mC.collide(platform1)
  mC.collide(platform2)
  mC.collide(platform3)
  mC.collide(platform4)
  
}

function music(){
  playSound("63---It's-Raining-Somewhere-Else-(as-I-remember).mp3",true)
}
function bossroom(){
  var platform1 = createSprite(200,200,100,10)
  var platform2 = createSprite(0,180,50,10)
  var platform3 = createSprite(400,150,50,10)
  var platform4 = createSprite(200,120,100,10)
  end.visible = false
  var bossorb = createSprite(200,95,10,10)
  bossorb.setAnimation("red")
 
  mC.collide(platform1)
  mC.collide(platform2)
  mC.collide(platform3)
  mC.collide(platform4)
}
function last_level(){
  var bos = createSprite(200,200,20,20)
  var bosshead =  createSprite(20,20,20,20)
  bos.setAnimation("boss")
  //bosshead
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
