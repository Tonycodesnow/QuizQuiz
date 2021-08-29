var startQuiz = document.getElementById("start")
var question = document.querySelector("#question");
var scoreText = document.querySelector("#scorelink");
var scorePoints = 100
var maxQuestions = 5
var acceptAnswers = true
var currentQuestioon = 0
var score = 0
var userInput = []

var quizEl

var timerEl = document.querySelector("#timer");
// timer variables
var counter = 0
// var timer = 
var timeLeft = 0
var timePenalty = -10

// questions section
var questions = [{
    question: 'Which of the following is NOT an advantage of Moment.js?',
    choice: ['Parsing dates is easier.', 'Setting timers is easier', 'Formatting dates is easier.', 'Manipulating dates (adding or subtracting days) is easier.'],
    answer: 1
},
{
    question: 'What is (9 x 10)?',
    choice: ['19', '21', '90', '43'],
    answer: 2
},
{
    question: 'How often does the moon orbit the earth?',
    choice: ['30 days', 'Every 24 hours', 'No orbit the Earth is flat', '27 days'],
    answer: 3
    
},
{
    question: 'How many languages are written from right to Left?',
    choice: ['12', '15', '51', 'I dont understand this question.'],
    answer: 0
},
{
    question: 'How often does a person touch thier face every hour?',
    choice: ['3', '7', '10', '16'],
    answer: 3
},
];

startQuiz.addEventListener('click', () => {
    hideIntro();
    startGame();
    countdown();
});

function hideIntro() {
    var x = document.getElementById("container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    console.log("hideIntro")
}

function startGame () {

}


function nextQuestion() {
                                    
}


function countdown() {
    timeLeft = 75;

    var timeInterval = setInterval(function(){

        if (timeLeft > 1) {

            timerEl.textContent = "" + timeLeft;

            timeLeft--;

        } else {

            timerEl.textContent = '';

            window.alert("Times Up")
            window.location.href = "scores.html";
        }
    }, 1000);
}

var checkAnswer = function(event) {

}
// functions for each questions
// global variable of 60 sec

// questionChoices.addEventListener("click,questionDisplay")

addEventListener
countdown();