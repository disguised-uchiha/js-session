function delayedExecution(fn, delay, message) {
  console.log('delayedExecution function called')
  return new Promise((resolve) => {
    setTimeout(() => {
      fn(message);
      resolve();
    }, delay);
  });
}

// Example usage
function printMessage(msg) {
  console.log(msg);
}

delayedExecution(printMessage, 2000, "Hello, World!")
  .then(() => {
    console.log("Message printed after delay");
  });
