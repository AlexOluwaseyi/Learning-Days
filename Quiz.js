pool =[
    {
        "Question":"In which year did Nigeria gain its independence?",
        "Options":["1914\n", "1999\n", "1960\n"],
        "Answer": 1960
    },
    {
        "Question": "At what temperature (in celcius) does water starts to boil?",
        "Options":[0, 32, 100],
        "Answer":100
    },
    {
        "Question":"How many teeth does an adult human have?",
        "Options":[12, 32, 48],
        "Answer":32
    },
    {
        "Question": "A person from England is called what?",
        "Options": ["English", "British", "European"],
        "Answer": "English"
    }
]

function start(){
    console.log("Welcome to the Ultimate Quiz!");
    console.log("*******************************");
    console.log("What is your name?");
    const userName = prompt("Enter your name here ");
    console.log("Welcome "+userName);
}

function decider(){
    console.log("Will you like to play the quiz game now? Y/N");
    let decision = prompt("Will you like to play the quiz game now? Y/N");
    if (decision.toLowerCase()==="y" || decision.toLowerCase()==="yes"){
        console.log("You have chosen to play the quiz game now.");
        playQuiz();
    }
    else{
        console.log("You have decided not play the game quiz now.\nPlease come back whenever you feel more confident to play.")
        start();
    }
}

var scores=0;
function playQuiz(){
    for (let i=0;i<pool.length; i++){
        console.log(pool[i]["Question"]);
        for (let j=0; j<pool[i]["Options"]; j++){
            console.log(pool[i]["Options"][j]);
        }
    var answer = prompt("Enter your answer here ");
    if (answer.toString().toLowerCase()===pool[i]["Answer"].toString().toLowerCase()){
        console.log("Correct answer!");
        scores++;
    }
    else{
        console.log("Wrong answer! The correct answer is "+ pool[i]["Answer"].toString().toTitleCase())
    }
    
    //return answer.toString().toLowerCase()===pool[i]["Answer"].toString().toLowerCase()?scores++:scores=scores
    }

}

function endGame(){
    console.log(userName +", we've come to the end of the game!");
    console.log("Your total scores is: " +scores);
    scores>=3?console.log("You played well."):console.log("Better luck next time.")
    console.log("Will you like to play again?")
    decision = prompt("Will you like to play the quiz game now? Y/N");
    if (decision.toLowerCase()==="y" || decision.toLowerCase()==="yes"){
        console.log("Alright " +userName+ ". You have chosen to play the quiz game again.");
        playQuiz();
    }
    else{
        console.log("You have decided not play the game quiz again.\nPlease come back whenever you feel more confident to retry.")
        start();
    }
}


start()
decider()
playQuiz()
endGame()