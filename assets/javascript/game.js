



//Create variable that holds all the options
  
//Create variable that holds wins and loses  and status  
   
    var wins = 0 ; 
    var losses = 0 ; 
    var numberGuessesSoFar= [];
    var numberLeft= 10;
    var computerChoices = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o"];


//This function is run whenever the user presses a key.
     document.onkeyup = function(event) {
        var userGuess = event.key;
        numberGuessesSoFar.push(userGuess);
     
//This is the computer guess/ and random choice in the array/

   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length + 1)];   
  
//  LOGIC - This is waht happens if you win or lose//

    for (var i = 0; i < computerChoices.length; i++);
     
    if (userGuess === computerGuess) {

      wins ++;
      // numberLeft = 9;
      // computerGuess.length = 0;
  
  } else {
    numberLeft--;
    if (numberLeft = 0) {
      losses++;
      numberLeft = 10;
    }
   

  var html = 
  "<p>Wins: " + wins + "</p>" + 
  "<p>Losses: " + losses + "</p>" + 
  "<p>Guesses Left: " + numberLeft + "</p>" + 
  "<p>Your Guesses so far: " + numberGuessSoFar + "</p>";

document.querySelector("#game").innerHTML = html;


};
  //   else if (numberLeft === 0) {
  
  //     losses++;
  //     numberLeft = 9;
  //     computerGuess.length = 0;
  // }
  
  //   else if (userGuess !== computerGuess) {
  
  //   numberLeft--;
  // }
  
  
  
