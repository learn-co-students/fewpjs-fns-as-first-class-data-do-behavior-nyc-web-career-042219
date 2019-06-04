/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  let hour = parseInt(time.split(':')[0]);
  let res;
  if (hour < 12) {
    res = 'Good Morning';
  } else if (hour >= 12 && hour < 17) {
    res = 'Good Afternoon';
  } else {
    res = 'Good Evening';
  }
  return displayMessage(res);
}

function displayMessage(message) {
  return document.getElementById('greeting').innerText = message
}