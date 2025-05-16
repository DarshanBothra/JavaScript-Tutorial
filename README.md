
# 🎰 Slot Machine Game (CLI)

A simple command-line Slot Machine game built with Node.js. Users can deposit money, place bets on up to 3 lines, spin the machine, and win virtual money based on matched symbols!

---

## 📦 Features

- Deposit money and place bets
- Choose the number of lines to bet on (1 to 3)
- Randomized slot machine spins
- Winnings calculated based on matched symbols
- Play until you choose to exit or your balance hits zero

---

## 🚀 Getting Started

### 🔧 Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (optional)

---

## 🖥️ Running the Game

### Option 1: Clone from GitHub

```bash
git clone https://github.com/DarshanBothra/Slot-Machine-JS-Tutorial-Project.git
cd JavaScript-Tutorial/slot-machine-game
npm install
node script.js
```

> Ensure you have `prompt-sync` installed. If not:
>
> ```bash
> npm install prompt-sync
> ```

---

### Option 2: Run via Docker

You can run the game directly using Docker without cloning the repository:

```bash
docker run -it darshanbothra/slot-machine-game:latest
```

> The `-it` flag enables interactive mode so the terminal input works correctly.

---

## 🗂️ Project Structure

```
slot-machine-game/
├── script.js        # Main game logic
├── Dockerfile       # Docker configuration
└── package.json     # Node.js dependencies
```

---

## 📜 License

MIT License

---

## 🙌 Author

**Darshan Bothra**  
GitHub: [@DarshanBothra](https://github.com/DarshanBothra)

---

## 🎮 Spin away and test your luck!
