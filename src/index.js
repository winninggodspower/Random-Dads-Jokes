var moment = require('moment')
import generateJoke from "./generateJoke"
import main from './styles/main.scss'
import laughtEmoji from './assets/laugh-emoji.gif'

var myDate = new Date()
var newDate = moment(myDate).format('MMM Do YY')
console.log(newDate);

generateJoke();

document.getElementById('fustrationImg').src = laughtEmoji;


document.getElementById('jokeBtn').addEventListener('click',()=>{
    generateJoke()
})
