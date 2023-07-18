var codeQuiz = [
    {
        question: 'Which of the following is not a comparison operator?', 
        a: '===',
        b: '!<',
        c: '<=',
        d: '>=',
        answer: 'b'
    }, 
    // Other quiz questions...
];

var background = document.querySelector("body");
var startBtn = document.querySelector("#start-btn");
var quizEl = document.querySelector(".quiz-container");
var endEl = document.querySelector(".end");
var scoreEl = document.querySelector(".score");
var questionCounter = 0;
var currentScore = 99;
var highScores = [];

// Starts the score counter upon quiz start
var scoreCounter = function() {
    scoreEl.textContent = "Current score: 100";

    var scoreInterval = setInterval(function() {
        if (currentScore > 0 && questionCounter < codeQuiz.length) {
            scoreEl.textContent = "Current score: " + currentScore;
            currentScore--;
        } else {
            clearInterval(scoreInterval);
            endQuiz();
        }
    }, 1000);
};

var createQuiz = function() {
    document.querySelector("#instructions").remove();
    quizEl.classList.remove("hide");

    nextQues(questionCounter);
    scoreCounter();
};

// Iterates through questions and answers
var nextQues = function(index) {
    // ...
};

var checkAnswer = function(event) {
    // ...
};

var endQuiz = function() {
    // ...
};

var saveScore = function() {
    event.preventDefault();

    var playerName = document.querySelector("input[name='player-name']").value;

    if (!playerName) {
        alert("Please enter your name!");
    } else {
        var scoreObj = {
            name: playerName,
            score: currentScore
        };

        highScores.push(scoreObj);
        document.querySelector("#score-form").reset();
        localStorage.setItem("scores", JSON.stringify(highScores));
        document.location.href = "highscore.html";
    }
};

var loadScores = function() { 
    // ...
};

loadScores();
startBtn.addEventListener("click", createQuiz);
