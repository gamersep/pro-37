class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    //question.hide();
    
    //add background color
    background('skyblue');
    
    //add text to display result of quiz
    textSize(30);
    fill("black");
    textStyle(BOLD);
    text("result of quiz",340,50);

    //call the getPlayerInfo function
   Contestant.getPlayerInfo();

    
    
    
    
    
    
    
    if(allContestants!==undefined){
      fill("blue");
      textSize(20);
      text("Contestants who answerd correctly are written in green");
      var display_Answers=230;
      for(var plr in allContestants){
        var correctAns="2";
        if(correctAns===allContestants[plr].answer){
          fill("green");
        }
        else{
          fill("red");
        }
        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name+" : "+allContestants[plr].answer,250,display_Answers);

      }
    }
    
  }

}
