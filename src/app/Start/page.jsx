"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import ScoreBoard from "../../../components/Score Board/ScoreBoard";
import Board from "../../../components/Board/Board";
import { VscDebugRestart } from "react-icons/vsc";
import Link from "next/link";

export default function Startgame() {
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

  const handleBoxClick = (boxIdx) => {
    // Step 1: Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

    // Step 2: Check if either player has won the game
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        setScores((prevScores) => ({
          ...prevScores,
          oScore: prevScores.oScore + 1,
        }));
      } else {
        setScores((prevScores) => ({
          ...prevScores,
          xScore: prevScores.xScore + 1,
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

    // Step 4: Change active player
    setXPlaying(!xPlaying);

    // Step 5: Delayed reset after 5 seconds
    if (winner || updatedBoard.every((value) => value !== null)) {
      setTimeout(resetBoard, 5000);
      startTimer();
    }
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

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setTimer(5); // Reset the timer
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
          {checkWinner(board) ? `Winner: ${checkWinner(board)} 🎉` : ""}
          <br />
          {checkWinner(board) ? `Game will restart in ${timer} seconds` : ""}
        </div>
      </div>
    </div>
  );
}
