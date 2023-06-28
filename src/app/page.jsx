"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Rules } from "../../modals/Rules/Rules";
import { SelectMode } from "../../modals/Select Mode/SelectMode";
import { GrCircleInformation } from "react-icons/gr";

export default function Home() {
  const [rules, setRules] = useState(false);
  const [mode, setMode] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.help}>
          <div className={styles.text}>
            <GrCircleInformation />
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
