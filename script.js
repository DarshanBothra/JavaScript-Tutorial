// 1. Deposit some money
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine to see if the user won
// 5. Check if the user won
// 6. Give the user their winnings/ take their bet
// 7. Play again 

// Imports

const prompt = require("prompt-sync")();

// Global Vars

const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}
const SYMBOL_VALUES ={
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

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

const spin = () => {
    const symbols = [];

    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i < count; i++){
            symbols.push(symbol)
        }
    }

    const reels = []; // each array represents a column of the slot machine

    for (let i = 0; i < COLS; i++){
        const temp = [];
        const reel_symbols = [...symbols]
        for (let j = 0; j < ROWS; j++){
            const random_index = Math.floor(Math.random() *reel_symbols.length);
            const selected_symbol = reel_symbols[random_index];
            temp.push(selected_symbol);
            reel_symbols.splice(random_index, 1);
        }
        reels.push(temp);
    }
    return reels;
    
}

// Main
let balance = deposit();
const lines = getLines()
const bet = getBet(balance, lines);

console.log("Deposit amount is $" + balance)
console.log("Placed bet on " + lines + " line(s)")
console.log("Bet Amount per line is $" + bet + ". Total = " + bet*lines);

const reels = spin();
console.log(reels)