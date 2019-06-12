import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styles from "./Vragen.module.css";
import vragen from "../../constants/vragen.json";

class Vragen extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <>
        <div className={styles.container}>
          <h1 className={styles.hide}>vragen</h1>
          <p className={styles.text}>
            Nu je wat inpiratie hebt opgedaan, kun je één van deze
            vooropgestelde vraag kiezen om jouw verhaal te vertellen.
          </p>
          <h2 className={styles.label}>
            Kies 1 van de volgende vragen waar jij wat over wilt vertellen.
          </h2>
          <div className={styles.wrapper}>
            <div className={styles.switchfield}>
              {Object.values(vragen).map(vraag => (
                <>
                  <input
                    type="radio"
                    id={vraag.id}
                    name="vraag"
                    value={vraag.id}
                    className={styles.switchfieldinput}
                    onChange={this.props.handleChange}
                  />
                  <label htmlFor={vraag.id} className={styles.switchfieldlabel}>
                    {vraag.vraag}
                  </label>
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Vragen;
