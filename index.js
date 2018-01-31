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


function sayHiToGrandma(hello) {
  if ('hello'.toLowerCase() === 'hello') {
    return "I can't hear you!"
  } else if ('HELLO'.toUpperCase() === 'HELLO') {
    return "YES INDEED!"
  } else {
    return "I love you, Grandma."
  }
}
