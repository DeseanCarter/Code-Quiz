//High Score List ID Variable
var theHighScore = document.querySelector("#highscores");

//Clear HighScore List Variable
var clearScore = document.querySelector("#clear");

//Button to clear highscores
clearScore.addEventListener("click", wipeHighScore)

//Allows clear button to work
function wipeHighScore() {
    theHighScore.textContent = ""
    localStorage.clear();
}

//Allows initials and score on page - logs in locaal storage
function printScore() {
    let score = document.createElement('li')
    let userName = localStorage.getItem("user")
    let highScore = localStorage.getItem("score")
    if (userName != "null" && highScore != "null"){
    score.textContent = userName + " - " + highScore
    theHighScore.appendChild(score)
    } 
}

//Runs logic on screen
printScore();