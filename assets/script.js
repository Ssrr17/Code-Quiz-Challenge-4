//Array to store quiz content 
var questionEL = document.querySelector("#question")
var choiceListEL = document.querySelector("#multichoice");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#time")
var startBtnEl = document.querySelector("#startBtn")
var countDown = 4;
var clock;

var questionNum = 0;
var scoreCard = 0;


var multiChoice = [
    {
        question: "placeholder question 1",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        question: "placeholder question 2",
        choices: ["a", "b", "c", "d"],
        answer: "d"
    },
    {
        question: "placeholder question 3",
        choices: ["a", "b", "c", "d"],
        answer: "c"
    }
]
// this will end game after last questions
var gameOver = function () {
    clearInterval(clock);
    document.main.innerHTML = "GAME OVER! Your Score is :" + scoreCard;
}

//this will start the count down
var tickTock = function () {
    countDown--;
    if (clock = 0) {
        gameOver()
    }
}
    

    var askQuestions = function () {

        if (clock = 0) {
            gameOver();
            
        }

        clock = setInterval(tickTock, 1000);

        questionEL.textContent = multiChoice[questionNum].question;

        choiceListEL.innerHTML = "";
        resultEl.innerHTML = "";


        var options = multiChoice[questionNum].choices;
        var choiceArr = options.length;

        for (var i = 0; i <= choiceArr; i++) {
            var optionItem = document.createElement("li");
            optionItem.textContent = options[i];
            choiceListEL.append(optionItem)

        }

    }

    var nexQues = function () {
        questionNum++;
        if (questionNum === multiChoice.length) {
            clock = 0;
            //return;

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


