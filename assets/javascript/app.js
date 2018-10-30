$('#start').on('click', function() {
  game.start();
})
$(document).on('click', '#end', function(){
  game.done();
})

var questions = [{
  question: "Who was the first president of the United States?",
  answers:["George Washington", "Bill Clinton", "Lyndon B. Johnson", "John F. Kennedy"],
  correctAnswer:"George Washington"
}, {
  question: "The song 'Single Ladies' was sung by which pop artist?",
  answers:["Ariana Grande", "Beyonce", "Britney Spears", "Rhianna"],
  correctAnswer:"Beyonce"
}, {
  question: "What is the largest bone in the body?",
  answers:["Skull", "Femur", "Spine", "Tibia"],
  correctAnswer:"Femur"
}, {
  question: "Who was the first person to walk on the moon?",
  answers:["Alan Bean", "David Scott", "James Irwin", "Neil Armstrong"],
  correctAnswer:"Neil Armstrong"
}, {
  question: "What was the name of the lead actor in the 90s tv show 'Martin'?",
  answers:["Cole", "Tommy", "Martin", "Ricky"],
  correctAnswer:"Martin"
}, {
  question: "What year was the first iphone released?",
  answers:["2007", "2001", "2005", "2002"],
  correctAnswer:"2007"
}, {
  question: "Which football is best known for being called 'America's Team?",
  answers:["Cowboys", "Lions", "Steelers", "Eagles"],
  correctAnswer:"Cowboys"
}, {
  question: "Which city is the statue of liberty located?",
  answers:["Los Angeles", "Miami", "Houston", "New York"],
  correctAnswer:"New York"
}];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 60,
  countDown: function() {
    game.counter--;
    $('#counter').html(game.counter);
    if(game.counter<=0){
      console.log("Time is up!");
      game.done();
    }
  },
  start: function(){
    timer = setInterval(game.countDown, 1000);
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter"> 60</span> Seconds</h2>');
    $('#start').remove();
    for(var i = 0; i < questions.length; i++){
      $('#subwrapper').append('<h2>' + questions[i].question+ '</h2');
      for(var j = 0; j < questions[i].answers.length; j++ ){
        $("#subwrapper").append("<input type ='radio'name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
      }
    }
    $('#subwrapper').append('<br><button id="end">DONE</button>');
  },
  done: function(){
    $.each($('input[name="question-0]":checked'), function(){
      if($(this).val() == questions[0].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-1]":checked'), function(){
      if($(this).val() == questions[1].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-2]":checked'), function(){
      if($(this).val() == questions[2].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-3]":checked'), function(){
      if($(this).val() == questions[3].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-4]":checked'), function(){
      if($(this).val() == questions[4].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-5]":checked'), function(){
      if($(this).val() == questions[5].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-6]":checked'), function(){
      if($(this).val() == questions[6].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-7]":checked'), function(){
      if($(this).val() == questions[7].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-8]":checked'), function(){
      if($(this).val() == questions[8].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    this.result();
  },
  result: function(){
    clearInterval(timer);
    $('#subwrapper h2').remove();

    $('#subwrapper').html("<h2>All DONE!</h2>");
    $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
    $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
    $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
  }

}