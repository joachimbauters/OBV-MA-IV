import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import Qrcode from "./Qrcode";
import styles from "./Qrlist.module.css";

const Qrlist = ({ qrStore }) => {
  const { qrcodes } = qrStore;
  return (
    <>
      <div className={styles.qrcontainer}>
        {qrcodes.map(code => (
          <div key={code.id} className={styles.qrcode}>
            <Qrcode code={code} />
            <h2 className={styles.zetel}>Zetel: {code.stoelnummer}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

Qrlist.propTypes = {
  qrStore: PropTypes.observableObject.isRequired
};

export default inject(`qrStore`)(observer(Qrlist));
