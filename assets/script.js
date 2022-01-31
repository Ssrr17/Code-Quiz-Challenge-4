//Array to store quiz content 
var questionEL = document.querySelector("#question")
var choiceListEL = document.querySelector("#multichoice");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#time")
var startBtnEl = document.querySelector("#startBtn")
var countDown = 30;
var clock;
var initialEl = document.querySelector("#initial")
var questionNum = 0;
var scoreCard = 0;


var multiChoice = [
    {
        question: "How many players begin a soccer game for each team?",
        choices: ["7", "14", "17", "11"],
        answer: "11"
    },
    {
        question: "Which one of the following is allowed to use their hands in the game",
        choices: ["Defender", "Winger", "Goalkeeper", "Foward"],
        answer: "Goalkeeper"
    },
    {
        question: "How many referees are on the pitch during a game",
        choices: ["3", "4", "0", "1"],
        answer: "1"
    },
    {
        question: "How many minutes are there in one half of a soccer game",
        choices: ["12 minutes", "25 minutes", "45 minutes", "90 minutes"],
        answer: "45 minutes"
    },
    {
        question: "Which one of the following can score during the game",
        choices: ["Midfielders", "Defenders", "Fowards", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "How long is a soccer game",
        choices: ["90 minutes", "180 minutes", "45 minutes", "1 hour"],
        answer: "90 minutes"
    },
    {
        question: "How many points is one goal on the scoreboard",
        choices: ["7", "2", "1", "3"],
        answer: "1"
    },
    {
        question: "What happens when a player gets a red card?",
        choices: ["Player gets a warning", "Player gets a reward", "Player has to leave the game", "Player gets substituted"],
        answer: "Player has to leave the game"
    },
    {
        question: "What is the number of substitutions allowed for each team",
        choices: ["3", "1", "5", "11"],
        answer: "3"
    },
    {
        question: "What postiosn is also called 'the number 9' position",
        choices: ["Center-back", "Striker", "Left-back", "Attacking-midfielder"],
        answer: "Striker"
    }

]
getIntial = function () {
    var userIn = prompt("Please enter initials")
    if (userIn != "" && userIn != null) {
        document.getElementById("demo").innerHTML =
        alert(" Player " + userIn + " Score " + scoreCard);
        
    } else {
        alert("Please enter your initials");
        return getIntial()
    }
    localStorage.setItem(userIn,scoreCard);
}





// this will end game after last questions
var gameOver = function () {
    clearInterval(clock);
    resultEl.textContent = "GAME OVER!";
    getIntial()
    
   return;
   
}

//this will start the count down
var tickTock = function () {
    countDown--;
    if (countDown <= 0) {
        gameOver()
    }
    timerEl.textContent = "Time  : " + countDown;
    timerEl.className = "stlyetime";

}


var askQuestions = function () {


    timerEl.textContent = countDown;

    if (clock = 0) {
        gameOver();

    }

    clock = setInterval(tickTock, 1000);

    questionEL.textContent = multiChoice[questionNum].question;
    questionEL.className = "qcard";

    choiceListEL.innerHTML = "";
    resultEl.innerHTML = "";


    var options = multiChoice[questionNum].choices;
    var choiceArr = options.length;

    for (var i = 0; i < choiceArr; i++) {
        var optionItem = document.createElement("li");
        optionItem.className = "anscard";
        optionItem.textContent = options[i];
        choiceListEL.append(optionItem)

    }

}

var nexQues = function () {
    questionNum++;
    if (questionNum === multiChoice.length) {
        clock = 0;
        gameOver();
        //console.log(scoreCard);
        return;

    }
    askQuestions()
}



var verifyAns = function (event) {
    //Pause the clock
    clearInterval(clock);

    //check if user selctions matches question answer
    if (event.target.matches("li")) {
        var pickedAns = event.target.textContent
        if (pickedAns === multiChoice[questionNum].answer) {
            resultEl.textContent = "You're Correct!"
            scoreCard++;
            console.log(scoreCard);
        } else {
            resultEl.textContent = "Wrong Answer!"
            countDown = countDown - 2;
            console.log(countDown);
        }

    }
    //Add delay before next question is displayed
    setTimeout(nexQues, 2000)
}


//document.querySelector("#next").addEventListener("click", function (){}
choiceListEL.addEventListener("click", verifyAns)

var letsGetStarted = function () {
    document.querySelector("#startBtn").addEventListener("click", askQuestions)

}


letsGetStarted()
//askQuestions()


