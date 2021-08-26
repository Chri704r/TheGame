"use strict";

let randomNumber;
let computerChoice;
let userChoice;



window.addEventListener("DOMContentLoaded", start);

function start(){
    console.log("start");

    getPlayerChoice();
}

function getPlayerChoice(){
    console.log("getPlayerChoice");

    document.querySelector("#rock").addEventListener("click", (e) => {
        console.log("rock");
        userChoice = e.target.id;
        console.log("userChoice: ", userChoice);
        makeComputerChoice();
    })

    document.querySelector("#paper").addEventListener("click", (e) => {
        console.log("paper");
        userChoice = e.target.id;
        console.log("userChoice: ", userChoice);
        makeComputerChoice();
    })

    document.querySelector("#scissors").addEventListener("click", (e) => {
        console.log("scissors");
        userChoice = e.target.id;
        console.log("userChoice: ", userChoice);
        makeComputerChoice();
    })

}

function makeComputerChoice(){
console.log("makeComputerChoice");

randomNumber = Math.floor(Math.random()*3) + 1;
console.log(randomNumber);

if(randomNumber === 1){
    computerChoice = "rock";
    console.log("computerChoice: ", computerChoice)
}
if(randomNumber === 2){
    computerChoice = "paper";
    console.log("computerChoice: ", computerChoice)
}
if(randomNumber === 3){
    computerChoice = "scissors";
    console.log("computerChoice: ", computerChoice)
}

showAnimations();

}

function showAnimations(){
    console.log("showAnimations");
    
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");

    document.querySelector("#player2").addEventListener("animationend", determineWinner);

}

function determineWinner(){
console.log("determineWinner")

document.querySelector("#player1").classList.remove("shake");
document.querySelector("#player2").classList.remove("shake");

if (computerChoice === "rock" && userChoice === "rock"){
    document.querySelector("#player1").classList.add("rock");
    document.querySelector("#player2").classList.add("rock");
    draw();
}

if (computerChoice === "paper" && userChoice === "paper"){
    document.querySelector("#player1").classList.add("paper");
    document.querySelector("#player2").classList.add("paper");
    draw();
}

if (computerChoice ==="scissors" && userChoice === "scissors"){
    document.querySelector("#player1").classList.add("scissors");
    document.querySelector("#player2").classList.add("scissors");
    draw();
}

if (computerChoice === "rock" && userChoice === "paper"){
    document.querySelector("#player1").classList.add("paper");
    document.querySelector("#player2").classList.add("rock");
    winner();
}
if (computerChoice === "rock" && userChoice === "scissors"){
    document.querySelector("#player1").classList.add("scissors");
    document.querySelector("#player2").classList.add("rock");
    loser();
}
if (computerChoice === "paper" && userChoice === "scissors"){
    document.querySelector("#player1").classList.add("scissors");
    document.querySelector("#player2").classList.add("paper");
    winner();
}
if (computerChoice === "paper" && userChoice === "rock"){
    document.querySelector("#player1").classList.add("rock");
    document.querySelector("#player2").classList.add("paper");
    loser();
}
if (computerChoice === "scissors" && userChoice === "rock"){
    document.querySelector("#player1").classList.add("rock");
    document.querySelector("#player2").classList.add("scissors");
    winner();
}
if (computerChoice === "scissors" && userChoice === "paper"){
    document.querySelector("#player1").classList.add("paper");
    document.querySelector("#player2").classList.add("scissors");
    loser();
}
}

 function winner(){
    console.log("winner");
    document.querySelector("#win").classList.remove("hidden");
 }

function loser(){
    console.log("loser");
    document.querySelector("#lose").classList.remove("hidden");
}

 function draw(){
    console.log("draw");
    document.querySelector("#draw").classList.remove("hidden");
 }