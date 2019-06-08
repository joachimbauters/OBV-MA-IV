import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, type }) => {
  if (type === "white") {
    return (
      <>
        <button className={styles.blue}>{text}</button>
      </>
    );
  } else if (type === "pink") {
    return (
      <>
        <button className={styles.pink}>{text}</button>
      </>
    );
  } else if (type === "outline") {
    return (
      <>
        <button className={styles.outline}>{text}</button>
      </>
    );
  }
};

export default Button;
