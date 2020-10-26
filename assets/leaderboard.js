var clearScoresButtonEl = document.querySelector("#clear-scores");
var clearScoresList = document.getElementById("#user-info");

var printHighScores = function () {
  var userHighScores = JSON.parse(localStorage.getItem("highscores")) || [];

  userHighScores.sort(function (a, b) {
    return b.score - a.score;
  });

  userHighScores.forEach(function (score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.user + " - " + score.score;
    var olEl = document.getElementById("#user-info");
    olEl.appendChild(liTag);
  });
};

printHighScores();

var clearScoresHandler = function (event) {
  window.localStorage.removeItem("highscores");
  window.location.reload();
};

clearScoresButtonEl.addEventListener("click", clearScoresHandler);
