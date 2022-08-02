// CLIPS INITIALIZATION
//LVL 1 CLIPS
let bohemianRhapsody = new Audio('/music-clips/clips-lvl-1/Bohemian Rhapsody - Queen.mp3')
let myHeartWill = new Audio('/music-clips/clips-lvl-1/Celine Dion - My Heart Will Always Go On.mp3')
let loseYourself = new Audio('/music-clips/clips-lvl-1/Eminem - Lose Yourself.mp3')
let americanBoy = new Audio('/music-clips/clips-lvl-1/Estelle - American Boy.mp3')
let crazy = new Audio('/music-clips/clips-lvl-1/Gnarls Barkley - Crazy.mp3')
let hallelujah = new Audio('/music-clips/clips-lvl-1/Jeff Buckley - Hallelujah.mp3')
let runningUp = new Audio('/music-clips/clips-lvl-1/Kate Bush - Running Up That Hill.mp3')
let pokerFace = new Audio('/music-clips/clips-lvl-1/Lady Gaga - Poker Face.mp3')
let theEarthSong = new Audio ('/music-clips/clips-lvl-1/Nina Simone - I Put a Spell On You.mp3')
let kiss = new Audio('/music-clips/clips-lvl-1/Prince - Kiss.mp3')
let letsGetIt = new Audio("/music-clips/clips-lvl-1/The Black Eyed Peas - Let's Get It Started.mp3")
let theEnd = new Audio('/music-clips/clips-lvl-1/The Doors - The End.mp3')
let messageInABottle = new Audio('/music-clips/clips-lvl-1/The Police - Message in a Bottle.mp3')
let iWannaDance = new Audio('/music-clips/clips-lvl-1/Whitney Houston - I Wanna Dance With Somebody.mp3')

//LVL 2 CLIPS
let pimp = new Audio('/music-clips/clips-lvl-2/50 cent - P.I.M.P..mp3')
let noOne = new Audio('/music-clips/clips-lvl-2/Alicia Keys - No One.mp3')
let badGuy = new Audio('/music-clips/clips-lvl-2/Billie Eilish - bad guy.mp3')
let preludes = new Audio('/music-clips/clips-lvl-2/Chopin - Prelude in E Minor op 28 no 4.mp3')
let summertime = new Audio('/music-clips/clips-lvl-2/Ella Fitzgerald and Louis Armstrong - Summertime.mp3')
let killingMeSoftly = new Audio('/music-clips/clips-lvl-2/Fugees - Killing Me Softly with His Song.mp3')
let madAboutYou = new Audio('/music-clips/clips-lvl-2/Hooverphonic - Mad about you.mp3')
let blueLights = new Audio('/music-clips/clips-lvl-2/Jorja Smith - Blue Lights.mp3')
let videoGames = new Audio('/music-clips/clips-lvl-2/Lana Del Rey - Video Games.mp3')
let walkOnTheWildSide = new Audio('/music-clips/clips-lvl-2/Lou Reed - Walk on the Wild Side.mp3')
let killingInTheNameOf = new Audio('/music-clips/clips-lvl-2/Rage Against The Machine - Killing In the Name.mp3')
let psychoKiller = new Audio('/music-clips/clips-lvl-2/Talking Heads - Psycho Killer.mp3')
let everybodySGotToLeanSometime = new Audio("/music-clips/clips-lvl-2/The Korgis - Everybody's Got To Learn Sometime.mp3")
let beMyBady = new Audio('/music-clips/clips-lvl-2/The Ronettes - Be My Baby.mp3')
let timeOfTheSeason = new Audio('/music-clips/clips-lvl-2/The Zombies - Time Of The Season.mp3')
let vitaminC = new Audio('/music-clips/clips-lvl-2/Vitamin C - Can.mp3')


//LVL 3 CLIPS
let sodade = new Audio('/music-clips/clips-lvl-3/Cesaria Evora -  Sodade.mp3')
let laVieEnRose = new Audio('/music-clips/clips-lvl-3/Edith Piaf - La Vie En Rose.mp3')
let bestOfYou = new Audio('/music-clips/clips-lvl-3/Foo Fighters - Best Of You.mp3')
let heatWaves = new Audio('/music-clips/clips-lvl-3/Glass Animals - Heat Waves.mp3')
let thisIlove = new Audio("/music-clips/clips-lvl-3/Guns N' Roses - This I Love.mp3")
let timeInABottle = new Audio('/music-clips/clips-lvl-3/Jim Croce -Time In A Bottle.mp3')
let noQuarter = new Audio('/music-clips/clips-lvl-3/Led Zeppelin - No Quarter.mp3')
let youDontOwnMe = new Audio('/music-clips/clips-lvl-3/Lesley Gore - You Dont Own Me.mp3')
let fadeIntoYou = new Audio('/music-clips/clips-lvl-3/Mazzy Star - Fade Into You.mp3')
let pastimeParadise = new Audio('/music-clips/clips-lvl-3/Patti Smith - Pastime Paradise.mp3')
let laBambola = new Audio('/music-clips/clips-lvl-3/Patty Pravo - La bambola.mp3')
let theLessIKnowTheBetter = new Audio('/music-clips/clips-lvl-3/Tame Impala - The Less I Know The Better.mp3')
let remember = new Audio('/music-clips/clips-lvl-3/The Shangri-Las - Remember (Walkin In The Sand).mp3')

