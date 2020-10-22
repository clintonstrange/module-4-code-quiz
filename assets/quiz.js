var buttonEl = document.querySelector("#start-quiz");
var answerContainer = document.querySelector(".choices-container");
var currentQuestion = 0;
var quizWrapper = document.querySelector(".quiz-wrapper");
var timerEl = document.getElementById("countdown");
var message = "Times Up!";
var words = message.split(" ");
var buttonIdEl = 0;
var scoreTracker = 0;
var choicesContainerEl = document.querySelector("#choices-container");
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

var countdown = function () {
  var timeLeft = 30;
  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft;
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(timeInterval);
      timerEl.textContent = message;
    }
  }, 1000);
};

function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function () {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}

function quizTaskHandler(event) {
  // var startButton = document.getElementById("start-quiz");
  // startButton.remove();
  countdown();

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

// when user clicks Start Quiz
//  then 1st question replaces Quiz Header
//  and multiple answers appear
//  and timer appears in top right corner
//  and timer begins counting down
// when wrong answer is clicked
// then wrong answer appears
// and time is subtracted from timer
// when right answer is clicked
// then correct appears
// and next question and answer choices appear
// Game is over when time expires
// or all questions have been completed
// when game is over
// then your high score is saved in _____ storage
// and you can submit your initials to high score

//  var object = {
//     question: "Question Text?",
//     answers: ["A1", "A2", "A3", "A4",]
//     right answer: "",
// }

// var array = [1, 2, 3]
//INDEXING!!!!!!!

// array of objects

// use event listener for event.target
// use matches() to determine what answer is selected?

// highScoreObj {
// name: ,
// score: ,
//}

var choiceButtonHandler = function (event) {
  console.log(event.target);
  if (event.target.matches(".choice-button")) {
    var choiceId = event.target.value;
    console.log(event.target.value, "value");
    if (choiceId === questionBank[currentQuestion].rightAnswer) {
      scoreTracker = scoreTracker + 10;
      console.log(scoreTracker);
      var correctAlert = document.createElement("p");
      correctAlert.className = "alert";
      correctAlert.textContent = "CORRECT!";
      quizWrapper.appendChild(correctAlert);
      currentQuestion++;
      quizTaskHandler();
    } else {
      scoreTracker = scoreTracker - 5;
      console.log(scoreTracker);
      var incorrectAlert = document.createElement("p");
      incorrectAlert.className = "alert";
      incorrectAlert.textContent = "Sorry, that is incorrect";
      quizWrapper.appendChild(incorrectAlert);
      currentQuestion++;
      quizTaskHandler();
    }
  }
};

buttonEl.addEventListener("click", quizTaskHandler);
choicesContainerEl.addEventListener("click", choiceButtonHandler);
