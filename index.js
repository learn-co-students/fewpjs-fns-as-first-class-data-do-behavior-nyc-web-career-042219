const message = document.querySelector('#greeting');

/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hour = parseInt(timeString.split(':')[0]);
  let result = ''
  if(hour < 12) {
    result = 'Good Morning';
  }else if(hour >= 12 && hour < 17) {
    result = 'Good Afternoon';
  }else if (hour >= 17) {
    result = 'Good Evening';
  };
  return result;
};

/* Write your implementation of displayMessage() */

function displayMessage(greeting) {
  message.innerText = greeting;
};