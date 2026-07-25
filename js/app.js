// GREEN GAMES PROGRESS TRACKER


const totalGames = 6;


// Get completed games

let completedGames = JSON.parse(
    localStorage.getItem("completedGames")
) || [];



// Update homepage progress

function updateProgress(){

    const progressText = document.querySelector(".progress-card p");

    if(progressText){

        progressText.textContent =
        `Games Completed: ${completedGames.length} / ${totalGames}`;

    }

}




// Mark a game complete

function completeGame(gameName){


    if(!completedGames.includes(gameName)){


        completedGames.push(gameName);


        localStorage.setItem(
            "completedGames",
            JSON.stringify(completedGames)
        );


    }


}





// Make available to game pages

window.completeGame = completeGame;



updateProgress();