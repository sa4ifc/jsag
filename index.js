var database = firebase.database();

function writeNewPost() {
    // A post entry.
    var postData = {
      body: $('#enter').val(),
    };
    firebase.database().ref().child('posts/'+$('#type').val()).push(postData).key;
    // Get a key for a new Post.
    return  window.location.reload();

  }
  $('#add').on('submit',function(e){
    e.preventDefault();
    writeNewPost()
  })
  //writeNewPost()

 