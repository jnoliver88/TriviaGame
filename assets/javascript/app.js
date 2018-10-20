
//variables created for each question in the HTML//

function check(){
  
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var correct = 0;

//if statements created to equal the value of the right answer. Im not that confident yet using loops inside of fucntions etc. because i get confused// 
  if (question1 == "George Washington") {
    correct++;
  }
  if (question2 == "Beyonce") {
    correct++;
  }
  if (question3 == "Femur") {
    correct++;
  }
  if (question4 == "Neil Armstrong") {
    correct++;
  }
  if (question5 == "Martin") {
    correct++;
  }
  if (question6 == "2007") {
    correct++;
  }
  if (question7 == "Cowboys") {
    correct++;
  }
  if (question8 == "New York") {
    correct++;
  }


  var messages = ["Awesome, You got them all right", "C'mon, I know you can do better", "Really Bruh"]
  var range;
  
  if (correct < 4){
      range = 2;
  }
  if (correct > 0 && correct < 8) {
      range = 1;
  }
  if (correct > 0) {
      range = 0;
  }
  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("messages").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + "correct.";
}