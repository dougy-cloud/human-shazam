class Audio {
    constructor(url) {
        this.url = url;
    }
    
} 

const btnStart = document.getElementById('start');
const btnRules = document.getElementById('instructions');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');

// SCREENS
let youWin = document.getElementById("you-win");
let youLose = document.getElementById("you-lose");
let shazamMaster = document.getElementById("shazam-master");
let showerShuffler = document.getElementById("shower-shuffler");
let gameIntro = document.getElementById("game-intro");
const gameRules = document.querySelector(".game-rules");


// ANSWERS
const answersContainer = document.getElementById('answers-container');
// const aChoice = document.getElementById('answer-a');
// const bChoice = document.getElementById('answer-b');
// const cChoice = document.getElementById('answer-c');

// GAUGE
let gaugeContainer = document.getElementById("gauge-container");
const gaugeList = Array.from(gaugeContainer.children);

// STAGE
const parentStage = document.getElementById("current-stage");
let currentStage = 1;

// FUNCTIONS
const playlist =
[ {
        title: 'Queen - Bohemian Rhapsody',
        answerA: "Sorry Jaime - I'm Forever DC",
        answerB: 'Queen - Bohemian Rhapsody',
        answerC: 'Freddie Mercury - Bohemian Rhapsody',
        rightAnswer : 'Queen - Bohemian Rhapsody',
        clip: new Audio('music-clips\clips-lvl-1\Bohemian Rhapsody - Queen.mp3')

    }, 
    {
        title: 'Céline Dion - My Heart Will Go On',
        answerA: "Céline Dion - It's All Coming Back To Me Now",
        answerB: 'Céline Dion - Titanic',
        answerC: 'Céline Dion - My Heart Will Go On',
        rightAnswer : 'Céline Dion - My Heart Will Go On',
        clip: new Audio('/music-clips/clips-lvl-1/Celine Dion - My Heart Will Always Go On.mp3'),
    },
    {
        title: 'Eminem - Lose Yourself',
        answerA: 'Eminem - Till I Collapse',
        answerB: 'Eminem - Lose Yourself',
        answerC: 'Eminem - Mockingbird',
        rightAnswer : 'Eminem - Lose Yourself',
        clip: new Audio('/music-clips/clips-lvl-1/Eminem - Lose Yourself.mp3'),
    },
    {
        title: 'Estelle - American Boy',
        answerA: 'Stella - American Boy',
        answerB: 'Estelle - American Boy',
        answerC: 'Esther - American Boy',
        rightAnswer: 'Estelle - American Boy',
        clip: new Audio('/music-clips/clips-lvl-1/Estelle - American Boy.mp3'),
    },
    {
        title: 'Gnarls Barkley - Crazy',
        answerA: 'Nils Barkley - Crazy',
        answerB: 'Nils Barkley - I remember when',
        answerC: 'Gnarls Barkley - Crazy',
        rightAnswer: 'Gnarls Barkley - Crazy',
        clip: new Audio('/music-clips/clips-lvl-1/Gnarls Barkley - Crazy.mp3'),
    },
    {
        title: 'Jeff Buckley - Hallelujah',
        answerA: 'Jeff Buckley - Hallelujah',
        answerB: 'Shrek - Hallelujah',
        answerC: 'Jeffrey Beckley - Hallelujah',
        rightAnswer: 'Jeff Buckley - Hallelujah',
        clip: new Audio('/music-clips/clips-lvl-1/Jeff Buckley - Hallelujah.mp3'),
    },
    {
        title: 'Kate Bush - Running Up That Hill',
        answerA: 'Kate Bush - Running Up That Hill',
        answerB: 'Stranger Things - Running Up That Hill',
        answerC: 'Kate Bush - Cloudbusting',
        rightAnswer: 'Kate Bush - Running Up That Hill',
        clip: new Audio('/music-clips/clips-lvl-1/Kate Bush - Running Up That Hill.mp3'),
    },
    {
        title: 'Lady Gaga - Poker Face',
        answerA: 'Lady Gaga - Bad Romance',
        answerB: 'Lady Gaga - PopopokerFacePopopokerFace',
        answerC: 'Lady Gaga - Poker Face',
        rightAnswer: 'Lady Gaga - Poker Face',
        clip: new Audio('/music-clips/clips-lvl-1/Lady Gaga - Poker Face.mp3'),
    },
    {
        title: 'Michael Jackson - The Earth Song',
        answerA: 'Michael Jackson - What About Us',
        answerB: 'Michael Jackson - The Earth Song',
        answerC: 'Even MJ did a clip about Earth and nothing happened?',
        rightAnswer: 'Michael Jackson - The Earth Song',
        clip: new Audio('/music-clips/clips-lvl-1/Michael Jackson - Earth song.mp3'),
    },
    {
        title: 'Prince - KISS',
        answerA: 'Prince - KISS',
        answerB: 'The Revolution - KISS',
        answerC: 'His Purple Majesty - KISS',
        rightAnswer: 'Prince - KISS',
        clip: new Audio('/music-clips/clips-lvl-1/Prince - Kiss.mp3'),
    },
    {
        title: "The Black Eyed Peas - Let's Get It Started",
        answerA: "The Black Eyed Peas - PUMP IT",
        answerB: "The Black Eyed Peas - Let's Get It Started",
        answerC: "The Black Eyed Peas - Hey Mama",
        rightAnswer: "The Black Eyed Peas - Let's Get It Started",
        clip: new Audio("/music-clips/clips-lvl-1/The Black Eyed Peas - Let's Get It Started.mp3"),
    },
    {
        title: 'The Doors - The End',
        answerA: 'Velvet Underground - Venus In Furs',
        answerB: 'Velvet Underground - Sunday Morning',
        answerC: 'The Doors - The End',
        rightAnswer: 'The Doors - The End',
        clip: new Audio('/music-clips/clips-lvl-1/The Doors - The End.mp3'),
    },
    {
        title: 'The Police - Message In A Bottle',
        answerA: 'The Police - Time In A Bottle',
        answerB: 'The Police - S.O.S to the World',
        answerC: 'The Police - Message In A Bottle',
        rightAnswer: 'The Police - Message In A Bottle',
        clip: new Audio('/music-clips/clips-lvl-1/The Police - Message in a Bottle.mp3'),
    },
    {
        title: 'Whitney Houston - I Wanna Dance With Somebody',
        answerA: 'Cyndi Lauper - Girls Just Want To Have Fun',
        answerB: 'Drew Sycamore - I Wanna Be Dancing',
        answerC: 'Whitney House - I Wanna Dance With Somebody',
        rightAnswer: 'Whitney Houston - I Wanna Dance With Somebody',
        clip: new Audio('/music-clips/clips-lvl-1/Whitney Houston - I Wanna Dance With Somebody.mp3'),
    },
]



