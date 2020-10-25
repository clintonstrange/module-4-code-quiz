var userInfoSpan = document.querySelector("#user-info");
var clearScoresButtonEl = document.querySelector("#clear-scores");

var leaderboard = function () {
  var getInitials = localStorage.getItem("user");
  var getScore = localStorage.getItem("score");
  var postScore = document.createElement("li");
  postScore.textContent = getInitials + " - " + getScore;
  userInfoSpan.appendChild(postScore);
};

leaderboard();

var clearScoresHandler = function (event) {
  userInfoSpan.innerHTML = "<span id='user-info'></span>";
};

clearScoresButtonEl.addEventListener("click", clearScoresHandler);
