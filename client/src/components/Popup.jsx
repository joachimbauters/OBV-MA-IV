import React, { Component } from "react";
import styles from "./Popup.module.css";
import img from "../assets/ticket.svg";

class Popup extends Component {
  render() {
    return (
      <div className={styles.popup}>
        <div className={styles.popupinner}>
          <div className={styles.popcontent}>
            <h1 className={styles.title}>jippie!</h1>
            <p className={styles.subtitle}>
              Een cadeautje van OBV omdat jij jouw verhaal aan ons
              toevertrouwde.
            </p>
            <img src={img} alt="ticket" className={styles.ticket} />
            <div className={styles.buttons}>
              <a href={img} download className={styles.download}>
                <button className={styles.buttonwhite}>Download korting</button>
              </a>
              <button
                onClick={this.props.closePopup}
                className={styles.buttonoutline}
              >
                Ga verder
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
