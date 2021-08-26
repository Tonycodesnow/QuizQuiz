var timer = document.getElementById("timer")
var highScr = document.getElementById("highscorelink")
var intro = document.getElementById("intro-section")
var gameSec = document.getElementById("game-section")

var questions = [
    {
        question: 'Which of the following is NOT an advantage of Moment.js?',
        choice1: 'Parsing dates is easier.',
        choice2: 'Setting timers is easier',
        choice3: 'Formatting dates is easier.',
        choice4: 'Manipulating dates (adding or subtracting days) is easier.',
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


var timer = function () {
// start the timer
    var timeLeft = 100;

    var timeInterval = setInterval(function() {
       if (timeLeft > 1) {

        timerEl.textContent = timeLeft;

        timeLeft--;
       } else if (timeLeft === 1) {

        timerEl.textContent = timeLeft;
        timeLeft--;
       } else {

        timerEl.textContent = '';

        clearInterval(timeInterval);

       }
    }, 1000);
}
// functions for each questions
var beginQuiz = function() {

}
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




var startBtn = document.getElementById("startbtn")

startBtn.addEventListener ("click", startGame)



      
    16 times 10 times 5