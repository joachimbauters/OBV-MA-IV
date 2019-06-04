import React from "react";

import Qrform from "../components/Qrform";
import Qrlist from "../components/Qrlist";
import PrintProvider, { Print, NoPrint } from "react-easy-print";
import styles from "./Qrgenerator.module.css";

const Qrgenerator = () => {
  return (
    <>
      <PrintProvider>
        <NoPrint>
          <section className={styles.qrgrid}>
            <div>
              <Qrform />
            </div>
            <div>
              <Print single name="foo">
                <Qrlist />
              </Print>
            </div>
          </section>
        </NoPrint>
      </PrintProvider>
    </>
  );
};

export default Qrgenerator;
