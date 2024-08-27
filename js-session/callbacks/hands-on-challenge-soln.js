function timer(seconds, callback) {
  let counter = 5;
  setInterval(()=>callback(counter--), seconds * 1000);
}

function timeUp(count) {
  if(count < 1){
  console.log("Time's up!");
  }else {
    console.log(count);
  }
}

timer(1, timeUp);
