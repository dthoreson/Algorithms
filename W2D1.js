//Support your local standard library //

//The Math Library//
// var floor = Math.floor(1.8); 
// var ceiling = Math.ceil( Math.PI );
// var random = Math.random();
    
// console.log(floor); //1//
// console.log(ceiling); //4//
// console.log(random); //Any # from 0-1//


//Dice Roller//
function d6() {
    var roll = Math.ceil(Math.random() * 6);

    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);




//Consult the Oracle//
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function randomAnswer(){
    // var answer = Math.floor(Math.random() * (lifesAnswers.length))
    var answer = Math.ceil(Math.random() * (lifesAnswers.length-1))
    return answer
}

var oracle = randomAnswer()
console.log(lifesAnswers[oracle])