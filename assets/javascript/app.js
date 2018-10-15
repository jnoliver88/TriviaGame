$(document).ready(function(){})

var board = $('#question-area');
var numCounter = 30;


///////////////////////////////////////////////////////////////////////////////

//CLICK EVENTS
//START HERE JESS// AND WORK YOUR WAYDOWN TO CHANGE THE ID AND CLASS AND MAKE SURE EVERYTHING MATCHES
///////////////////////////////////////////////////////////////////////////////

$(document).on('click', '#start-over', function() {
  game.reset();
});

$(document).on('click', '.answer-button', function() {
  game.clicked();
});

$(document).on('click', '#start', function(p) {
  $('#middlesection').prepend('<h2>Time Remaining: <span id="count-down">30</span> Seconds</h2>');
  game.loadQuestion();
});

///////////////////////////////////////////////////////////////////////////////


//Question set


///////////////////////////////////////////////////////////////////////////////

var question = [{
    question: "Who was the first president of the United States?",
    answers: ["George Washington", "George W. Bush", "Lyndon B. Johnson", "John F. Kennedy"],
    correctAnswer: "George Washington",
}, {
    question: "The song 'Single Ladies' was sung by which pop artist?",
    answers: ["Ariana Grande", "Britney Spears", "Beyonce", "Rhianna"],
    correctAnswer: "Beyonce",
}, {
    question: "What is the largest bone in the body?",
    answers: ["Skull", "Femur", "Spine", "Tibia"],
    correctAnswer: "Femur",
}, {
    question: "Who was the first person to walk on the moon?",
    answers: ["Alan Bean", "David Scott", "James Irwin", "Neil Armstrong"],
    correctAnswer: "Neil Armstrong",
}, {
    question: "What was the name of the lead actor in the 90s tv show 'Martin'?",
    answers: ["Cole", "Tommy", "Martin", "Ricky"],
    correctAnswer: "Martin",
}, {
    question: "What year was the first iphone released?",
    answers: ["2001", "2007", "2005", "2002",],
    correctAnswer: "2007",
}, {
    question: "Which football is best known for being called 'America's Team?",
    answers: ["Cowboys", "Lions", "Steelers", "Eagles"],
    correctAnswer: "Cowboys",
}, {
    question: "Which city is the statue of liberty located?",
    answers: ["Los Angeles", "Miami", "Houston", "New York"],
    correctAnswer: "New York",
}];


var game = {
  question:question,
  currentQuestion:0,
  counter:numCounter,
  correct:0,
  incorrect:0,
  countdown: function(){
    game.counter--;
    $('#count-down').html(game.counter);

    if (game.counter === 0) {
      console.log('TIME UP');
      game.timeUp();
    }
  },
  loadQuestion: function(){
    timer = setInterval(game.countdown, 1000);
    board.html('<h2>' + question[this.currentQuestion].question + '</h2>' );
    for (var i = 0; i<question[this.currentQuestion].answers.length; i++){
     board.append('<button class="answer-button"> id="start" + "questions[this.currentQuestion].answers[i]" + "questions[this.currentQuestion].answers[i]" + </button>');
    }
  },
  nextQuestion: function(){
    game.counter = numCounter;
    $('#count-down').html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },
  timeUp: function (){
    clearInterval(timer);
    $('#count-down').html(game.counter);

    board.html('<h2>Out of Time!</h2>');
    board.append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);

    if (game.currentQuestion === question.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  results: function() {
    clearInterval(timer);

    board.html('<h2>All done, heres how you did!</h2>');
    $('#count-down').html(game.counter);
    board.append('<h3>Correct Answers: ' + game.correct + '</h3>');
    board.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
    board.append('<h3>Unanswered: ' + (question.length - (game.incorrect + game.correct)) + '</h3>');
    board.append('<br><button id="start-over">Start Over?</button>');
  },
  clicked: function(e) {
    clearInterval(timer);

    if ($(e.target).data("name") === question[this.currentQuestion].correctAnswer){
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },
  answeredIncorrectly: function() {
    game.incorrect++;
    clearInterval(timer);
    board.html('<h2>Nope!</h2>');
    board.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');

    if (game.currentQuestion === question.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  answeredCorrectly: function(){
    clearInterval(timer);
    game.correct++;
    board.html('<h2>Correct!</h2>');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  reset: function(){
    this.currentQuestion = 0;
    this.counter = numCounter;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};