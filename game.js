
// empty array for holding random colour

var gamePattern = [];

// Array hold colors

var buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence() {
    
    var randomNumber = Math.floor((Math.random()*4));

    var randomChosenColour = buttonColours[randomNumber];
    
    $("#"+randomChosenColour).css("background-color", buttonColours);
    
    gamePattern.push(randomChosenColour);
}


