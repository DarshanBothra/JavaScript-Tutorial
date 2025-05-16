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

const spin = (lines) => {
    console.log("Spinning...")
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
    // print the spin result

    for (let i = 0; i < lines; i++){
        let st = ""
        for (let j = 0; j < COLS; j++){
            st += reels[j][i]
            st += " | "
        }
        console.log(st)
    }
    return reels;
    
}

const checkWin = (reels) => {
    // default is lose
    const wins = {
        1: false,
        2: false,
        3: false,
    }

    for (let i =0; i < ROWS; i++){
        let win = true;
        for (let j = 1; j < COLS; j++){
            win = win && (reels[j-1][i] === reels[j][i]);
        }
        if (win === true){
            wins[i+1] = reels[0][i];
        }
        
    }

    return wins
}

const getWinnings = (wins, bet, lines) =>{
    let winnings = 0;
    for (let row = 0; row < lines; row++){
        const multiplier = row+1;
        if (wins[multiplier] != false){
            winnings += multiplier*bet*SYMBOL_VALUES[wins[multiplier]];
        }
    }
    return winnings;
    
}

// Main
let balance = deposit();
console.log("Deposit amount: $" + balance)
while (true){
    const lines = getLines()
    const bet = getBet(balance, lines);
    balance -= (bet*lines)
    console.log("==========")
    console.log("Placed bet on " + lines + " line(s)")
    console.log("Bet Amount per line: $" + bet + "\n----------\nTotal Bet: $" + bet*lines + "\nRemaining Balace: $" + balance);
    console.log("----------")
    const reels = spin(lines);
    const wins = checkWin(reels)
    const winnings = getWinnings(wins, bet, lines);
    console.log("Winnings: $" + winnings);
    balance += winnings;
    console.log("Remaining Balance: $" + balance);
    let play_again = ""
    console.log("==========")
    if (balance === 0){
        console.log("Your balance is now $0. You can't play anymore");
        break;
    }
    while (play_again != "n" || play_again != "N" || play_again != "y" || play_again != "Y"){
        console.log("----------")
        play_again = prompt("Do you wish to play again? (y/n): ")
        if (play_again == "n" || play_again == "N"){
            break;
        }
        else if(play_again == "y" || play_again == "Y"){
            break;
        }
        else{
            console.log("Invalid Command!")
            continue;
        }
    }
    if (play_again == "n" || play_again == "N"){
        console.log("Cashed Out: $" + balance);
        break;
    }
    else{
        continue;
    }
}

