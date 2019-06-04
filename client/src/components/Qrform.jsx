import React from "react";
import { PropTypes, inject, observer } from "mobx-react";

import styles from "./Qrform.module.css";

const Qrform = ({ qrStore }) => {
  let inputType = React.createRef();
  let inputVoertuignummer = React.createRef();
  let inputAantal = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    qrStore.removeCodes();
    for (let i = 0; i < inputAantal.current.value; i++) {
      qrStore.addCodes({
        type: inputType.current.value,
        voertuignummer: inputVoertuignummer.current.value,
        stoelnummer: i + 1
      });
    }
  };

  const handleClickButton = e => {
    window.print();
  };
  return (
    <>
      <section className={styles.formsection}>
        <h1 className={styles.titel}>Qrcodes creeën</h1>
        <form onSubmit={handleSubmit} className={styles.flexform}>
          <label htmlFor="Typevervoer" className={styles.label}>
            Welk type voertuig?
          </label>
          <select
            name="Typevervoer"
            className={styles.input}
            ref={inputType}
            required
          >
            <option>Trein</option>
            <option>Tram</option>
            <option>Metro</option>
            <option>Bus</option>
          </select>
          <label htmlFor="voertuignummer" className={styles.label}>
            Wat is het voertuignummer?
          </label>
          <input
            autoFocus
            id="voertuignummer"
            name="voertuignummer"
            type="number"
            className={styles.input}
            ref={inputVoertuignummer}
            required
          />
          <label htmlFor="aantal" className={styles.label}>
            Aantal zetels?
          </label>
          <input
            autoFocus
            type="number"
            id="aantal"
            name="aantal"
            className={styles.input}
            ref={inputAantal}
            required
          />
          <input type="submit" value="Genereer" className={styles.submit} />
          <button onClick={handleClickButton} className={styles.print}>
            Print qrcodes
          </button>
        </form>
      </section>
    </>
  );
};

Qrform.propTypes = {
  qrStore: PropTypes.observableObject.isRequired
};

export default inject(`qrStore`)(observer(Qrform));
