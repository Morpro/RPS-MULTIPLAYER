
  var config = {
    apiKey: "AIzaSyCMoBTzmbHm_6U9Wr2FqgmY_o3xOEINdeM",
    authDomain: "test-d8ca3.firebaseapp.com",
    databaseURL: "https://test-d8ca3.firebaseio.com",
    projectId: "test-d8ca3",
    storageBucket: "test-d8ca3.appspot.com",
    messagingSenderId: "50634986613"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


  var playerONE = "";
  var playerTWO = "";


  var p1Wins = 0;
  p1Losses = 0;
  p2Wins = 0;
  p2Losses = 0;

  var toggleForm = function(){
    $("form").hide();
    var greeting = "Hi " + playerONE + "! You are Player One"
    $("#form").text(greeting);
  };
  
  $("form").eq(0).submit(function(event){
    event.preventDefault();
    var userInput = $("#name-input").val();
    playerONE = userInput;
    console.log(playerONE);
    console.log(userInput);

    $("#name-input").val("");
 
    toggleForm();
 
    database.ref('players').child('player1').update({
      name: playerONE, 
      wins: p1Wins, 
      losses: p1Losses})
  });


  database.ref('players/').child('player1').on("value", function(snapshot){
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().wins);
    console.log(snapshot.val().losses);

    playerONE = (snapshot.val().name);
    wins = (snapshot.val().wins);
    losses = (snapshot.val().losses);
    $("#p1").text(playerONE);
    $("#p1-box").append("<div>" + "Wins:" + wins + " Losses:" + losses + "</div>");
  });

 
  var newUser = function() {
    $("form").submit(function(event){
      event.preventDefault();
      var userInput = $("#name-input").val();
      playerTWO = userInput;
      $("#name-input").val("");
      $("form").hide();
      var greeting = "Hi " + playerTWO + "! You are Player 2"
      $("#form").text(greeting);
      database.ref('players').child('player2').update({
        name: playerTWO, 
        wins: p2Wins, 
        losses: p2Losses})
    });
  };


  function updatePlayerTWO () {
    if (playerOne !== null) {
      newUser();
    }
    };
