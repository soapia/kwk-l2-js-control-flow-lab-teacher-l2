// Write your code in this file!
function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    'This one is on me!'
  } else if (2000 < ride <= 2500) {
    'I will gladly take your thirty bucks.'
  } else if (ride > 2500) {
    'No can do.'
  } else {
    'eek.'
  }
}

console.log(scuberGreetingForFeet(23))