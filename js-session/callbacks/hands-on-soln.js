function timer(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

function timeUp() {
  console.log("Time's up!");
}

// Start a 5-second timer
timer(5, timeUp);
