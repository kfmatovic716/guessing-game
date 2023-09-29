var startButton = document.querySelector("#theme-switcher");


startButton.addEventListener("click", function() {




    
}

function setTime() {
    // Sets interval in variable
    //The setInterval() method takes a function as its first argument
    var timerInterval = setInterval(function() {
      //The function is the action that we want to be evaluated at each interval. This function prints a message at each interval
      secondsLeft--;
      // secondsLeft = secondsLeft - 1;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        //When the countdown reaches zero, we want the action to stop. The clearInterval() method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
      //The second argument that the setInterval() method takes is the interval. Because intervals use milliseconds, we use 1000 to create an interval of one second
    }, 1000);
  }