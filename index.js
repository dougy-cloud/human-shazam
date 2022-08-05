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

//RANK
let rank = document.getElementById('rank');

// FUNCTIONS
const playlist =
[  {
    title: '50 cent',
    answerA: '50 cent',
    answerB: 'Jadakiss',
    answerC: 'The Game',
    rightAnswer: '50 cent',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/50 cent - P.I.M.P..mp3'),
   },
   {
    title: 'Alicia Keys',
    answerA: 'Jorja Smith',
    answerB: 'Alicia Keys',
    answerC: 'Whitney House',
    rightAnswer: 'Alicia Keys',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/Alicia Keys - No One.mp3'),
   },
   {
    title: 'Bilie Eilish',
    answerA: 'Lana Del Rey',
    answerB: 'Lady Gaga',
    answerC: 'Bilie Eilish',
    rightAnswer: 'Billie Eilish',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/Billie Eilish - bad guy.mp3'),
   },
   {
    title: 'Chopin',
    answerA: 'Chopin',
    answerB: 'Beethoven',
    answerC: 'Vivaldi',
    rightAnswer: 'Chopin',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/Chopin - Prelude in E Minor op 28 no 4.mp3'),
   },
   {
    title: 'Ella Fitzgerald & Louis Armstrong',
    answerA: 'Ella Fitzgerald & Louis Armstrong',
    answerB: 'Aretha Franklin & Louis Armstrong',
    answerC: 'Nina Simone & Louis Armstrong',
    rightAnswer: 'Ella Fitzgerald & Louis Armstrong',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/Ella Fitzgerald and Louis Armstrong - Summertime.mp3'),
   },
   {
    title: 'Lauryn Hill',
    answerA: 'Roberta Flack',
    answerB: 'Ruth Jacobs',
    answerC: 'Lauryn Hill',
    rightAnswer: 'Lauryn Hill',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/Fugees - Killing Me Softly with His Song.mp3'),
   },
   {
    title: 'Hooverphonic',
    answerA: 'Son Little',
    answerB: 'Sting',
    answerC: 'Hooverphonic',
    rightAnswer: 'Hooverphonic',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/Hooverphonic - Mad about you.mp3'),
   },
   {
    title: 'Jorja Smith',
    answerA: 'SZA',
    answerB: 'Jorja Smith',
    answerC: 'Kali Uchis',
    rightAnswer: 'Jorja Smith',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/Jorja Smith - Blue Lights.mp3'),
   },
   {
    title: 'Lana Del Rey',
    answerA: 'Lana Del Rey',
    answerB: 'Lizzie Grant',
    answerC: 'Lorde',
    rightAnswer: 'Lana Del Rey',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/Lana Del Rey - Video Games.mp3'),
   },
   {
    title: 'Lou Reed',
    answerA: 'Jim Morrison',
    answerB: 'Lou Reed',
    answerC: 'David Bowie',
    rightAnswer: 'Lou Reed',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/Lou Reed - Walk on the Wild Side.mp3'),
   },
   {
    title: 'Rage Against The Machine',
    answerA: 'Spliknot',
    answerB: 'Run The Jewels',
    answerC: 'Rage Against The Machine',
    rightAnswer: 'Rage Against The Machine',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/Rage Against The Machine - Killing In the Name.mp3'),
   },
   {
    title: 'Talking Heads',
    answerA: 'Ramones',
    answerB: 'Talking Heads',
    answerC: 'Television',
    rightAnswer: 'Talking Heads',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/Talking Heads - Psycho Killer.mp3'),
   },
   {
    title: 'The Korgis',
    answerA: 'N.R.G.',
    answerB: 'The Korgis',
    answerC: 'Stackridge',
    rightAnswer: 'The Korgis',
    level: 2,
    clip: new Audio("/music-clips/clips-lvl-2/The Korgis - Everybody's Got To Learn Sometime.mp3"),
   },
   {
    title: 'The Ronettes',
    answerA: 'The Ronettes',
    answerB: 'The Crystals',
    answerC: 'The Shirelles',
    rightAnswer: 'The Ronettes',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/The Ronettes - Be My Baby.mp3'),
   },
   {
    title: 'The Zombies',
    answerA: 'The Cranberries',
    answerB: 'The Kinks',
    answerC: 'The Zombies',
    rightAnswer: 'The Zombies',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/The Zombies - Time Of The Season.mp3'),
   },
   {
    title: 'CAN',
    answerA: 'The Beatles',
    answerB: 'Pink Floyd',
    answerC: 'CAN',
    rightAnswer: 'CAN',
    level: 2,
    clip: new Audio('/music-clips/clips-lvl-2/Vitamin C - Can.mp3')
   },
   {
        title: 'Heatwaves',
        answerA: "Gooey",
        answerB: 'Heatwaves',
        answerC: "It's All So Incredibly Loud",
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
    let emptyArr = []
    let randomNum = Math.floor(Math.random()*arr.length);
    let randomStage = arr[randomNum]
    emptyArr.push(arr[randomNum]);
    return randomStage;
}

let currentLevel = getRandomStage(playlist);

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
}

function updateRank(rightAnswer){
    if (rightAnswer <= 5){
        rank.innerText = `Shower Singer`
    }

    else if(rightAnswer > 5){
        rank.innerText = `Shazam Shuffler`
    }

    else if(rightAnswer > 10){
        rank.innerText = `Shazam Master`
    }

}

const reset = (div) => {
div.classList.remove("goodAnswer");
}

function resetList(){
   let divToReset = gaugeContainer.querySelectorAll('.goodAnswer');
    gaugeList.forEach(reset);
}


function goodAnswer(currentPlaylist, ans){
    const clickedAnswer = ans.innerText;
    console.log(currentPlaylist.title);
    console.log(ans.innerText);
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
        printAnswers(currentLevel);
        getClip();
        btnPause.addEventListener('click', () => {
            pauseClip();
        });
        answersContainer.addEventListener('click', (e) => {
            let rightAnswer = false;
            const answer = e.target.closest('div');
            rightAnswer = goodAnswer(currentLevel, answer);
            if (rightAnswer === true){
                currentStage++;
                console.log(currentStage)
            }   else {
                currentStage = 1;
            }
            updateGauge(rightAnswer);
            updateStage();
            updateRank(rightAnswer);
            if(rightAnswer === true){
                currentLevel = getRandomStage(playlist);
                btnPlay.click();
            }
        
        });

});
