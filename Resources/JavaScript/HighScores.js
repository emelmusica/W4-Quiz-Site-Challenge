// Function to print and display high scores
function printHighscores() {
  // Retrieve high scores from local storage or create an empty array if none exists
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  // Sort high scores in descending order based on score
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  // Get the element for displaying the high scores
  var highscoresList = document.getElementById("highscores");
  // Clear the previous high scores
  highscoresList.innerHTML = "";

  // Iterate through the high scores and create list items to display each score
  highscores.forEach(function(score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    highscoresList.appendChild(liTag);
  });
}

// Function to clear high scores
function clearHighscores() {
  // Remove high scores from local storage
  localStorage.removeItem("highscores");

  // Get the element for displaying the high scores
  var highscoresList = document.getElementById("highscores");
  // Clear the displayed high scores
  highscoresList.innerHTML = "";
}

// Get the clear button element
var clearButton = document.getElementById("clear");
// Add click event listener to the clear button, calling the clearHighscores function
clearButton.addEventListener("click", clearHighscores);

// Call the printHighscores function to display the high scores
printHighscores();
