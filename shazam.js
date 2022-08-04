class Audio {
    constructor(url) {
        this.url = url;
    }

    playAudio(){
        this.url.play()
    }
    
} 

// [
//     {
//     name: 'PIMP',
//     artist: '50 cent',
//     answerA: '50 cent',
//     answerB: 'Jadakiss',
//     answerC: 'The Game',
//     rightAnswer: '50 cent',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/50 cent - P.I.M.P..mp3'),
//    },
//    {
//     name: 'No One',
//     artist: 'Alicia Keys',
//     answerA: 'Jorja Smith',
//     answerB: 'Alicia Keys',
//     answerC: 'Whitney House',
//     rightAnswer: 'Alicia Keys',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/Alicia Keys - No One.mp3'),
//    },
//    {
//     name: 'Bad Guy',
//     artist: 'Bilie Eilish',
//     answerA: 'Lana Del Rey',
//     answerB: 'Lady Gaga',
//     answerC: 'Bilie Eilish',
//     rightAnswer: 'Billie Eilish',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/Billie Eilish - bad guy.mp3'),
//    },
//    {
//     name: 'Prelude in E Minor, Op. 28, n°4',
//     artist: 'Chopin',
//     answerA: 'Chopin',
//     answerB: 'Beethoven',
//     answerC: 'Vivaldi',
//     rightAnswer: 'Chopin',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/Chopin - Prelude in E Minor op 28 no 4.mp3'),
//    },
//    {
//     name: 'Summertime',
//     artist: 'Ella Fitzgerald & Louis Armstrong',
//     answerA: 'Ella Fitzgerald & Louis Armstrong',
//     answerB: 'Aretha Franklin & Louis Armstrong',
//     answerC: 'Nina Simone & Louis Armstrong',
//     rightAnswer: 'Ella Fitzgerald & Louis Armstrong',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/Ella Fitzgerald and Louis Armstrong - Summertime.mp3'),
//    },
//    {
//     name: 'Killing Me Softly',
//     artist: 'Lauryn Hill',
//     answerA: 'Roberta Flack',
//     answerB: 'Ruth Jacobs',
//     answerC: 'Lauryn Hill',
//     rightAnswer: 'Lauryn Hill',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/Fugees - Killing Me Softly with His Song.mp3'),
//    },
//    {
//     name: 'Mad About You',
//     artist: 'Hooverphonic',
//     answerA: 'Son Little',
//     answerB: 'Sting',
//     answerC: 'Hooverphonic',
//     rightAnswer: 'Hooverphonic',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/Hooverphonic - Mad about you.mp3'),
//    },
//    {
//     name: 'Blue Lights',
//     artist: 'Jorja Smith',
//     answerA: 'SZA',
//     answerB: 'Jorja Smith',
//     answerC: 'Kali Uchis',
//     rightAnswer: 'Jorja Smith',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/Jorja Smith - Blue Lights.mp3'),
//    },
//    {
//     name: 'Video Games',
//     artist: 'Lana Del Rey',
//     answerA: 'Lana Del Rey',
//     answerB: 'Lizzie Grant',
//     answerC: 'Lorde',
//     rightAnswer: 'Lana Del Rey',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/Lana Del Rey - Video Games.mp3'),
//    },
//    {
//     name: 'Walk On The Wild Side',
//     artist: 'Lou Reed',
//     answerA: 'Jim Morrison',
//     answerB: 'Lou Reed',
//     answerC: 'David Bowie',
//     rightAnswer: 'Lou Reed',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/Lou Reed - Walk on the Wild Side.mp3'),
//    },
//    {
//     name: 'Killing In The Name',
//     artist: 'Rage Against The Machine',
//     answerA: 'Spliknot',
//     answerB: 'Run The Jewels',
//     answerC: 'Rage Against The Machine',
//     rightAnswer: 'Rage Against The Machine',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/Rage Against The Machine - Killing In the Name.mp3'),
//    },
//    {
//     name: 'Psycho Killer',
//     artist: 'Talking Heads',
//     answerA: 'Ramones',
//     answerB: 'Talking Heads',
//     answerC: 'Television',
//     rightAnswer: 'Talking Heads',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/Talking Heads - Psycho Killer.mp3'),
//    },
//    {
//     name: "Everybody's Gotta Learn Sometime",
//     artist: 'The Korgis',
//     answerA: 'N.R.G.',
//     answerB: 'The Korgis',
//     answerC: 'Stackridge',
//     rightAnswer: 'The Korgis',
//     level: 2,
//     clip: new Audio("/music-clips/clips-lvl-2/The Korgis - Everybody's Got To Learn Sometime.mp3"),
//    },
//    {
//     name: 'Be My Baby',
//     artist: 'The Ronettes',
//     answerA: 'The Ronettes',
//     answerB: 'The Crystals',
//     answerC: 'The Shirelles',
//     rightAnswer: 'The Ronettes',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/The Ronettes - Be My Baby.mp3'),
//    },
//    {
//     name: 'Time Of The Season',
//     artist: 'The Zombies',
//     answerA: 'The Cranberries',
//     answerB: 'The Kinks',
//     answerC: 'The Zombies',
//     rightAnswer: 'The Zombies',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/The Zombies - Time Of The Season.mp3'),
//    },
//    {
//     name: 'Vitamin C',
//     artist: 'CAN',
//     answerA: 'The Beatles',
//     answerB: 'Pink Floyd',
//     answerC: 'CAN',
//     rightAnswer: 'CAN',
//     level: 2,
//     clip: new Audio('/music-clips/clips-lvl-2/Vitamin C - Can.mp3')
//    },
// ],

