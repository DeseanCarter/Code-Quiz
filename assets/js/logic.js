// Global Variables

//Start Button Variable
var startButton = document.querySelector("#start");

//Start Screen Variable
var startScreen = document.querySelector("#start-screen");

//Questions Screen Variable - Question buttons div
var questionScreen = document.querySelector("#questions");

//Question Title Screen Variable
var questionTitle = document.querySelector("#question-title")

//Quiz Over Screen Variable
var quizOverScreen = document.querySelector("#end-screen");

// Answer Choices Variable
var answerChoices = document.querySelector("#choices");

//Final Score Screen Variable ????????
var finalScoreScreen = document.querySelector("#final-score");

//Counter Variable
var counterEl = document.querySelector("#time");

//High Score Variable
//var highScore = document.querySelector("#highscores");

//Initials Variable
var initialsLog = document.querySelector("#initials")

//Submit button Variable
var submit = document.querySelector("#submit");

//Start Time Variables
var secondsLeft = 75;
var timeInterval;

//Score
var score = 1;



//Questions Object
var questions = [
    { 
        title: "Commonly used data types DO NOT include:",
        choices: ["stings", "booleans", "alerts", "numbers"],
        answer: "alerts" 
    },
    
    {
        title: "The condition in an if / else statement is enclosed within _____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
    
        title: "Arrays in JavaScript can be used to store _____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    },
    {
    
         title: "A very useful tool used in development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
        answer: "console log",
    }
];



//Position of question asked.
var indexPos = 0;



//Checks to see if answer chosen is correct. Adds score via local sorage in real time. 
function checkAnswer(){
    console.log(this, questions[indexPos].answer);

    if(questions[indexPos].answer == this.value ){
        //correct
        alert("Correct");
        let score = parseInt(localStorage.getItem("score"))
        finalScoreScreen.textContent = score++
        localStorage.setItem("score", score);
    }else{
        //incorrect
        alert("wrong!!");
        secondsLeft = secondsLeft - 5;
        counterEl.textContent = secondsLeft;
    }
    //move on to the next question
    indexPos++;

    if(indexPos === questions.length){
        //end our game
        endQuiz();
    }else{
       // get next question
        getQuestions();
    }
    


}

//Creates choice buttons to be shown on page.
function createButtons(create) {
        answerChoices.innerHTML = "";
    for (var i = 0; i < create.length; i++) {
        var btn = document.createElement("button");
        var x = document.createTextNode(create[i]);
        btn.appendChild(x);
        btn.value = create[i];
        btn.onclick = checkAnswer;
        answerChoices.appendChild(btn);
    }
}



//Start Button
startButton.addEventListener("click", startQuiz);

//Allows next set of questions to be asked on page.
function getQuestions(){
    createButtons(questions[indexPos].choices);
    questionTitle.textContent = questions[indexPos].title;
}

//Function to start quiz then show question pages.
function startQuiz() {
    localStorage.setItem("score", 0);
    startScreen.className = "hide";
    questionScreen.className = "start";
    counterEl.textContent = secondsLeft;
    setTime();
    getQuestions();
}
// Ends Quiz then moves to score page.
function endQuiz() {
    clearInterval(timeInterval);
    showScore();
    questionScreen.className = "hide"; 
    quizOverScreen.className = "start"; 
}

//Allows score to be show in local storage.
function showScore() {
    finalScoreScreen.textContent = localStorage.getItem('score')
}



// Starts Timer
function setTime() {
    timeInterval = setInterval(function() {
        secondsLeft--;
    counterEl.textContent = secondsLeft;
    
        if(parseInt(counterEl.textContent) === 0) {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000)

}

//Buton to submit high score.
submit.addEventListener("click", userInput)

//Function used to input user initials to local storage. Then shows highscore screen.
function userInput() {
    initialsValue = initialsLog.value
    localStorage.setItem("user", initialsValue)
    window.location.href = "./highscores.html"
}
