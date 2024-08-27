function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
  const name = prompt('Please enter your name.');
  callback(name);
}

// Passing greet function as a callback
processUserInput(greet);

