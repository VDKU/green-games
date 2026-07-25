const trashItems = [

{
    item:"Plastic Bottle",
    emoji:"🥤",
    bin:"recycle",
    message:"Plastic bottles can be recycled."
},

{
    item:"Banana Peel",
    emoji:"🍌",
    bin:"compost",
    message:"Food scraps belong in compost."
},

{
    item:"Old Battery",
    emoji:"🔋",
    bin:"waste",
    message:"Batteries require special disposal."
},

{
    item:"Newspaper",
    emoji:"📰",
    bin:"recycle",
    message:"Paper products can be recycled."
},

{
    item:"Food Wrapper",
    emoji:"🍫",
    bin:"waste",
    message:"Many wrappers cannot be recycled."
},

{
    item:"Apple Core",
    emoji:"🍎",
    bin:"compost",
    message:"Fruit waste belongs in compost."
}

];



let current = 0;

let score = 0;

let answered = false;



const item =
document.getElementById("trash-item");

const image =
document.getElementById("trash-image");

const result =
document.getElementById("trash-result");

const scoreText =
document.getElementById("trash-score");

const next =
document.getElementById("trash-next");

const options =
document.getElementById("trash-options");

const buttons =
document.querySelectorAll("#trash-options button");




function loadTrash(){


    answered = false;


    const trash = trashItems[current];


    item.textContent =
    trash.item;


    image.textContent =
    trash.emoji;


    scoreText.textContent =
    `Score: ${score}`;


    result.textContent = "";



    buttons.forEach(button=>{

        button.disabled = false;

        button.style.background = "#2e7d32";

    });


}






buttons.forEach(button=>{


    button.onclick=function(){


        if(answered){

            return;

        }


        answered = true;



        let answer;



        if(button.textContent.includes("Recycling")){

            answer="recycle";

        }

        else if(button.textContent.includes("Compost")){

            answer="compost";

        }

        else{

            answer="waste";

        }





        buttons.forEach(btn=>{

            btn.disabled=true;

        });






        if(answer === trashItems[current].bin){


            score++;


            button.style.background="#1b5e20";


            result.textContent =
            "Correct! " + trashItems[current].message;


        }

        else{


            button.style.background="#c62828";


            result.textContent =
            "Incorrect. " + trashItems[current].message;


        }





        scoreText.textContent =
        `Score: ${score}`;



    };


});







next.onclick=function(){


    current++;




    if(current < trashItems.length){


        loadTrash();


    }

    else{


        item.textContent =
        "Game Complete!";


        image.textContent =
        "🌎";


        result.textContent =
        `Final Score: ${score}/${trashItems.length}`;




        options.innerHTML = "";



        next.style.display="none";



        // SAVE COMPLETION

        if(typeof completeGame === "function"){

            completeGame("Sort the Trash");

        }



    }



};






loadTrash();