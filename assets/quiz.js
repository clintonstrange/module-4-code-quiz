var buttonEl = document.querySelector("#start-quiz");
var answerContainer = document.querySelector(".choices-container");
var alertContainer = document.querySelector("#alert-container");
var currentQuestion = 0;
var messageContainer = document.querySelector(".messages");
var quizWrapper = document.querySelector(".quiz-wrapper");
var timerEl = document.getElementById("countdown");
var message = "Times Up!";
var words = message.split(" ");
var buttonIdEl = 0;
var timeLeft = 60;
var highScoresEl = JSON.parse(localStorage.getItem("highscores")) || [];
var alertEl = document.querySelector(".alert");
var choicesContainerEl = document.querySelector("#choices-container");
var submitScoreContainerEl = document.querySelector("#submit-score-container");
var questionBank = [
  {
    question: "What does DOM stand for?",
    answers: [
      "Document Object Model",
      "Document Office Module",
      "Developmental Operation Model",
      "Document Operation Medium",
    ],
    rightAnswer: "Document Object Model",
  },

  {
    question: "How do you save information to your local storage?",
    answers: [
      "saveLocalStorage",
      "getLocalStorage",
      "setLocalStorage",
      "saveAsLocalStorage",
    ],
    rightAnswer: "setLocalStorage",
  },

  {
    question: "What does CSS stand for?",
    answers: [
      "Current Styling Service",
      "Cascading Style Sheets",
      "Class Saving Setup",
      "Cascading Setup Style",
    ],
    rightAnswer: "Cascading Style Sheets",
  },

  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Terminal Module Language",
      "Header Type Markup Level",
      "Header Text Memory Level",
      "HyperText Markup Language",
    ],
    rightAnswer: "HyperText Markup Language",
  },

  {
    question: "What is the prefix for a CSS ID?",
    answers: ["#", ".", "<", ":"],
    rightAnswer: "#",
  },
];
var highScoreObj = {
  initials: [],
  score: [],
};
var submitScoreEl = document.querySelector(".submit-score");
var timeInterval;

var countdown = function () {
  timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft;
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(timeInterval);
      timerEl.textContent = message;
      gameOver();
    }
  }, 1000);
};

var stopTime = function () {
  clearInterval(timeInterval);
};

function gameOver() {
  answerContainer.innerHTML = "";
  alertContainer.innerHTML = "";

  var highScore = document.querySelector(".quiz-title");
  var adjustedTimeLeft = timeLeft + 1;
  highScore.textContent =
    "All Done! Your final score is " + adjustedTimeLeft + "!";

  var enterInitials = document.createElement("input");
  enterInitials.className = "initial-input";
  enterInitials.setAttribute("name", "initials");
  enterInitials.setAttribute("placeholder", "Enter Initials");
  alertContainer.appendChild(enterInitials);

  var submitScore = document.createElement("button");
  submitScore.className = "btn submit-score";
  submitScore.setAttribute("type", "submit");
  submitScore.textContent = "Submit Score";
  submitScore.setAttribute(
    "onclick",
    "window.location.href = 'leaderboard.html';"
  );
  submitScoreContainerEl.appendChild(submitScore);
}

var highScoreHandler = function (event) {
  debugger;
  var initialInput = document.querySelector("input[name='initials']").value;

  if (!initialInput) {
    alert("You need to add your initials!");
    return false;
  } else {
    highScoreObject = {
      user: initialInput,
      score: timeLeft + 1,
    };
    highScoresEl.push(highScoreObject);
    localStorage.setItem("highscores", JSON.stringify(highScoresEl));
  }
};

function quizHandler() {
  if (currentQuestion > 4) {
    stopTime();
    gameOver();
  } else {
    answerContainer.innerHTML = "";

    var newQuestion = document.querySelector(".quiz-title");
    newQuestion.textContent = questionBank[currentQuestion].question;

    for (var i = 0; i < questionBank[currentQuestion].answers.length; ++i) {
      var createButtons = document.createElement("button");
      createButtons.className = "btn choice-button";
      createButtons.setAttribute("button-id", buttonIdEl);
      createButtons.setAttribute(
        "value",
        questionBank[currentQuestion].answers[i]
      );
      createButtons.textContent = questionBank[currentQuestion].answers[i];
      answerContainer.appendChild(createButtons);
      buttonIdEl++;
    }
  }
}

var choiceButtonHandler = function (event) {
  console.log(event.target);
  alertContainer.innerHTML = "";
  if (event.target.matches(".choice-button")) {
    var choiceId = event.target.value;
    console.log(event.target.value, "value");
    if (choiceId === questionBank[currentQuestion].rightAnswer) {
      var correctAlert = document.createElement("p");
      correctAlert.className = "alert";
      correctAlert.textContent = "CORRECT!";
      alertContainer.appendChild(correctAlert);
      currentQuestion++;
      quizHandler();
    } else {
      timeLeft = timeLeft - 5;
      var incorrectAlert = document.createElement("p");
      incorrectAlert.className = "alert";
      incorrectAlert.textContent = "Sorry, that is incorrect";
      alertContainer.appendChild(incorrectAlert);
      currentQuestion++;
      quizHandler();
    }
  }
};

function startQuizHandler(event) {
  countdown();
  var startButton = document.getElementById("start-quiz");
  startButton.remove();
  var instructions = document.getElementById("instructions");
  instructions.remove();
  quizHandler();
}

if (buttonEl !== null) {
  buttonEl.addEventListener("click", startQuizHandler);
  choicesContainerEl.addEventListener("click", choiceButtonHandler);
  submitScoreContainerEl.addEventListener("click", highScoreHandler);
}
