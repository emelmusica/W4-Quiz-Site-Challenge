// Print and display high scores
function printHighscores() {

  // Retrieve high scores or create an empty array if none exists
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  // Sort high scores from high to low
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  // Get the element for displaying the high scores
  var highscoresList = document.getElementById("highscores");
  // Clear the previous high scores
  highscoresList.innerHTML = "";

  // display each score
  highscores.forEach(function(score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    highscoresList.appendChild(liTag);
  });
}

// clear high scores
function clearHighscores() {
  // Remove high scores from storage
  localStorage.removeItem("highscores");

  // display high scores
  var highscoresList = document.getElementById("highscores");

  // Clear high scores
  highscoresList.innerHTML = "";
}

// clear button element
var clearButton = document.getElementById("clear");

// Call High Scores
clearButton.addEventListener("click", clearHighscores);

// Call the printHighscores function 
printHighscores();
