function shout(hello) {
  return 'hello'.toUpperCase()
}

function whisper(hello) {
  return 'hello'.toLowerCase()
}

function logShout(hello) {

  console.log('hello'.toUpperCase())
}

function logWhisper(hello) {
    console.log('hello'.toLowerCase())
}

var lowercase = 'hello!'
var uppercase = "HELLO!"
function sayHiToGrandma(hello) {
  if (lowercase.toLowerCase() === lowercase) {
    return "YES INDEED!"
  } else if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!"
  } else {
    return "I love you, Grandma."
  }
}
