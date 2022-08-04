class Audio {
    constructor(url) {
        this.url = url;
    }
}

class StageOne{
    constructor(){
        this.playlist = [];
        this.song = song;
        this.choices = [a, b, c];
        this.correctAnswer = correctAnswer;
        this.title = title;
    }

    addLevelOnePlaylist(){
        this.playlist.push(levelOneClips);
        }

    setStage(){
        let randomNum = Math.floor(Math.random()*this.music.length);
        return levelOneClips[randomNum];
        }

    playSong(){
        this.song = levelOneClips[randomNum].clip;
    }

    setChoices(){
        this.choices[0] = levelOneClips[randomNum].answerA;
        this.choices[1] = levelOneclips[randomNum].answerB;
        this.choices[2] = levelOneclips[randomNum].answerC;
        return this.choices 
    }

    nextStage(){
        let
    }

}



let randomMusic = Math.floor(Math.random()*levelOneclips.length);
console.log(randomMusic)

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

