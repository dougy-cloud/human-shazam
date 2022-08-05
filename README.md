# The Human Shazam

[Click here to see deployed game](https://dougy-cloud.github.io/human-shazam/)

## Description
Human Shazam is a music quiz game to determine whether the player know its music classic or not. It has three difficulty levels. Depending on these difficulty the player would have to guess either the name of the interpret of the song or the name of the song itself. The game ends when three attempts to beat the fifteenth stages are consumed. After that, the player will have access to its statistics : final rank, songs guesses.

## MVP
* game has three difficulty levels
* music clips are randomly played
* the left side screen gauge is filled accordingly to the stages beated and update the current rank
* the player has three attempts
* game over screen shows player's stats and offers to retry
* winning screen offers to replay game

## Backlog
_List of features you might implement after the MVP_
* music in intro screen
* album picture and small description when a song is found


## Data structure
_List of classes and methods_
class Audio()
getRandomStage()
getClip()
pauseClip()
printAnswers()
updateGauge()
resetList()
updateStage()
updateRank()
goodAnswer()

## States y States Transitions
_List of states (views) of your game_
* intro screen
* gaming-screen lvl-one lvl-two
* game-over-screen
* winning-screen


## Task
_List of tasks in order of priority_
main - build screens
main - load clips
main - build game logic 


## Links

- [Slides Link](http://slides.com)
- [Github repository Link](https://github.com/dougy-cloud/human-shazam)
- [Deployment Link](http://github.com)