const promise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  console.log("Promise is pending...");
  
  // After 2 seconds, the promise will be resolved
  setTimeout(() => {
    resolve("Operation successful!");
  }, 2000);
});

console.log(promise); // Promise { <pending> }
