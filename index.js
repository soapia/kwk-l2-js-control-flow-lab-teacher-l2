// Write your code in this file!
function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!'
  } else if (2000 < ride && ride < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (ride >= 2500) {
    return 'No can do.'
  } else {
    return 'eek.'
  }
}

function ternaryCheckCity(city) {
  if (city == "NYC") {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip) {
  if (tip == "generous") {
    return 'Thank you so much.'
  } else if (tip == "not as generous") {
    return 
  }
}

console.log(scuberGreetingForFeet(2501))