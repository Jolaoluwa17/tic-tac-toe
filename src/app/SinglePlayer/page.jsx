"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import ScoreBoard from "../../../components/Score Board/ScoreBoard";
import Board from "../../../components/Board/Board";
import { VscDebugRestart } from "react-icons/vsc";
import Link from "next/link";

export default function SinglePlayer() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0, drawScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(5);
  const [message, setMessage] = useState("");

  const handleBoxClick = (boxIdx) => {
    if (!gameOver && !board[boxIdx]) {
      // Player's move
      const updatedBoard = [...board];
      updatedBoard[boxIdx] = "X";
      setBoard(updatedBoard);

      const winner = checkWinner(updatedBoard);
      if (winner) {
        if (winner === "X") {
          setScores((prevScores) => ({
            ...prevScores,
            xScore: prevScores.xScore + 1,
          }));
        } else if (winner === "O") {
          setScores((prevScores) => ({
            ...prevScores,
            oScore: prevScores.oScore + 1,
          }));
        }
        setGameOver(true);
      } else if (updatedBoard.every((value) => value !== null)) {
        // Step 3: Check for a draw
        setScores((prevScores) => ({
          ...prevScores,
          drawScore: prevScores.drawScore + 1,
        }));
        setGameOver(true);
      }

      // Computer's move
      const computerMove = getComputerMove(updatedBoard);
      if (computerMove !== null) {
        updatedBoard[computerMove] = "O";
        setBoard(updatedBoard);

        const computerWinner = checkWinner(updatedBoard);
        if (computerWinner) {
          handleGameEnd(computerWinner);
          return;
        }

        if (updatedBoard.every((value) => value !== null)) {
          handleGameEnd("draw");
          return;
        }
      }
    }
  };

  const getComputerMove = (board) => {
    const availableMoves = [];
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        availableMoves.push(i);
      }
    }

    if (availableMoves.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  };

  // const getComputerMove = (board) => {
  //   const availableMoves = [];
  //   const winningMoves = [];

  //   for (let i = 0; i < board.length; i++) {
  //     if (!board[i]) {
  //       availableMoves.push(i);
  //     }
  //   }

  //   if (availableMoves.length === 0) {
  //     return null;
  //   }

  //   for (let i = 0; i < availableMoves.length; i++) {
  //     const testBoard = [...board];
  //     testBoard[availableMoves[i]] = 'O';

  //     if (checkWinner(testBoard) === 'O') {
  //       return availableMoves[i];
  //     }

  //     testBoard[availableMoves[i]] = 'X';

  //     if (checkWinner(testBoard) === 'X') {
  //       winningMoves.push(availableMoves[i]);
  //     }
  //   }

  //   if (winningMoves.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * winningMoves.length);
  //     return winningMoves[randomIndex];
  //   }

  //   const randomIndex = Math.floor(Math.random() * availableMoves.length);
  //   return availableMoves[randomIndex];
  // };

  const handleGameEnd = (winningCondition) => {
    console.log("Winning Condition:", winningCondition);

    let message = "";
    if (winningCondition === "X") {
      message = "Player wins!";
    } else if (winningCondition === "O") {
      message = "Computer wins!";
      setScores((prevScores) => ({
        ...prevScores,
        oScore: prevScores.oScore + 1,
      }));
    } else {
      message = "It's a draw!";
    }
    setMessage(message);

    // Update scores, reset board, etc.
    startTimer();
    setTimeout(resetBoard, 5000);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log("Winning condition:", [x, y, z]);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setTimer(5); // Reset the timer
  };

  const startTimer = () => {
    setTimer(5);

    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdown);
          return 0;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);
  };

  return (
    <div className={styles.startRoot}>
      <div className={styles.gameBox}>
        <ScoreBoard scores={scores} xPlaying={xPlaying} />
        <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
        <div className={styles.controls}>
          <div className={styles.resetBtn} onClick={resetBoard}>
            <VscDebugRestart />
          </div>
          <Link href="/">
            <button className={styles.backBtn}>Back</button>
          </Link>
        </div>
        <div className={styles.info}>
          {checkWinner(board) ? `Winner: ${message} 🎉` : ""}
          <br />
          {checkWinner(board) ? `Game will restart in ${timer} seconds` : ""}
        </div>
      </div>
    </div>
  );
}
