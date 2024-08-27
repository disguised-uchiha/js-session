function getUserData(userId, callback) {
  setTimeout(() => {
      console.log('User data fetched');
      callback();
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
      console.log('Posts fetched');
      callback();
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
      console.log('Comments fetched');
      callback();
  }, 1000);
}

getUserData(1, function() {
  getPosts(1, function() {
      getComments(1, function() {
          console.log('Done!');
      });
  });
});
