var randNum;
var current;
var blueCrystal;
var pinkCrystal;
var yellowCrystal;
var grayCrystal;
var winCounter = 0;
var lossCounter = 0;

function newGame() {
    blueCrystal = Math.floor(Math.random() * 12 + 1);
    pinkCrystal = Math.floor(Math.random() * 12 + 1);
    yellowCrystal = Math.floor(Math.random() * 12 + 1);
    grayCrystal = Math.floor(Math.random() * 12 + 1);
    randNum = Math.floor(Math.random() * 101 + 19);
    document.getElementById("targetScore").textContent = randNum;
    current = 0;
    document.getElementById("currentScore").textContent = current;
}

function winner() {
    winCounter += 1;
    document.getElementById("wins").textContent = ("Wins: " + winCounter);
    newGame();
}

function loser() {
    lossCounter += 1;
    document.getElementById("losses").textContent = ("Losses: " + lossCounter);
    newGame();
}

newGame();

document.getElementById("blue").addEventListener("click", blueClick);
document.getElementById("pink").addEventListener("click", pinkClick);
document.getElementById("yellow").addEventListener("click", yellowClick);
document.getElementById("gray").addEventListener("click", grayClick);

function blueClick() {
    current += blueCrystal;
    document.getElementById("currentScore").textContent = current;
    if(current === randNum) {
        winner();
    } else if(current > randNum) {
        loser();
    }
}

function pinkClick() {
    current += pinkCrystal;
    document.getElementById("currentScore").textContent = current;
    if(current === randNum) {
        winner();
    } else if(current > randNum) {
        loser();
    }
}

function yellowClick() {
    current += yellowCrystal;
    document.getElementById("currentScore").textContent = current;
    if(current === randNum) {
        winner();
    } else if(current > randNum) {
        loser();
    }
}

function grayClick() {
    current += grayCrystal;
    document.getElementById("currentScore").textContent = current;
    if(current === randNum) {
        winner();
    } else if(current > randNum) {
        loser();
    }
}