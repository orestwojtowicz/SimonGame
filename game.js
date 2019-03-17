// empty array for holding user clicked colour
var userClickedPattern = [];


// empty array for holding random colour

var gamePattern = [];

// Array hold colors

var buttonColours = ["red", "blue", "green", "yellow"];

// level variable

var level = 0;

var flag = false;

// random number generator click

$(".btn").click(function () {
    var clickedButtonAtrr = $(this).attr("id");
    userClickedPattern.push(clickedButtonAtrr);
    playSound(clickedButtonAtrr);
    animatePress(clickedButtonAtrr);
    
  checkAnswer(userClickedPattern.length-1);
});



// key detections


$(document).keypress(function () {



    if (!flag) {
        $("#level-title").text("Level " + level);
        nextSequence();
        flag = true;

    }
  




});

function nextSequence() {
  userClickedPattern = [];
    
    level++;
    
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor((Math.random() * 4));

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    
   
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);





}


// wywolac to po tym jak uzytkownik kliknie w odpowiedz
// podajac index of the last answer in the user's sequence

function checkAnswer(currentLevel) {
    //var userClickedPattern = []; user answers
    //var gamePattern = []; random values from computer
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      //.game-over
            
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
             $("body").removeClass("game-over");
        },100);
        
        $("#level-title").text("Game Over, Press any Key to Play Again");
        
        startOver();
        
    }  
    
    
}

function startOver() {
    level = 0;
    flag = false;
    gamePattern = [];
}



function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    //css pressed class

    var time = 100;

    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");

    }, time);


}




// to do:
// when key is pressed call nextSequence()
// tylko wywolac za pierwszym razem
// po nacisnieciu przycisku zmienic h1 do Level 0
// kiedy nextSequence jest wywolana zwiekszysc level
