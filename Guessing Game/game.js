// program data:
var number = Math.floor(Math.random() * 100);
var guess;
var limit = 5;
var won = false;
var guesses = [];

// game control loop - iterates for each try
for(var i = 0; i < limit;)
{
    
    // prompt user for their guess
    do{
        guess = parseInt(prompt("Guess a number"));
    } while(isNaN(guess) || isPreviousGuess(guess));
    
        // if correct: let the user know they won
        if(guess==number)
        {
            document.getElementById("result").innerHTML = "Correct! You won.";
            won = true;
            break;
        }
        // if incorrect: let the user know
        else
        {
            guesses[i] = guess;
            alert("incorrect. \nYou have guesses: " + guesses.toString() + "\nTries remaining: " + (limit-i-1));
        }
        i++;
}

// if the user ran out of tries, let them know the game is over
if(!won){
    document.getElementById("result").innerHTML = "Sorry, you ran out of tries. Game over. <br> The correct number was : " + number;
}

// function to check repetition
function isPreviousGuess()
{
    for(var i = 0; i < guesses.length; i++)
    {
        if(guesses[i] == guess)
        {
            return true;
        }
    }
    return false;
}