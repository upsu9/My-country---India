
var readlineSync = require("readline-sync");
var chalk =require("chalk");
var score = 0;
var userName = readlineSync.question(chalk.red("What is your name ? "));
console.log(chalk.italic.green("welcome " + userName + " Lets see How well you know about our country India."));

var questions = [{
  question: "Who is prime Minister of India? ",
  answer: "Narendra Modi"
}, {
  question: "what is our National animal?",
  answer: "Tiger"
}, {
  question: "what is our National flower? ",
  answer: "Lotus"
}, {
  question: "Who is our current finance Minister? ",
  answer: "Nirmala Sitharaman"
}, {
  question: "Who is our current President ? ",
  answer: "Ramnath Kovind"
}];

function play(question, answer) {
  var input = readlineSync.question(question)
  if (input.toUpperCase() === answer.toUpperCase()) {
    console.log("You were Right! & you can go ahead!")
    score++
  } else {
    console.log("you were Wrong :( ")
  } console.log("your score is now " + score)
  console.log("------------------------------")
};

for (var i = 0; i < questions.length; i++) {
  currentQuestion = questions[i];
  play(currentQuestion.question,
    currentQuestion.answer)
};

if (score <= (questions.length / 2)) {
  console.log("you have scored " + score + " Please know your country better. ")
} else { console.log("Hey! you have scored " + score + " Congratulations!.") }

console.log("Here are the high score. ")
console.log("-------------\n-------------")
console.log("1.5")
console.log("2.4")
console.log("-------------\n-------------")
console.log(chalk.red("P.s: if you by any chance beat these scores ping so that i can update it."));
