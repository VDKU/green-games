const choices = [

{
title:"Morning Travel",

question:"How do you travel to school or work?",

options:[
{
text:"Drive alone",
points:0
},
{
text:"Ride a bike",
points:3
},
{
text:"Take public transport",
points:2
}
]

},


{
title:"Lunch Choice",

question:"What lunch choice is more sustainable?",

options:[
{
text:"Bring a reusable container",
points:3
},
{
text:"Buy a disposable meal",
points:0
},
{
text:"Choose local food",
points:2
}
]

},


{
title:"Energy Use",

question:"You leave a room. What do you do?",

options:[
{
text:"Turn off the lights",
points:3
},
{
text:"Leave everything running",
points:0
},
{
text:"Reduce energy use when possible",
points:2
}
]

},


{
title:"Shopping",

question:"You need a new bag. What do you choose?",

options:[
{
text:"Reusable bag",
points:3
},
{
text:"Single-use plastic bag",
points:0
},
{
text:"Paper bag",
points:2
}
]

}

];



let current=0;

let score=0;



const title =
document.getElementById("day-title");


const question =
document.getElementById("day-question");


const options =
document.getElementById("day-options");


const result =
document.getElementById("day-result");


const scoreText =
document.getElementById("day-score");


const next =
document.getElementById("day-next");





function loadChoice(){


let item=choices[current];


title.textContent=item.title;


question.textContent=item.question;


options.innerHTML="";


result.textContent="";



item.options.forEach(option=>{


let button=document.createElement("button");


button.textContent=option.text;



button.onclick=function(){


score+=option.points;


scoreText.textContent=
`Sustainability Score: ${score}`;


result.textContent =
option.points>=2
?
"Great sustainable choice!"
:
"Try a greener option next time!";


options.querySelectorAll("button")
.forEach(btn=>btn.disabled=true);


};



options.appendChild(button);



});


}




next.onclick=function(){


current++;


if(current<choices.length){


loadChoice();


}

else{


title.textContent="Day Complete!";


question.textContent=
"You made choices for a greener planet.";


options.innerHTML="";


result.textContent=
`Final Sustainability Score: ${score}/${choices.length*3}`;


next.style.display="none";


}


};





loadChoice();