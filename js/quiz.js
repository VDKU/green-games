const questions = [

{
question:"Which action helps reduce waste?",
answers:["Recycling materials","Throwing everything away","Using more disposable items"],
correct:0
},

{
question:"Which energy source is renewable?",
answers:["Coal","Solar power","Gasoline"],
correct:1
},

{
question:"Which choice saves water?",
answers:["Leaving the tap running","Taking longer showers","Fixing leaks"],
correct:2
},

{
question:"Which transportation choice reduces emissions?",
answers:["Walking or cycling","Driving alone everywhere","Using more fuel"],
correct:0
},

{
question:"What helps protect forests?",
answers:["Planting trees","Wasting paper","Cutting down more forests"],
correct:0
}

];


let currentQuestion = 0;
let score = 0;


const questionText=document.getElementById("question");
const answersBox=document.getElementById("answers");
const result=document.getElementById("result");
const nextButton=document.getElementById("next");
const restartButton=document.getElementById("restart");
const progress=document.getElementById("progress");
const scoreDisplay=document.getElementById("score");


function loadQuestion(){

result.textContent="";
answersBox.innerHTML="";

let q=questions[currentQuestion];


progress.textContent=
`Question ${currentQuestion+1} of ${questions.length}`;

scoreDisplay.textContent=
`Score: ${score}`;


questionText.textContent=q.question;



q.answers.forEach((answer,index)=>{


let button=document.createElement("button");

button.textContent=answer;


button.onclick=function(){


let buttons=answersBox.querySelectorAll("button");

buttons.forEach(btn=>btn.disabled=true);


if(index===q.correct){

score++;

button.style.background="#1b5e20";

result.textContent="Correct! 🌱";

}
else{

button.style.background="#c62828";

buttons[q.correct].style.background="#1b5e20";

result.textContent="Incorrect. Correct answer highlighted.";

}


scoreDisplay.textContent=
`Score: ${score}`;

};


answersBox.appendChild(button);


});


}



nextButton.onclick=function(){

currentQuestion++;


if(currentQuestion<questions.length){

loadQuestion();

}

else{


progress.textContent="Quiz Complete";

questionText.textContent="Great Job!";

answersBox.innerHTML="";


result.textContent=
`Final Score: ${score}/${questions.length}`;


nextButton.style.display="none";

restartButton.style.display="block";


if(typeof completeGame==="function"){

completeGame("Sustainability Quiz");

}


}

};



restartButton.onclick=function(){

currentQuestion=0;
score=0;

nextButton.style.display="block";
restartButton.style.display="none";

loadQuestion();

};



loadQuestion();