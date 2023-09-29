var timeEl = document.querySelector(".time");

var secondsLeft = 20;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "There are " + secondsLeft + " seconds left!";
    
    if(secondsLeft === 0){
      clearInterval(timerInterval);

      sendMessage()
    }

  }, 1000)
}

function sendMessage() {
  timeEl.textContent = "Out of time! Play again."
}









/*function playGame()





var startButton = document.querySelector("#theme-switcher");


startButton.addEventListener("click", function() {




    
}
var secondsLeft = 20;

function setTime() {
    var timerInterval = setInterval(function() {
      
      secondsLeft--;
     
      timeEl.textContent = ("You have " + secondsLeft + "left!");
  
      if(secondsLeft === 0) {
        
        clearInterval(timerInterval);
        
        sendMessage();
      }
      
    }, 1000);
  }

  setTime() */