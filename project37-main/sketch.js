var canvas, backgroundImage;
var canvas, backgroundImage;
var gameState=0;
var playerCount=0;
var allPlayers;





var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  
  
  
  
  
}
var distance=0
var form,player,game
function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  
  game=new Game ()
  game.getState ()
  game.start()
  
  
  
}


function draw(){
if(playerCount===4){
  game.update(1)
}  
  if(gameState===1){
    clear ()
    game.play()
  }
  
}

