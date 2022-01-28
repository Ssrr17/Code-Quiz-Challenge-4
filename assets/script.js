//Array to store quiz content 
var questionEL = document.querySelector("#question")
var choiceListEL = document.querySelector("#multichoice");
var resultEl = document.querySelector("#result");
var countDown = document.querySelector("#clock")
var startBtnEl = document.querySelector("#startBtn")

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
    }
]


var askQuestions = function () {
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



var verifyAns = function (event) {
    //check if user selctions matches question answer
    if (event.target.matches("li")) {
        var pickedAns = event.target.textContent
        if (pickedAns === multiChoice[questionNum].answer) {
            resultEl.textContent = "You're Correct!"
            scoreCard++;
            console.log(scoreCard);
        } else {
            resultEl.textContent = "Wrong Answer!"
        }
    
    }
    //Add delay before next question is displayed
    setTimeout(nexQues, 2000)
}
var nexQues = function(){
    next = questionNum++;
    askQuestions()
}



//document.querySelector("#next").addEventListener("click", function (){}
choiceListEL.addEventListener("click",verifyAns)

var letsGetStarted = function(){
    document.querySelector("#startBtn").addEventListener("click", askQuestions)
}
letsGetStarted()
//askQuestions()


