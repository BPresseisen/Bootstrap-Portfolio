//initialize database
  var config = {
    apiKey: "AIzaSyDftKADrmboEtYR9xR3qROJ7Wgxp5fhJOc",
    authDomain: "contactspreciseinsights.firebaseapp.com",
    databaseURL: "https://contactspreciseinsights.firebaseio.com",
    projectId: "contactspreciseinsights",
    storageBucket: "contactspreciseinsights.appspot.com",
    messagingSenderId: "793716305525"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  $(document).ready(function () {
    
    $(".btn-success").on("click", (event) => {
    event.preventDefault();
    
    var name = $("#exampleInputName").val();
    var email = $("#exampleInputEmail1").val();
    var message = $("#exampleFormControlTextarea1").val();
    var optOut = $("#exampleCheck1").val();
    
    // var nextTrain is a calculated field
    
    console.log("name is: " + name);
    console.log("email is: " + email);
    console.log("message: " + message);
    console.log("opt out is: ") + optOut;

    
    database.ref().push({
    
        name: name,
        email: email,
        message: message,
        optOut: optOut,
    
        });
    
    resetAllValues();
    });
    
});

function resetAllValues() {

    $('.fetch_results').val('');
  }





