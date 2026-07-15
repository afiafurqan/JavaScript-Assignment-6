const level = document.getElementById("level");
const rangeText = document.getElementById("rangeText");
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

let max = 10;
let randomNumber = generateRandom(max);
let attempts = 0;

function generateRandom(max){
    return Math.floor(Math.random()*max)+1;
}

function resetGame(){

    attempts = 0;
    attemptsText.innerText = attempts;
    guessInput.value = "";
    message.innerHTML = "";

    if(level.value==="easy"){
        max = 10;
    }

    else if(level.value==="medium"){
        max = 50;
    }

    else{
        max = 100;
    }

    rangeText.innerHTML =
    `Guess a number between <b>1 - ${max}</b>`;

    randomNumber = generateRandom(max);
}

level.addEventListener("change", resetGame);

guessBtn.addEventListener("click",function(){

    let guess = Number(guessInput.value);

    if(guess<1 || guess>max){
        message.style.color="red";
        message.innerHTML=`Enter number between 1 and ${max}`;
        return;
    }

    attempts++;
    attemptsText.innerText=attempts;

    if(guess===randomNumber){

        message.style.color="green";
        message.innerHTML=
        `🎉 Correct! You guessed in ${attempts} attempts`;

    }

    else if(guess<randomNumber){

        message.style.color="orange";
        message.innerHTML="⬆ Too Low";

    }

    else{

        message.style.color="orange";
        message.innerHTML="⬇ Too High";

    }

    guessInput.value="";
    guessInput.focus();

});

restartBtn.addEventListener("click",resetGame);

resetGame();