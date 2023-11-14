var userClickedPattern = [];

var started = false;
var level = 0;

const buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var name;

$(document).keypress(function() {
  if(!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  userClickedPattern = [];

  $("#level-title").text("Level " + level);
  level++;

    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    console.log("Asta e " + randomChosenColour);
    $("." + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

$(".btn").click(function(){
    
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);

    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  });

  function playSound(name) {
    var audio = new Audio('./sounds/' + name + '.mp3');
    audio.play();
  }

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}

function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("success " + userClickedPattern);
    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  } else {
    console.log("wrong " + userClickedPattern);
    $("body").addClass("game-over");
    playSound("wrong")
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
   
      startOver();
   
  }
}

function startOver() {
  $("#level-title").text("Press A Key to Start ");
  level = 0;
  started = false;
  gamePattern = [];
}



