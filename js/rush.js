let score = 0;

let time = 30;

let gameTimer;

let countdown;

let running = false;



const area =
document.getElementById("rush-area");


const scoreText =
document.getElementById("rush-score");


const timeText =
document.getElementById("rush-time");


const result =
document.getElementById("rush-result");


const start =
document.getElementById("rush-start");






function createItem(){


    let item =
    document.createElement("div");



    let good =
    Math.random() > 0.25;





    if(good){


        item.textContent =
        ["🌱","♻️","💧","🌳","☀️"]
        [Math.floor(Math.random()*5)];


        item.className =
        "rush-good";


    }

    else{


        item.textContent =
        "🗑";


        item.className =
        "rush-bad";


    }





    item.style.left =
    Math.random()*80+"%";



    item.style.top =
    Math.random()*70+"%";







    item.onclick=function(){



        if(good){

            score++;

        }

        else{

            score--;

        }





        scoreText.textContent =
        `Score: ${score}`;



        item.remove();



    };





    area.appendChild(item);





    setTimeout(()=>{


        if(item){

            item.remove();

        }


    },1500);



}









function startGame(){



    if(running){

        return;

    }



    running = true;



    start.disabled = true;



    score = 0;

    time = 30;




    scoreText.textContent =
    "Score: 0";


    timeText.textContent =
    "Time: 30";


    result.textContent = "";


    area.innerHTML = "";






    gameTimer = setInterval(()=>{


        createItem();


    },700);








    countdown = setInterval(()=>{


        time--;



        timeText.textContent =
        `Time: ${time}`;





        if(time <= 0){



            clearInterval(countdown);

            clearInterval(gameTimer);



            area.innerHTML = "";



            result.textContent =
            `Game Complete! Final Score: ${score}`;



            running = false;



            start.disabled = false;





            if(typeof completeGame === "function"){



                completeGame("Sustainable Rush");



            }





        }



    },1000);



}








start.onclick=function(){


    startGame();


};