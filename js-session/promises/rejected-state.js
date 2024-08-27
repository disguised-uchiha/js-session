const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: Something went wrong!");
  }, 2000);
});

promise.catch((error) => {
  console.log(error); // Outputs: "Error: Something went wrong!" after 2 seconds
});

console.log(promise); // Outputs: Promise { <pending> } (initially), and then Promise { <rejected>: "Error: Something went wrong!" } after 2 seconds
