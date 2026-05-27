import styles from "./index.module.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaWifi } from "react-icons/fa6";

import { IoIosBatteryFull } from "react-icons/io";

import React from "react";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <span>6:46</span>
      <div className={styles.iyland}/>
      <div className={styles.right}>
        <HiOutlineDotsHorizontal />
        <FaWifi />
        <IoIosBatteryFull />
      </div>
    </div>
  );
};

export default Navbar;
