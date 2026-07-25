const challenges = [

{
question:"A plane can use which cleaner fuel option?",
options:[
{
text:"Traditional fossil jet fuel",
points:0
},
{
text:"Sustainable aviation fuel (biofuel)",
points:3
},
{
text:"More fuel consumption",
points:0
}
]

},


{
question:"Which commute creates fewer emissions?",
options:[
{
text:"Driving alone",
points:0
},
{
text:"Cycling",
points:3
},
{
text:"Large fuel vehicle",
points:0
}
]

},


{
question:"Which energy source helps reduce transport emissions?",
options:[
{
text:"Renewable energy",
points:3
},
{
text:"More gasoline",
points:0
},
{
text:"Coal powered vehicles",
points:0
}
]

},


{
question:"Which travel habit helps the planet?",
options:[
{
text:"Car sharing",
points:2
},
{
text:"Driving alone every trip",
points:0
},
{
text:"Leaving engines running",
points:0
}
]

}

];




let current = 0;

let score = 0;

let answered = false;






const question =
document.getElementById("fuel-question");


const options =
document.getElementById("fuel-options");


const result =
document.getElementById("fuel-result");


const scoreText =
document.getElementById("fuel-score");


const next =
document.getElementById("fuel-next");







function loadChallenge(){


    answered = false;


    let item = challenges[current];


    question.textContent = item.question;


    options.innerHTML = "";


    result.textContent = "";





    item.options.forEach(option=>{


        let button = document.createElement("button");


        button.textContent = option.text;





        button.onclick=function(){



            if(answered){

                return;

            }



            answered = true;



            score += option.points;



            scoreText.textContent =
            `Carbon Score: ${score}`;





            options.querySelectorAll("button")
            .forEach(btn=>{

                btn.disabled = true;

            });





            if(option.points > 0){



                button.style.background="#1b5e20";


                result.textContent =
                "Excellent low-carbon choice! 🌱";


            }

            else{


                button.style.background="#c62828";


                result.textContent =
                "Try a cleaner option next time.";

            }



        };




        options.appendChild(button);



    });


}







next.onclick=function(){


    current++;




    if(current < challenges.length){


        loadChallenge();


    }

    else{



        question.textContent =
        "Challenge Complete!";



        options.innerHTML = "";





        result.textContent =
        `Final Carbon Score: ${score}/${challenges.length * 3}`;





        next.style.display="none";





        if(typeof completeGame === "function"){


            completeGame("Biofuel Challenge");


        }



    }


};







loadChallenge();