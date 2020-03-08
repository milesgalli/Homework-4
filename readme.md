
# Code Assingment 4 

Create a Quiz

 Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

 ## Start Quiz 
 
 This quiz required using a combination of variables, functions, event listeners, and using local storage variables. 
 
Functions Included:
* startQuiz function 
* setNextQuestion function 
* countdown function 
* checkAnswer function 
* quizEnd function 
* Savehigh score function 
* checkForEnter function 
* printHighScores function 
* clearHigh scores function 

# 3 Parts to The Asingment 

1. Lay out the html pages so that are responsive. This was done using a bootstrap template. CSS styling, and media queries. 

2. Display questions. Loop through questions, check that the answers were correct and create a score based on the time it took to complete the quiz. 

* In order to display buttons and questions, i used set attribute() element.To hide and un-hide divs and buttons. 

* I then used a series of functions to display questions and choices. I also created a countdown timer. Aswell as creating an array of objects for the question, choices and answer elements.

* Event listeners were used to trigger functions. Such as when the user clicks start or when the user clicks an answer. 

* I then created a click function to check which one of buttons the user selected. This value is used to compare the user answer to the correct answer.If the user was wrong 10 secounds was deducted from the time. 

* To end the quiz,i used a function to clear the timer, hide the questions div, and allow the user to enter there intials and add to the score list. 

3. Store the score in the local storage window. 

* To save the score in the local storage i used jason.parse and jason.stringfy. Additionally, i redirected the user to the high scores menu. where the score they recieved wil be listed in the highscores box, along with there initials. 



