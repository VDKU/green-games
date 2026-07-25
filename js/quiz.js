const questions = [

    {
        question: "Which action helps reduce waste?",
        answers: [
            "Recycling materials",
            "Throwing everything away",
            "Using more disposable items"
        ],
        correct: 0
    },


    {
        question: "Which energy source is renewable?",
        answers: [
            "Coal",
            "Solar power",
            "Gasoline"
        ],
        correct: 1
    },


    {
        question: "Which choice saves water?",
        answers: [
            "Leaving the tap running",
            "Taking longer showers",
            "Fixing leaks"
        ],
        correct: 2
    },


    {
        question: "Which transportation choice reduces emissions?",
        answers: [
            "Walking or cycling",
            "Driving alone everywhere",
            "Using more fuel"
        ],
        correct: 0
    },


    {
        question: "What helps protect forests?",
        answers: [
            "Planting trees",
            "Wasting paper",
            "Cutting down more forests"
        ],
        correct: 0
    }

];



let currentQuestion = 0;

let score = 0;



const questionText = document.getElementById("question");

const answersBox = document.getElementById("answers");

const result = document.getElementById("result");

const nextButton = document.getElementById("next");

const restartButton = document.getElementById("restart");

const progress = document.getElementById("progress");

const scoreDisplay = document.getElementById("score");




function loadQuestion() {


    result.textContent = "";

    answersBox.innerHTML = "";


    const q = questions[currentQuestion];


    progress.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;


    scoreDisplay.textContent =
    `Score: ${score}`;


    questionText.textContent = q.question;



    q.answers.forEach((answer,index)=>{


        const button = document.createElement("button");


        button.textContent = answer;



        button.onclick = function(){


            const buttons =
            answersBox.querySelectorAll("button");



            buttons.forEach(btn => {

                btn.disabled = true;

            });



            if(index === q.correct){


                score++;


                scoreDisplay.textContent =
                `Score: ${score}`;


                button.style.background = "#2e7d32";


                result.textContent =
                "Correct!";


            }

            else{


                button.style.background = "#c62828";


                buttons[q.correct].style.background = "#2e7d32";


                result.textContent =
                "Incorrect. The correct answer is highlighted.";

            }


        };


        answersBox.appendChild(button);


    });


}





nextButton.onclick = function(){


    currentQuestion++;



    if(currentQuestion < questions.length){


        loadQuestion();


    }

    else{


        progress.textContent =
        "Quiz Complete";


        questionText.textContent =
        "Great Job!";


        answersBox.innerHTML = "";



        let percentage =
        Math.round((score / questions.length) * 100);



        result.textContent =
        `Final Score: ${score}/${questions.length} (${percentage}%)`;



        nextButton.style.display = "none";


        restartButton.style.display = "block";


        // SAVE GAME COMPLETION

        if(typeof completeGame === "function"){

            completeGame("Sustainability Quiz");

        }


    }


};






restartButton.onclick = function(){


    currentQuestion = 0;

    score = 0;


    nextButton.style.display = "block";

    restartButton.style.display = "none";


    scoreDisplay.textContent =
    "Score: 0";


    loadQuestion();


};





window.onload = function(){

    loadQuestion();

};