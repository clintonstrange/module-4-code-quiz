var userInfoSpan = document.querySelector("#user-info");
var clearScoresButtonEl = document.querySelector("#clear-scores");

var leaderboard = function () {
  var getInitials = localStorage.getItem("user");
  var getScore = localStorage.getItem("score");

  userInfoSpan.textContent = getInitials + " - " + getScore;
};

leaderboard();

var clearScoresHandler = function (event) {
  userInfoSpan.innerHTML = "<span id='user-info'></span>";
};

clearScoresButtonEl.addEventListener("click", clearScoresHandler);
