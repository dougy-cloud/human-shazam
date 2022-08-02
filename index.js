const btnStart = document.getElementById('start');
const btnRules = document.getElementById('instructions');
const btnPlay = document.getElementById('play')
const middleBox = document.getElementById('middle-box');

// SCREENS

const youWin = document.querySelectorAll(".you-win")
const youLose = document.querySelectorAll(".you-lose")
const gameRules = document.querySelectorAll(".game-rules")
const shazamMaster = document.querySelectorAll(".shazam-master")
const showerShuffler = document.querySelectorAll(".shower-shuffler")



// loading page
window.addEventListener('load', (event) => {
for (let element of youWin){
        element.style.display="none";
}
for (let element of youLose){
    element.style.display="none";
}
for (let element of shazamMaster){
    element.style.display="none";
}
for (let element of showerShuffler){
    element.style.display="none";
}
for (let element of gameRules){
    element.style.display="none";
}
});

btnRules.addEventListener('click', () => {
    for (let element of gameRules){
        element.style.display="flex";
    }
});

btnStart.addEventListener('click', () => {
    for (let element of showerShuffler){
        element.style.display="flex";
    };
});

btnPlay.addEventListener('click', () => {
    playSong();
    displayAnswers();
});

    