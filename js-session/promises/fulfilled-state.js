const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 2000);
});

promise.then((result) => {
  console.log(result); // Outputs: "Success!" after 2 seconds
});

console.log(promise); // Outputs: Promise { <pending> } (initially), and then Promise { <fulfilled>: "Success!" } after 2 seconds
