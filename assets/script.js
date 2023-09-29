var timeEl = document.querySelector(".time");

var secondsLeft = 60;

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




function playGame() {
  
  gameStats = [0, 0]
  wordOptions = ["Dog", "Fish", "Cheetah"]

  var randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

  var answerArray = [];
  for (i = 0; i < randomWord.length; i++) {
    answerArray[i]= "_";
  }

var remainingLetters = randomWord.length;

console.log(randomWord.length)
console.log(answerArray)
}


playGame()





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