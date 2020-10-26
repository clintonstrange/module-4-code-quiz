var clearScoresButtonEl = document.querySelector("#clear-scores");

var printHighScores = function () {
  debugger;
  var userHighScores = JSON.parse(localStorage.getItem("highscores")) || [];
  // for (var i = 0; i < highScores[i].length; i++) {
  //   var postScore = document.createElement("li");
  //   postScore.textContent =
  //     getUserScore[i].user + " - " + getUserScore[i].score;
  //   userInfoSpan.appendChild(postScore);
  // }

  userHighScores.sort(function (a, b) {
    return b.score - a.score;
  });

  userHighScores.forEach(function (score) {
    var liTag = document.createElement("Li");
    liTag.textContent = userHighScores.initials + " - " + userHighScores.score;
    var olEl = document.querySelector("#user-info");
    olEl.appendChild(liTag);
  });
};

printHighScores();

var clearScoresHandler = function (event) {
  window.localStorage.removeItem("highscores");
  userInfoSpan.innerHTML = "<span id='user-info'></span>";
};

clearScoresButtonEl.addEventListener("click", clearScoresHandler);
