const challenges = [

{
text:"Plant a tree or care for a plant 🌱",
points:3
},

{
text:"Use a reusable bottle today 💧",
points:2
},

{
text:"Walk or cycle instead of driving 🚲",
points:3
},

{
text:"Turn off unused lights 💡",
points:2
},

{
text:"Recycle something correctly ♻️",
points:2
},

{
text:"Reduce food waste 🍎",
points:3
}

];



let score = 0;

let spins = 0;

let spinning = false;

const maxSpins = 5;





const wheel =
document.getElementById("wheel");


const challenge =
document.getElementById("challenge");


const result =
document.getElementById("wheel-result");


const scoreText =
document.getElementById("wheel-score");


const button =
document.getElementById("spin");







button.onclick=function(){


    if(spins >= maxSpins || spinning){

        return;

    }


    spinning = true;



    wheel.classList.add("spin-animation");





    setTimeout(()=>{


        let random =
        Math.floor(Math.random()*challenges.length);



        let selected =
        challenges[random];





        score += selected.points;


        spins++;





        challenge.textContent =
        selected.text;




        result.textContent =
        `Great job! +${selected.points} points 🌱`;





        scoreText.textContent =
        `Eco Points: ${score}`;





        wheel.classList.remove("spin-animation");



        spinning = false;





        if(spins === maxSpins){



            result.textContent =
            `Game Complete! Final Score: ${score} Eco Points`;



            button.style.display="none";




            if(typeof completeGame === "function"){


                completeGame("Wheel of Sustainability");


            }



        }



    },1000);



};