// [
//     {
//         name: "Sodade",
//         artist: "Césaria Evora",
//         level: 3,
//         clip: new Audio('/music-clips/clips-lvl-3/Cesaria Evora -  Sodade.mp3'),
//     },
//     {
//         name: "La vie en rose",
//         artist: "Edith Piaf",
//         level: 3,
//         clip: new Audio('/music-clips/clips-lvl-3/Edith Piaf - La Vie En Rose.mp3'),
//     },
//     {
//         name: "Best Of You",
//         artist: "Foo Fighters",
//         level: 3,
//         clip: new Audio('/music-clips/clips-lvl-3/Foo Fighters - Best Of You.mp3'),
//     },
//     {
//         name: "This I Love",
//         artist: "Gun's N Roses",
//         level: 3,
//         clip: new Audio("/music-clips/clips-lvl-3/Guns N' Roses - This I Love.mp3"),
//     },
//     {
//         name: "Time In A Bottle",
//         artist: "Jim Croce",
//         level: 3,
//         clip: new Audio('/music-clips/clips-lvl-3/Jim Croce -Time In A Bottle.mp3'),
//     },
//     {
//         name: "No Quarter",
//         artist: "Led Zeppelin",
//         level: 3,
//         clip: new Audio('/music-clips/clips-lvl-3/Led Zeppelin - No Quarter.mp3'),
//     },
//     {
//         name: "You Don't Own Me",
//         artist: "Lesley Gore",
//         level: 3,
//         clip: new Audio('/music-clips/clips-lvl-3/Lesley Gore - You Dont Own Me.mp3'),
//     },
//     {
//         name: "Fade Into You",
//         artist: "Mazzy Star",
//         level: 3,
//         clip: new Audio('/music-clips/clips-lvl-3/Mazzy Star - Fade Into You.mp3'),
//     },
//     {
//         name: "Pastime Paradise",
//         artist: "Patti Smith",
//         level: 3,
//         clip: new Audio('/music-clips/clips-lvl-3/Patti Smith - Pastime Paradise.mp3'),
//     },
//     {
//         name: "La bambola",
//         artist: "Patty Pravo",
//         level: 3,
//         clip: new Audio('/music-clips/clips-lvl-3/Patty Pravo - La bambola.mp3'),
//     },
//     {
//         name: "The Less I Know The Better",
//         artist: "Tame Impala",
//         level: 3,
//         clip: new Audio('/music-clips/clips-lvl-3/Tame Impala - The Less I Know The Better.mp3'),
//     },
//     {
//         name: "Remember",
//         artist: "The Shangri-Las",
//         level: 3,
//         clip:  new Audio('/music-clips/clips-lvl-3/The Shangri-Las - Remember (Walkin In The Sand).mp3'),
//     }
// ]
// ]

// const levelOneClips = playlist[0];
// const levelTwoClips = playlist[1];


const levelOneClips =
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

function getStage(arrPlaylist){
    let randI = Math.floor(Math.random()*arrPlaylist.length);
    let stage = arrPlaylist[randI];
    return stage;
}


let currentStage = getStage(levelOneClips);
let currentClip = currentStage.clip

function playAudio(){
    Audio.playAudio()
}

console.log(playAudio())
