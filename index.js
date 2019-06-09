/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
let hr = parseInt(time, 10)
if (hr < 12) return "Good Morning"
if (hr >= 12 && hr < 17) return "Good Afternoon"
if (hr >= 17) return "Good Evening"
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById("greeting").innerText = message;
}
