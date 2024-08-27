//the function inside the Promise is called executor function
// The executor function takes two arguments:
// 1. resolve: A function that you call when the asynchronous operation completes successfully. 
//      It accepts one argument, which will be passed to the .then() method of the promise.
// 2. reject: A function that you call when the asynchronous operation fails. 
//      It accepts one argument, which will be passed to the .catch() method of the promise.

let promise = new Promise(function(resolve, reject){
  // executor (the producing code)
})


