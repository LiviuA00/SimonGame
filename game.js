var userClickedPattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var name;
function nextSequence() {
    var randomNumber = Math.floor(Math.random()*3) + 1;

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







