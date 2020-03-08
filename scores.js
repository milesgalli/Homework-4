  


  function printHighscores() {
   // collect scores from local storage or from empty array 

   var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

   // sort high scores in order 
   highscores.sort(function(a, b) {
     return b.score - a.score;
   });
   highscores.forEach(function(score) {

     // create list tag for each score 
     var liTag = document.createElement("li");
     liTag.textContent = score.initials + " - " + score.score;

     // display on in the high score page 
     var olEl = document.getElementById("highscores");
     olEl.appendChild(liTag);
   });
  }

  function clearHighscores() {
   window.localStorage.removeItem("highscores");
   window.location.reload();
  }
    document.getElementById("clear").onclick = clearHighscores;
 
  // run function when page loads
  printHighscores();