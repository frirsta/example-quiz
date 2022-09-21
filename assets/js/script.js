
const startSection = document.getElementById("start-section");
const nameSection = document.getElementById("name-section");
const flagSection = document.getElementById("flag-section");
const scoreSection = document.getElementById("score-section");
const summarySection = document.getElementById("summary-section");

/* 
 * start button goes to name section
 */
function startButtonEnter(event) {
    event.preventDefault();
    startSection.style.display = "none";
    nameSection.style.display = "flex";
    document.getElementById("username").value = "";
    document.getElementById("username").focus();
    startQuiz();
}
/**
 * Enter name button goes to quiz section
 */
function nameButtonEnter(event) {
    event.preventDefault();
    
    let inputName = document.getElementById("username").value;
    let inputNameArea = document.getElementById("username");
    let letters = /^[A-Za-z]+$/;

    if (inputName === "") {
        alert("Enter your name!");
    } else if (inputName != inputName.match(letters)) {
        alert("Your name can only include letters");
        inputNameArea.value = "";
        inputNameArea.focus();
    } else {
        
        nameSection.style.display = "none";
        flagSection.style.display = "flex";
        document.getElementById("user-answer").value = "";
        document.getElementById("user-answer").focus();
    
        document.getElementById("name-display").innerHTML = `<h3>${inputName}, this is your result:</h3>`;
    }
    

}
/* 
 * get summary page
 */

function getSummaryPage() {
    flagSection.style.display = "none";
    summarySection.style.display = "flex";
}

function playAgainButtonEnter(event) {
    event.preventDefault();
    summarySection.style.display = "none";
    flagSection.style.display = "flex";

    document.getElementById("correct").innerText = "";
    document.getElementById("incorrect").innerText = "";
    startQuiz();
}

/**
 * 
 * Button to go to home page from summary section 
 */
function homePageEnter(event){
event.preventDefault();
summarySection.style.display = "none";
startSection.style.display = "flex";

}




/**
 * Result will be stores in flagResult variable
 */
let flagResult = "";
/**
 * Get random flag from flagData to be displayed on page for quiz
 */
function startQuiz() {
    flagData.flag = Math.floor(Math.random() * flagData.pair.length);
    document.getElementById("flag-image").src = "https://flagcdn.com/w2560/" + flagData.pair[flagData.flag].imgCode + ".png";
    flagResult = flagData.pair[flagData.flag].country.replace(/\(|\)/g, '');
    flagResult.trim();
}



/**
 * Get answer written by user and check if its correct,
 * shows alert if answer is correct and incorrect and
 * after the alert a new flag will display.
 */
function userAnswer(event) {
    event.preventDefault()
    let letters = /^[A-Za-z\s]+$/;
    let inputAnswer = document.getElementById("user-answer").value.toLowerCase().trim();
    let inputArea = document.getElementById("user-answer");
    if (inputAnswer === "") {
        alert("You have to write your guess before moving on to the next flag");
    } else if (inputAnswer != inputAnswer.match(letters)) {
        alert("Your answer can only include letters")
    } else if (inputAnswer == flagData.pair[flagData.flag].country.toLowerCase()) {
        alert(`${inputAnswer} is the correct answer!`);
        addPoint();
        pointCounter();
    } else {
        alert(`Your guess ${inputAnswer} is incorrect, the correct answer is ${flagResult}`);
        addIncorrectPoint();
        pointCounter();

    }

    inputArea.value = "";
}

let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", userAnswer);

/**  
 * Get score from DOM and add point to correct score.  
 */
function addPoint() {
    let score = document.getElementById("correct").innerText;
    document.getElementById("correct").innerText = ++score;

}
/**  
 * Get incorrect score from DOM and add point to incorrect score.
 */
function addIncorrectPoint() {
    let score = document.getElementById("incorrect").innerText;
    document.getElementById("incorrect").innerText = ++score;


}

function pointCounter() {
    let maxQuestions = Number(document.getElementById("correct").innerText) + Number(document.getElementById("incorrect").innerText);
    if (maxQuestions !== 15) {
        document.getElementById("question-counter").innerText = maxQuestions + "/15";
        startQuiz();
    } else {
        alert('test: ditt spel är slut');
        document.getElementById("question-counter").innerText = "0/15"
        getSummaryPage();
    }
    console.log(maxQuestions);

}

/**
 * When user click enter on their keyboard the button will be clicked
 */
let inputName = document.getElementById("username");
inputName.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        document.getElementById("name-button").click();
    }
});

let userInput = document.getElementById("user-answer");
userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit-button").click();
    }
});

