let randomNumber=getRandomNumber();
let guesses=[];
let maxAttempts = 3;  



function getRandomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

function guessNumber(){


    
    while (guesses.length < maxAttempts) {
        let userGuess = parseInt(prompt("Attempt "+(guesses.length+1)+" of 3 : "+"Guess a number (1-5) : "));
    
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 5) {
            alert("Please enter a valid number between 1 and 5");
            continue;  
        }
    
        guesses.push(userGuess);
    
        if (userGuess === randomNumber) {
            alert("Correct!");
            break;  
        } else {
            if(guesses.length===3){
                alert("You lose!"+" Number was "+randomNumber+" \nYour Guesses : "+guesses);
            }else{
                alert("Wrong guess!");
            }
            
        }
    }

    
}