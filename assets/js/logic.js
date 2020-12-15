//Variables

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
var highScore = document.querySelector("#highscores");

//Initials Variable
var initialsLog = document.querySelector("initials")

//Submit button Variable
var submit = document.querySelector("submit");

//Start Time Variables
var secondsLeft = 75;
var timeInterval;

//Score
var score = 0;



var questionsObj = {
    
       questionsSetOne: { title: "Commonly used data types DO NOT include:",
       choices: ["stings", "booleans", "alerts", "numbers"],
       answer: "alerts" },
    
    
        questionsSetTwo: { title: "The condition in an if / else statement is enclosed within _____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"},
    
    
        questionsSetThree: { title: "Arrays in JavaScript can be used to store _____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"},
    
    
        questionSetFour: { title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"},
    
    
        questionSetFive: { title: "A very useful tool used in development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
        answer: "console log"},
}
//
function createButtons(create) {
    for (var i = 0; i < create.length; i++) {
        var btn = document.createElement("button");
        var x = document.createTextNode(create[i]);
        btn.appendChild(x);
        btn.id = create[i];
        answerChoices.appendChild(btn);
    }
}

/*function assignButtons(create) {
    for (var i = 0; i < create.length; i++) {
        let create[i] = document.getElementById(create[i])
        
        create[i].addEventListener("click", checkAnswer())
    }
}
//assign buttons - need to get to next screen

/*function checkAnswer(create) {
    if(create === questionsObj.questionsSetOne.answer){
        return 
    }
}*/

//Start Button
startButton.addEventListener("click", startQuiz);

// Quiz Questions
/*var questions = ["Commonly used data types DO NOT include:", "The condition in an if / else statement is enclosed within _____.", "Arrays in JavaScript can be used to store _____.", "String values must be enclosed within _____ when being assigned to variables.", "A very useful tool used in development and debugging for printing content to the debugger is:"]

//Quiz Choices
var questionOnechoices = ["stings", "booleans", "alerts", "numbers"];

var questionTwoChoices = ["quotes", "curly brackets", "parentheses", "square brackets"];

var questionThreeChoices = ["numbers and strings", "other arrays", "booleans", "all of the above"];

var questionFourChoices = ["commas", "curly brackets", "quotes", "parentheses"];

var questionFiveChoices = ["JavaScript", "terminal/bash", "for loops", "console log"];

//Quiz Answers
var questionOneAnswer = "alerts";

var questionTwoAnswer = "parentheses";

var questionThreeAnswer = "all of the above";

var questionFourAnswer = "quotes";

var questionFiveAnswer = "console log";*/

function startQuiz() {
    startScreen.className = "hide";
    questionScreen.className = "start";
    counterEl.textContent = 60;
    setTime();
    createButtons(questionsObj.questionsSetOne.choices);
    questionTitle.textContent = questionsObj.questionsSetOne.title;
}

function endQuiz() {
    questionScreen.className = "hide"; 
    quizOverScreen.className = "start"; 
}

// Starts Timer
function setTime() {
    timeInterval = setInterval(function() {
    counterEl.textContent--;
    
        if(parseInt(counterEl.textContent) === 0) {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000)

}




//build buttons
    //event listenr for each button
    //build loop
    //next questions

//build penelties
//lose time    
//add points

//local storage
