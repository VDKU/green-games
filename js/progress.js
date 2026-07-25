document.addEventListener("DOMContentLoaded", function(){



const completedGames =
JSON.parse(localStorage.getItem("completedGames")) || [];



const totalGames = 6;



const progressTitle =
document.getElementById("progress-title");


const badge =
document.getElementById("badge");


const completedList =
document.getElementById("completed-games");





let completed =
completedGames.length;





progressTitle.textContent =
`Games Completed: ${completed}/${totalGames}`;





if(completedList){


    completedList.innerHTML = "";



    if(completed === 0){



        completedList.innerHTML = `

        <div class="card">

            <div class="card-content">

                <h3>
                🌱 No Games Completed Yet
                </h3>

                <p>
                Start playing sustainability games to earn badges.
                </p>

            </div>

        </div>

        `;


    }

    else {



        completedGames.forEach(game => {



            completedList.innerHTML += `

            <div class="card">

                <div class="card-content">

                    <h3>
                    🏆 ${game}
                    </h3>

                    <p>
                    Completed!
                    </p>

                </div>

            </div>

            `;



        });



    }



}






if(completed === totalGames){


    badge.textContent =
    "🌍 Planet Protector Badge Unlocked!";


}

else{


    badge.textContent =
    "🌱 Complete all games to unlock the Planet Protector Badge";


}



});