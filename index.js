/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString){
  let time_array = timeString.split(':');
  if (time_array[0] < 12) {
    return "Good Morning";
  } else if (time_array[0] >= 12 && time_array[0] <= 17) {
    return "Good Afternoon";
  } else if (time_array[0] > 17) {
    return "Good Evening" };

};

function displayMessage(string) {

  let node = document.querySelector('#greeting');

  node.innerText = string;

}
