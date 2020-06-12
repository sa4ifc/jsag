
   firebase.database().ref('posts/sad').once('value').then(function(snapshot) {
    var username = snapshot.val();
    snapshot.forEach(element => {
    $("#data").append(`<div id="post1"> ${element.val().body}</div>`)
        
    });
    // ...
  });
  