import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { PropTypes, inject, observer } from "mobx-react";
import wheels from "../../assets/wheels.svg";
import { Link } from "react-router-dom";
import video from "../../assets/Header.mp4";

const Header = ({ verhalenStore }) => {
  const { verhalen } = verhalenStore;
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
              <Link to={`/`} className={styles.link}>
                <li>Home</li>
              </Link>
              <Link to={`/jullieverhalen`} className={styles.link}>
                <li>Verhalen</li>
              </Link>
            </ul>
          </nav>
          <div className={styles.aantalreizigersflex}>
            <p className={styles.numberoutline}>{verhalen.length - 2}</p>
            <p className={styles.numberoutline}>{verhalen.length - 1}</p>
            <div className={styles.reizigersflex}>
              <p className={styles.number}>{verhalen.length}</p>
              <p className={styles.passagiers}>reizigers deelden hun verhaal</p>
            </div>
            <p className={styles.numberoutline}>{verhalen.length + 1}</p>
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
          <img src={wheels} alt="wheels" className={styles.wheels} />
        </div>
        <video width="100%" loop autoPlay className={styles.treinvideo}>
          <source src={video} type="video/mp4" />
        </video>
        <div className={styles.redline} />
      </section>
    </>
  );
};

Header.propTypes = {
  verhalenStore: PropTypes.observableObject.isRequired
};

export default inject(`verhalenStore`)(observer(Header));
