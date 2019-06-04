/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {

  var hours = time.split(':')[0];
  var hoursInt = parseInt(hours)
  console.log(hours)
  if (hoursInt < '12') {
    return "Good Morning";
  }
  else if (hoursInt > '12' && hours <= '17') {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */



function displayMessage(string) {

  let greeting = document.querySelector('#greeting');
  
  greeting.innerText = string

}