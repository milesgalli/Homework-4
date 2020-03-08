
    // Variables

    var counter = 75;
    var startBtn = document.getElementById("start");
    var timerEl = document.getElementById("count");
    var startEl = document.getElementById("start-screen");
    var questionsEl = document.getElementById("questions");
    var choicesEl = document.getElementById("choices");
    var submitBtn = document.getElementById("submit");
    var choiceBtn = document.getElementById("btn");
    var endScreen = document.getElementById("end-screen")
    var initialsEl = document.getElementById("initials");
    var questioncounter = 0;

    // To start the Quiz

    // first event listener 
    startBtn.addEventListener("click", startQuiz);

    // hide some elements 
    startBtn.setAttribute("class", "un-hide");
    questionsEl.setAttribute("class", "hide");
    endScreen.setAttribute("class", "hide");

// start quiz function 

function startQuiz() {

  questionsEl.setAttribute("class", "unhide");


  timerId = setInterval(tikTok, 1000);

  // start timer 
  timerEl.textContent = counter;

  // hide start button and start el. 
  
  startBtn.setAttribute("class", "hide");

  startEl.setAttribute("class", "hide");

  // call the next question with question counter as the argument. 

  setNextQuestion(questioncounter);

}
// event listener to see which 
    choicesEl.addEventListener("click", function(event) {
       questioncounter++;
       setNextQuestion(questioncounter);
});

// Countdown timer begins 
// prints the live time in the count id. 
function tikTok() {
  counter--;
  timerEl.textContent = counter;

  // If statement to show end screen and hide question container, if the clock reaches 0 

  if (counter <= 0) {
    quizEnd();
  }
}
// Finds the index of the questions array. 
// stores the question index in the question variable 
// stores the question choices in the choice varibale 

function setNextQuestion(index) {

  var question = questions[index];
  var choice = question.choices;
 
  // if the index of the questions === the amount of questions 
  // the quiz will end 
  if (index === questions.length){

      quizEnd();

  }else{

    // print the question 
    $("#question-title").text(question.title);

    // print the choices 
    $(".btn.button-answer").each(function(index, element) {
      element.textContent = choice[index];

   });
  }


// Function to find which chocie the user selected. 
$('.button-answer').on('click',function(){
  var whichbtn = event.target;
  //console.log(whichbtn.innerText);

  checkAnswer(whichbtn.innerText); 

});

// check answer function 

function checkAnswer(a){

  var question = questions[questioncounter];

  if (question.answer === a) {
 // console.log("correct");

  }else{
 // console.log( "wrong");

 // take 10 secounds if user clicks wrong answer 
 counter -= 10;  

    }
  
  }

}

function quizEnd() {
  // timer stop
  clearInterval(timerId);

  // show end screen 
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // final score screen 
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = counter;

  // hide questions
  questionsEl.setAttribute("class", "hide");
}

// save high scroe funtion 
function saveHighscore() {

  // get the value from the name box 
  var initials = initialsEl.value.trim();

  // ensure this value want empty 
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: counter,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to highscores page 
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  // enter to save highscore list 
  if (event.key === "Enter") {
    saveHighscore();
  }
}
// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

initialsEl.onkeyup = checkForEnter;

