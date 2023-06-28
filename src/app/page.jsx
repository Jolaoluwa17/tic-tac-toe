"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Rules } from "../../modals/Rules/Rules";
import { SelectMode } from "../../modals/Select Mode/SelectMode";
import { GrCircleInformation } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [rules, setRules] = useState(false);
  const [mode, setMode] = useState(false);
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        duration: 1000, // Set the duration of animation (in milliseconds)
        delay: 200, // Set the delay before animation starts (in milliseconds)
      });
    }
  }, []);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);

    // Hide the message after 5 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.help}>
          <div className={styles.text}>
            <div className="icon" onClick={handleClick}>
              <GrCircleInformation />
            </div>
            {showMessage && (
        <div
          className="inner-text"
          style={{
            backgroundColor: "white",
            fontSize: "12px",
            width: "100px",
            padding: "10px",
            borderRadius: "5px",
            color: "black",
          }}
          data-aos="fade-right"
        >
          New Features Coming Soon ★
        </div>
      )}
          </div>
        </div>
        <div className={styles.left}>
          <h1>
            Let's Play the <br /> Tic-tac-toe <br /> Game
          </h1>
          <div className={styles.homeControlBtn}>
            <button onClick={() => setMode(true)}>Start A New Game</button>
            <div className={styles.rulesBtn} onClick={() => setRules(true)}>
              Rules
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/images/Tictactoe.png" alt="" />
        </div>
      </div>
      <Rules trigger={rules} setTrigger={setRules} />
      <SelectMode trigger={mode} setTrigger={setMode} />
    </div>
  );
}
