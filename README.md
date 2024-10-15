# Tic Tac Toe Game

Welcome to the Tic Tac Toe Game! This is a simple yet engaging game that allows users to play Tic Tac Toe either against an AI or with another player on the same device. Built using **Next.js**, this project demonstrates interactive game mechanics and user interface design.

## Features

- **Single Player Mode**: Play against an AI that uses a basic algorithm to make decisions.
- **Two Player Mode**: Play with another person on the same device, taking turns.
- **Responsive Design**: The game is fully responsive and works well on both desktop and mobile devices.
- **Reset Functionality**: Easily reset the game after each round to start fresh.
- **Score Tracking**: Keep track of wins for both players during the session.

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **JavaScript**: The primary programming language used in this project.
- **CSS**: For styling the components and enhancing the user experience.

## Installation

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the application**:
   ```bash
   npm run dev
   ```

The game should now be running on `http://localhost:3000`.

## How to Play
1. Choose your mode:
  - Single Player: Play against the AI.
  - Two Player: Play with another person on the same device.
    
2. Take turns clicking on the grid to place your marker (X or O).

3. The first player to align three markers in a row (horizontally, vertically, or diagonally) wins!

4. After each game, you can reset the board to play again.

## Game Logic
The game logic checks for a win condition after each move. If a player aligns three of their markers, a message will display announcing the winner. If all cells are filled and no player has won, the game will declare a draw.
