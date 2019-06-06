/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let message = ""
  time = timeString.substring(0,2)
  if (time < 12) {
    message = "Good Morning"
  } else if (time > 12 && time < 17) {
    message = "Good Afternoon"
  } else if (time > 17 && time < 25) {
    message = "Good Evening"
  } else {
    message = "Please enter a time"
  }
  return message
}

/* Write your implementation of displayMessage() */
function displayMessage(str) {
  let greeter = document.getElementById('greeting')
  greeter.innerText = str
}
