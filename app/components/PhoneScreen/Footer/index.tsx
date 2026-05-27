import { GiMoebiusStar } from "react-icons/gi";
import styles from "./index.module.css";

import React from "react";
import { PiTrophyDuotone } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { IoExtensionPuzzleSharp, IoPersonCircleSharp } from "react-icons/io5";

function index() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.first}>
          <GiMoebiusStar />

          <span>Home</span>
        </div>
        <div className={styles.first}>
          <PiTrophyDuotone />

          <span>Challenges</span>
        </div>
        <div className={styles.first}>
          <FaCode />

          <span>Problems</span>
        </div>
        <div className={styles.first}>
          <IoExtensionPuzzleSharp />

          <span>Quizes</span>
        </div>
        <div className={styles.first}>
          <IoPersonCircleSharp />

          <span>Profile</span>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}

export default index;
