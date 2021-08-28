var question = document.querySelector("#question");
var timer = document.querySelector("#timer");
var scoreText = document.querySelector("#scorelink");
var choices = Array.from(document.querySelectorAll(".option-text"));
var scorePoints = 100
var maxQuestions =  5

var currentQuestion = {}
var acceptAnswers = true
var score = 0
var questionCounter = 0
var availableQuestions = []

var questions = [
    {
        question: 'Which of the following is NOT an advantage of Moment.js?',
        choice: ['Parsing dates is easier.', 'Setting timers is easier', 'Formatting dates is easier.', 'Manipulating dates (adding or subtracting days) is easier.',]
        answer: 'Setting timers is easier',
    },
    {
        question: 'What is (9 x 10)?',
        choice1: '19',
        choice2: '21',
        choice3: '90',
        choice4: '43',
        answer: '90',
    },  
    {
        question: 'How often does the moon orbit the earth?',
        choice1: '30 days',
        choice2: 'Every 24 hours',
        choice3: 'No orbit the Earth is flat',
        choice4: '27 days',
        answer: '27 days',
    
    },
    {
        question: 'How many languages are written from right to Left?',
        choice1: '12',
        choice2: '15',
        choice3: '51',
        choice4: 'I dont understand this question.',
        answer: '12',
    },
    {
        question: 'How often does a person touch thier face every hour?',
        choice1: '3',
        choice2: '7',
        choice3: '10',
        choice4: '16',
        answer: '16',
    },
];

var startQuiz = function() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score)

     
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
};


startQuiz()
// var timer = function () {
// // start the timer
//     var timeLeft = 100;

//     var timeInterval = setInterval(function() {
//        if (timeLeft > 1) {

//         timerEl.textContent = timeLeft;

//         timeLeft--;
//        } else if (timeLeft === 1) {

//         timerEl.textContent = timeLeft;
//         timeLeft--;
//        } else {

//         timerEl.textContent = '';

//         clearInterval(timeInterval);

//        }
//     }, 1000);
// }
// functions for each questions
// global variable of 60 sec

// global versus variable

// keep a counter of what question we're on

// array of all questions (an array of obbjects)

// The objects within the array called quesions

// when user clicks an answer it increase counter by one and resuns show-answer

// use the counter to show the specific question we're on

// some if statements to see we're in the end

// game over screen

// type in initials and show timer

// local storage to save the high score

// seperate page to high score