function getRandomStage(arr){
    let randomNum = Math.floor(Math.random()*arr.length);
    let randomStage = arr[randomNum];
    return randomStage;
}

const currentLevel = getRandomStage(playlist);

const audio = document.getElementById('myAudio');


function getClip(){
    audio.src = currentLevel.clip.url;
    audio.play();
}

function pauseClip(){
    audio.pause();
}


function printAnswers(){
    document.getElementById('answer-a').innerText = currentLevel.answerA;
    document.getElementById('answer-b').innerText = currentLevel.answerB;
    document.getElementById('answer-c').innerText = currentLevel.answerC;
}

function updateGauge(rightAnswer){
    if(rightAnswer){
        gaugeList[15 - currentStage + 1].classList.add('goodAnswer');
    }
    else {
        resetList()
    }
}

function updateStage(){
    parentStage.firstElementChild.innerText = `Stage ${currentStage}`;
    console.log(parentStage.firstElementChild)
}

const reset = (div) => {
div.classList.remove("goodAnswer");
}

function resetList(){
   let divToReset = gaugeContainer.querySelectorAll('.goodAnswer');
    gaugeList.forEach(reset);
   console.log(divToReset);
}

function goodAnswer(currentPlaylist, ans){
    const clickedAnswer = ans.innerText;
    return clickedAnswer === currentPlaylist.title;
}


// loading page
window.addEventListener('load', () => {
    youWin.classList.toggle("hidden");
    youLose.classList.toggle("hidden");
    shazamMaster.classList.toggle("hidden");
    showerShuffler.classList.toggle("hidden");
    gameRules.classList.toggle("hidden");
}); 

btnRules.addEventListener('click', () => {
   gameRules.classList.remove("hidden");
});

btnStart.addEventListener('click', () => {
    showerShuffler.classList.remove("hidden");

});

btnPlay.addEventListener('click', () => {
    console.log("okok")
    while(currentStage <= 15){
        printAnswers(currentLevel);
        console.log("okok2");
        getClip();
        btnPause.addEventListener('click', () => {
            pauseClip();
        });
        answersContainer.addEventListener('click', (e) => {
            console.log("okok3");
            const answer = e.target.closest('div');
            const rightAnswer = goodAnswer(currentLevel, answer);
            if (rightAnswer === true){
                currentStage++;
            }   else {
                currentStage = 1;
            }
            updateGauge(rightAnswer);
            updateStage();
        });
    }

});