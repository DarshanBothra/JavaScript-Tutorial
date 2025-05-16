// 1. Deposit some money
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine to see if the user won
// 5. Check if the user won
// 6. Give the user their winnings/ take their bet
// 7. Play again 

// Imports

const prompt = require("prompt-sync")();

// Functions

const deposit = () => {

    while (true){
            const deposit_amount = parseFloat(prompt("Enter a deposit amount: ")); // string by default, parseFloat() converts the entered amount to a float
        // "17.2"-> 17.2, "hello"-> NaN

        if (isNaN(deposit_amount) || deposit_amount <= 0){
            console.log("Invalid Deposit amount, try again");
        }
        else{
            return deposit_amount;
        }

    }

}

const getLines = () => {
    while (true){
        const lines = parseFloat(prompt("Enter the number of lines to bet on (1-3): "));

        if (isNaN(lines) || lines <= 0 || lines > 3){
            console.log("Invalid Number of lines, enter between 1-3");
        }
        else{
            return lines;
        }

    }
}

const getBet = (balance, lines) => {
    max_bet = balance;
    while (true){

        const bet = parseFloat(prompt("Enter bet per line: "))
        
        if (isNaN(bet) || bet > balance/lines || bet <= 0){
            console.log("Invalid Bet!");
        }
        else{
            return bet;
        }
    }
}



// Main
let balance = deposit();
const lines = getLines()
const bet = getBet(balance, lines);

console.log("Deposit amount is $" + balance)
console.log("Placed bet on " + lines + " line(s)")
console.log("Bet Amount per line is $" + bet + ". Total = " + bet*lines);
