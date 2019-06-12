import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

const Header = ({ play }) => {
  play = true;
  return (
    <>
      <section className={styles.bluebackground}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <img src={logo} alt="logo" />
            <span className={styles.hide}>opera on wheels</span>
          </h1>
          <nav className={styles.gridnav}>
            <ul className={styles.nav}>
              <li>Home</li>
              <li>Verhalen</li>
            </ul>
          </nav>
          <div className={styles.aantalreizigersflex}>
            <p className={styles.numberoutline}>16.870</p>
            <p className={styles.numberoutline}>16.871</p>
            <div className={styles.reizigersflex}>
              <p className={styles.number}>16.872</p>
              <p className={styles.passagiers}>reizigers deelden hun verhaal</p>
            </div>
            <p className={styles.numberoutline}>16.873</p>
          </div>
          <div className={styles.droppicker}>
            <button className={styles.languagepickerbutton}>NL</button>
            <div className={styles.languagepicker}>
              <p>FR</p>
              <p>DE</p>
            </div>
          </div>
          <div className={styles.title}>
            <p className={styles.titleoutline}>Opera</p>
            <p className={styles.titleoutline2}>on</p>
          </div>
          <div className={styles.scroll}>
            <div className={styles.scrollbox}>
              <a href="#bottom" className={styles.swipeup}>
                <span />
              </a>
              <p>Scroll om te ontdekken</p>
            </div>
          </div>
        </div>
        <div className={styles.redline} />
      </section>
    </>
  );
};

export default Header;
