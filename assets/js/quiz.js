var question = document.querySelector("#question");
var timer = document.querySelector("#timer");
var scoreText = document.querySelector("#scorelink");
var choices = Array.from(document.querySelectorAll(".option-text"));
var scorePoints = 50
var maxQuestions =  5

var currentQuestion = {}
var acceptAnswers = true
var score = 0
var Counter = 0
var userInput = []

var questions = [
    {
        question: 'Which of the following is NOT an advantage of Moment.js?',
        choice: ['Parsing dates is easier.', 'Setting timers is easier', 'Formatting dates is easier.', 'Manipulating dates (adding or subtracting days) is easier.',]
        answer: 'Setting timers is easier',
    },
    {
        question: 'What is (9 x 10)?',
        choice: ['19','21', '90', '43',]
        answer: '90',
    },  
    {
        question: 'How often does the moon orbit the earth?',
        choice: ['30 days', 'Every 24 hours', 'No orbit the Earth is flat', '27 days',]
        answer: '27 days
    },
    {
        question: 'How many languages are written from right to Left?',
        choice: ['12','15', '51', 'I dont understand this question.',]
        answer: '12',
    },
    {
        question: 'How often does a person touch thier face every hour?',
        choice: ['3', '7', '10', '16',]
        answer: '16',
    },
];

function startQuiz() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score)  
    }

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
};

function timer () {
    var timeInterval = setInterval(function() {
          if (questionIndex > 4 && timeLeft > 0){
        timerEl.textContent = timeLeft
      }   else if (timeLeft > 0 && questionIndex < 4){
        timeLeft--;
        timerEl.textContent = timeLeft;
      }   else if (timeLeft < 0 && questionIndex < 4 ){
        clearInterval(timeInterval);
        // displayMessage = "Your time is up!"
      }
    },1000);
  }
// functions for each questions
// global variable of 60 sec
startBtn.addEventListener("click", startQuiz);
questionChoices.addEventListener("click,questionDisplay")