// ARRAYS OF OBJECTS : 
//LVL 1 : NAME, ANSWERS & CLIP
//LVL 2 : NAME, ARTIST, ANSWERS & CLIP
//LVL 3 : NAME, ARTIST & CLIP

let levelOneclips = [
    {
        name: 'Queen - Bohemian Rhapsody',
        answerA: "Sorry Jaime - I'm Forever DC",
        answerB: 'Queen - Bohemian Rhapsody',
        answerC: 'Freddie Mercury - Bohemian Rhapsody',
        clip: bohemianRhapsody,

    }, 
    {
        name: 'Céline Dion - My Heart Will Go On',
        answerA: "Céline Dion - It's All Coming Back To Me Now",
        answerB: 'Céline Dion - Titanic',
        answerC: 'Céline Dion - My Heart Will Go On',
        clip: myHeartWill,
    },
    {
        name: 'Eminem - Lose Yourself',
        answerA: 'Eminem - Till I Collapse',
        answerB: 'Eminem - Lose Yourself',
        answerC: 'Eminem - Mockingbird',
        clip: loseYourself,
    },
    {
        name: 'Estelle - American Boy',
        answerA: 'Stella - American Boy',
        answerB: 'Estelle - American Boy',
        answerC: 'Esther - American Boy',
        clip: americanBoy,
    },
    {
        name: 'Gnarls Barkley - Crazy',
        answerA: 'Nils Barkley - Crazy',
        answerB: 'Nils Barkley - I remember when',
        answerC: 'Gnarls Barkley - Crazy',
        clip: crazy,
    },
    {
        name: 'Jeff Buckley - Hallelujah',
        answerA: 'Jeff Buckley - Hallelujah',
        answerB: 'Shrek - Hallelujah',
        answerC: 'Jeffrey Beckley - Hallelujah',
        clip: hallelujah,
    },
    {
        name: 'Kate Bush - Running Up That Hill',
        answerA: 'Kate Bush - Running Up That Hill',
        answerB: 'Stranger Things - Running Up That Hill',
        answerC: 'Kate Bush - Cloudbusting',
        clip: runningUp,
    },
    {
        name: 'Lady Gaga - Poker Face',
        answerA: 'Lady Gaga - Bad Romance',
        answerB: 'Lady Gaga - PopopokerFacePopopokerFace',
        answerC: 'Lady Gaga - Poker Face',
        clip: pokerFace,
    },
    {
        name: 'Michael Jackson - The Earth Song',
        answerA: 'Michael Jackson - What About Us',
        answerB: 'Michael Jackson - The Earth Song',
        answerC: 'Even MJ did a clip about Earth and nothing happened?',
        clip: theEarthSong,
    },
    {
        name: 'Prince - KISS',
        answerA: 'Prince - KISS',
        answerB: 'The Revolution - KISS',
        answerC: 'His Purple Majesty - KISS',
        clip: kiss,
    },
    {
        name: "The Black Eyed Peas - Let's Get It Started",
        answerA: "The Black Eyed Peas - PUMP IT",
        answerB: "The Black Eyed Peas - Let's Get It Started",
        answerC: "The Black Eyed Peas - Hey Mama", // 
        clip: letsGetIt,
    },
    {
        name: 'The Doors - The End',
        answerA: 'Velvet Underground - Venus In Furs',
        answerB: 'Velvet Underground - Sunday Morning',
        answerC: 'The Doors - The End',
        clip: theEnd,
    },
    {
        name: 'The Police - Message In A Bottle',
        answerA: 'The Police - Time In A Bottle',
        answerB: 'The Police - S.O.S to the World',
        answerC: 'The Police - Message In A Bottle',
        clip: messageInABottle,
    },
    {
        name: 'Whitney Houston - I Wanna Dance With Somebody',
        answerA: 'Cyndi Lauper - Girls Just Want To Have Fun',
        answerB: 'Drew Sycamore - I Wanna Be Dancing',
        answerC: 'Whitney House - I Wanna Dance With Somebody',
        clip: iWannaDance,
    }
]
let levelTwoClips= [
    {
    name: 'PIMP',
    artist: '50 cent',
    answerA: '50 cent',
    answerB: 'Jadakiss',
    answerC: 'The Game',
    clip: pimp,
   },
   {
    name: 'No One',
    artist: 'Alicia Keys',
    answerA: 'Jorja Smith',
    answerB: 'Alicia Keys',
    answerC: 'Whitney House',
    clip: noOne,
   },
   {
    name: 'Bad Guy',
    artist: 'Bilie Eilish',
    answerA: 'Lana Del Rey',
    answerB: 'Lady Gaga',
    answerC: 'Bilie Eilish',
    clip: badGuy,
   },
   {
    name: 'Prelude in E Minor, Op. 28, n°4',
    artist: 'Chopin',
    answerA: 'Chopin',
    answerB: 'Beethoven',
    answerC: 'Vivaldi',
    clip: preludes,
   },
   {
    name: 'Summertime',
    artist: 'Ella Fitzgerald & Louis Armstrong',
    answerA: 'Ella Fitzgerald & Louis Armstrong',
    answerB: 'Aretha Franklin & Louis Armstrong',
    answerC: 'Nina Simone & Louis Armstrong',
    clip: summertime,
   },
   {
    name: 'Killing Me Softly',
    artist: 'Lauryn Hill',
    answerA: 'Roberta Flack',
    answerB: 'Ruth Jacobs',
    answerC: 'Lauryn Hill',
    clip: killingMeSoftly,
   },
   {
    name: 'Mad About You',
    artist: 'Hooverphonic',
    answerA: 'Son Little',
    answerB: 'Sting',
    answerC: 'Hooverphonic',
    clip: madAboutYou,
   },
   {
    name: 'Blue Lights',
    artist: 'Jorja Smith',
    answerA: 'SZA',
    answerB: 'Jorja Smith',
    answerC: 'Kali Uchis',
    clip: blueLights,
   },
   {
    name: 'Video Games',
    artist: 'Lana Del Rey',
    answerA: 'Lana Del Rey',
    answerB: 'Lizzie Grant',
    answerC: 'Lorde',
    clip: videoGames,
   },
   {
    name: 'Walk On The Wild Side',
    artist: 'Lou Reed',
    answerA: 'Jim Morrison',
    answerB: 'Lou Reed',
    answerC: 'David Bowie',
    clip: walkOnTheWildSide,
   },
   {
    name: 'Killing In The Name',
    artist: 'Rage Against The Machine',
    answerA: 'Spliknot',
    answerB: 'Run The Jewels',
    answerC: 'Rage Against The Machine',
    clip: killingInTheNameOf,
   },
   {
    name: 'Psycho Killer',
    artist: 'Talking Heads',
    answerA: 'Ramones',
    answerB: 'Talking Heads',
    answerC: 'Television',
    clip: psychoKiller,
   },
   {
    name: "Everybody's Gotta Learn Sometime",
    artist: 'The Korgis',
    answerA: 'N.R.G.',
    answerB: 'The Korgis',
    answerC: 'Stackridge',
    clip: everybodySGotToLeanSometime,
   },
   {
    name: 'Be My Baby',
    artist: 'The Ronettes',
    answerA: 'The Ronettes',
    answerB: 'The Crystals',
    answerC: 'The Shirelles',
    clip: beMyBady,
   },
   {
    name: 'Time Of The Season',
    artist: 'The Zombies',
    answerA: 'The Cranberries',
    answerB: 'The Kinks',
    answerC: 'The Zombies',
    clip: timeOfTheSeason,
   },
   {
    name: 'Vitamin C',
    artist: 'CAN',
    answerA: 'The Beatles',
    answerB: 'Pink Floyd',
    answerC: 'CAN',
    clip: vitaminC,
   },
]
let levelThreeClips = [
    {
        name: "Sodade",
        artist: "Césaria Evora",
        clip: sodade,
    },
    {
        name: "La vie en rose",
        artist: "Edith Piaf",
        clip: laVieEnRose,
    },
    {
        name: "Best Of You",
        artist: "Foo Fighters",
        clip: bestOfYou,
    },
    {
        name: "This I Love",
        artist: "Gun's N Roses",
        clip: thisIlove,
    },
    {
        name: "Time In A Bottle",
        artist: "Jim Croce",
        clip: timeInABottle,
    },
    {
        name: "No Quarter",
        artist: "Led Zeppelin",
        clip: noQuarter,
    },
    {
        name: "You Don't Own Me",
        artist: "Lesley Gore",
        clip: youDontOwnMe,
    },
    {
        name: "Fade Into You",
        artist: "Mazzy Star",
        clip: fadeIntoYou,
    },
    {
        name: "Pastime Paradise",
        artist: "Patti Smith",
        clip: pastimeParadise,
    },
    {
        name: "La bambola",
        artist: "Patty Pravo",
        clip: laBambola,
    },
    {
        name: "The Less I Know The Better",
        artist: "Tame Impala",
        clip: theLessIKnowTheBetter,
    },
    {
        name: "Remember",
        artist: "The Shangri-Las",
        clip: remember,
    }
]


// GOOD ANSWERS, CLIP
class stageOne {
    constructor(correctAnswer, answerA, answerB, answerC, clip) {
        this.name = correctAnswer;
        this.answers = [answerA, answerB, answerC]
        this.clip = clip;
    }

    playSong(){
        this.clip.play()
    }

    goodAnswer(){
        for (let i = 0; i < this.answers.length; i++){
            if('')
        }
    }
}


class stageTwo {
    constructor(correctAnswer, answerA, answerB, answerC, clip){
        this.artist = correctAnswer;
        this.answers = [answerA, answerB, answerC]
        this.clip = clip;
    }

    playSong(){
        this.clip.play()
    }
}


class stageThree {
    constructor(correctAnswer, clip){
        this.name = correctAnswer;
        this.clip = clip;
    }

    playSong(){
        this.clip.play()
    }
}