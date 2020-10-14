
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBpM9Gk7fMMbxzXoqAsFZLb9eHg1eRPwWg",
    authDomain: "posts-47acf.firebaseapp.com",
    databaseURL: "https://posts-47acf.firebaseio.com",
    projectId: "posts-47acf",
    storageBucket: "posts-47acf.appspot.com",
    messagingSenderId: "485217301114",
    appId: "1:485217301114:web:fc5922bac374f873b101c3",
    measurementId: "G-NVDSD9KTT8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// get data.js
firebase.database().ref('posts/sad').once('value').then(function(snapshot) {
  var username = snapshot.val();
    snapshot.forEach(element => {
    $("#data").append(` <div id="post1"><div id="title"> ${element.val().title}</div> <p> ${element.val().body} </p><a href="${element.val().link}" class="btn btn-primary" style="    width: 99%;"> ${element.val().linktitle}</a></div>`)
        
    });
    // ...
  });
  
  
  // index.js

  var database = firebase.database();

function writeNewPost() {
    // A post entry.
    var postData = {
      title: $('#enter1').val(),
      body: $('#enter').val(),
      link: $('#link').val(),
      linktitle: $('#linktitle').val(),
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
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  
 
      
  function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);
    
    // Set AdMobAds options:
    admob.setOptions({
      publisherId:          "pub-2059864486363002",  // Required
      interstitialAdId:     "ca-app-pub-2059864486363002~9075556466",  // Optional
      tappxIdiOS:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
      tappxIdAndroid:       "ca-app-pub-2059864486363002/5136311456",        // Optional
      tappxShare:           0.5                                        // Optional
    });
    
    // Start showing banners (atomatic when autoShowBanner is set to true)
    admob.createBannerView();
    
    // Request interstitial (will present automatically when autoShowInterstitial is set to true)
    admob.requestInterstitialAd();
  }
  
  document.addEventListener("deviceready", onDeviceReady, false);

  function myFunction() {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 25072004) {
      text = "رمز الدخول خاطئ";
    } else {
      window.location.href = "index.html";
    }
    document.getElementById("demo").innerHTML = text;
  }
