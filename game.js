
// empty array for holding user clicked colour
var userClickedPattern = [];


// empty array for holding random colour

var gamePattern = [];

// Array hold colors

var buttonColours = ["red", "blue", "green", "yellow"];


// random number generator

   $(".btn").click(function(){ 
   var clickedButtonAtrr = $(this).attr("id");
    userClickedPattern.push(clickedButtonAtrr);
    playSound(clickedButtonAtrr);
       
    
});



    
    function nextSequence() {
 

        
    var randomNumber = Math.floor((Math.random()*4));
        
    var randomChosenColour = buttonColours[randomNumber];
        
    gamePattern.push(randomChosenColour);
        
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

        playSound(randomChosenColour);
        
    }    



function playSound(name) {
    
 var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}




























