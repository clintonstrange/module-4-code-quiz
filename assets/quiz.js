var buttonEl = document.querySelector("#start-quiz");
var answerContainer = document.querySelector(".choices-container");
var questionBank = [
  {
    question: "What does DOM stand for?",
    answers: [
      {
        a: "Document Object Model",
        b: "Document Office Module",
        c: "Developmental Operation Model",
        d: "Document Operation Medium",
      },
    ],
    rightAnswer: "Document Object Model",
  },

  {
    question: "How do you save information to your local storage?",
    answers: [
      {
        a: "saveLocalStorage",
        b: "getLocalStorage",
        c: "setLocalStorage",
        d: "saveAsLocalStorage",
      },
    ],
    rightAnswer: "setLocalStorage",
  },

  {
    question: "What does CSS stand for?",
    answers: [
      {
        a: "Current Styling Service",
        b: "Cascading Style Sheets",
        c: "Class Saving Setup",
        d: "Cascading Setup Style",
      },
    ],
    rightAnswer: "Cascading Style Sheets",
  },

  {
    question: "What does HTML stand for?",
    answers: [
      {
        a: "Hyper Terminal Module Language",
        b: "Header Type Markup Level",
        c: "Header Text Memory Level",
        d: "HyperText Markup Language",
      },
    ],
    rightAnswer: "HyperText Markup Language",
  },

  {
    question: "What is the prefix for a CSS ID?",
    answers: [{ a: "#", b: ".", c: "<", d: ":" }],
    rightAnswer: "#",
  },
];

function quizTaskHandler(event) {
  var instruct = document.getElementById("instructions");
  instruct.remove();
  var startButton = document.getElementById("start-quiz");
  startButton.remove();

  for (var i = 0; i < questionBank.length; ++i) {
    var newQuestion = document.querySelector("h2[class='quiz-title']");
    newQuestion.textContent = JSON.stringify(questionBank[i].question);
    for (var j = 0; j < 4; ++j) {
      var createButtons = document.createElement("button");
      createButtons.className = "btn";
      createButtons.textContent = JSON.stringify(questionBank[i].answers[j]);
      answerContainer.appendChild(createButtons);
    }
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

buttonEl.addEventListener("click", quizTaskHandler);
