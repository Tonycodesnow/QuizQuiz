var startQuiz = document.getElementById("start");
var scoreText = document.querySelector("#scorelink");
var scoreBtn = document.getElementById("scorebtn");
var acceptAnswers = true
var questionIndex = 0
var score = JSON.parse(localStorage.getItem("quiz-scores"))||[];

var endPage = document.getElementById('endpage')
//  cerated HTML elements  
var quizEl = document.querySelector('.quiz');
// var questionEl = document.createElement('h2');
var timerEl = document.querySelector("#timer");
// timer variables

var counter = 0
var timeInterval;
var timeLeft = 0
var timePenalty = 10

// questions section
var questions = [{
    question: 'Which of the following is NOT an advantage of Moment.js?',
    choice: ['Parsing dates is easier.', 'Setting timers is easier', 'Formatting dates is easier.', 'Manipulating dates (adding or subtracting days) is easier.'],
    answer: 'Parsing dates is easier.'
},
{
    question: 'What is (9 x 10)?',
    choice: ['19', '21', '90', '43'],
    answer: '90'
},
{
    question: 'How often does the moon orbit the earth?',
    choice: ['30 days', 'Every 24 hours', 'No orbit the Earth is flat', '27 days'],
    answer: '27 days'
    
},
{
    question: 'How many languages are written from right to Left?',
    choice: ['12', '15', '51', 'I dont understand this question.'],
    answer: '12'
},
{
    question: 'How often does a person touch thier face every hour?',
    choice: ['3', '7', '10', '16'],
    answer: '10'
},
];

// swhat happens when the button starts
startQuiz.addEventListener('click', () => {
    hideIntro();
    startGame();
    countdown();
});

// hiding the landing page section
function hideIntro() {
    var x = document.getElementById("container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// showing the hidden questions section
function startGame() {
    quizEl.setAttribute('style', 'display: block');
    
    nextQuestion();
}

// showing following questions section
function nextQuestion() {
    // display question
    var current = questions[questionIndex];
    var question = document.querySelector("#question");
    
    var choice1 = document.getElementById('choice1');
    var choice2 = document.getElementById('choice2');
    var choice3 = document.getElementById('choice3');
    var choice4 = document.getElementById('choice4');
    
    // adding each item in the array of choice to each of the choices 
    question.textContent = current.question;
    
    choice1.textContent = current.choice[0]
    choice2.textContent = current.choice[1]
    choice3.textContent = current.choice[2]
    choice4.textContent = current.choice[3]
    
    document.querySelectorAll('.option').forEach(function (choiceEl) {
        choiceEl.addEventListener('click', checkChoice)
    })
}

function checkChoice (event) {
    var choice; 
    if(event.target.children.length=== 0){
        choice = event.target.textContent
    } else {
        choice = event.target.children[0].textContent
    }
    // var choice = event.target.children[0].textContent
    var current = questions[questionIndex];
    console.log(choice)
    if (choice === current.answer) {
        timeLeft -= timePenalty
        // timeLeft= timeLeft - timePenalty 
        timerEl.textContent = "" + timeLeft;
    }
    questionIndex = questionIndex +1
    if (questionIndex < questions.length){
        nextQuestion()
    } else {
        scoreScreen()
    }
}

// countdown timer section
function countdown() {
    timeLeft = 75;
    
    var timeInterval = setInterval(function () {
        
        if (timeLeft > 1) {
            
            timerEl.textContent = "" + timeLeft;
            
            timeLeft--;
        } else {
            scoreScreen()
            
        }
    }, 1000);
}


// checking answer section 
var scoreScreen = function () {
    timerEl.textContent = '';
    
    endPage.removeAttribute("hidden")
    clearInterval(counter);
    // clearInterval(timeInterval);
}

// endPage.setAttribute('style', 'display: block');

var storage = function(event) {
    event.preventDefault()
    var userInput = document.getElementById('scoreInput').value
    var scores = {
        name: userInput,
        score: timeLeft
    }
    // pushing object into array for score tracking
    score.push(scores)
    localStorage.setItem("quiz-scores", JSON.stringify(score))
}

scoreBtn.addEventListener("click", storage)
function scorepage() {
    location.href = "scores.html"
}

countdown();