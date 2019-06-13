import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import bus from "../../assets/busfooter.png";
import trein from "../../assets/treinfooter.png";
import tram from "../../assets/tramfooter.png";
import delijn from "../../assets/delijn.svg";
import antwerpen from "../../assets/antwerpen.svg";
import nmbs from "../../assets/nmbs.svg";
import gent from "../../assets/gent.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className={styles.bluebackground}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div>
              <h1 className={styles.title}>Waar kan je ons ontdekken?</h1>
              <div className={styles.wrapper}>
                <div className={styles.ontdekgrid}>
                  <article className={styles.ontdekkenitem}>
                    <img src={bus} alt="bus" className={styles.ontdekfoto} />
                    <h2 className={styles.ontdektype}>Bus</h2>
                    <p className={styles.ontdektext}>
                      De bus, ideaal voor korte afstanden in en rond de stad. De
                      volgende keer dat je in Antwerpen of Gent de bus neemt zou
                      het wel eens kunnen dat er een unieke ervaring op je te
                      wachten staat.
                    </p>
                  </article>
                  <article className={styles.ontdekkenitem}>
                    <img
                      src={trein}
                      alt="trein"
                      className={styles.ontdekfoto}
                    />
                    <h2 className={styles.ontdektype}>Trein</h2>
                    <p className={styles.ontdektext}>
                      Rijden naar je favoriete stad zoals Antwerpen of Gent is
                      nog nooit zo gemakkelijk geweest, met de trein kun je op
                      top snelheid Vlaanderen doorkruisen. Dit kan soms stress
                      opleveren, daarom bieden wij u rustgevende ervaring
                      tijdens uw rit
                    </p>
                  </article>
                  <article className={styles.ontdekkenitem}>
                    <img
                      src={tram}
                      alt="tram"
                      className={styles.ontdekfototram}
                    />
                    <h2 className={styles.ontdektram}>Tram</h2>
                    <p className={styles.ontdektext}>
                      Gedaan met shoppen en geen zin om helemaal terug naar huis
                      te wandelen? Geen probleem, door het groot tram netwerk
                      raakt u overal. Misschien pikt u wel een voorstelling van
                      Opera Ballet Vlaanderen mee. Want zelfs op de tram bieden
                      wij jou je eerste opera/ballet ervaring.
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <div className={styles.wrapper}>
              <h1 className={styles.hide}>sponsors</h1>
              <div className={styles.sponsors}>
                <img src={delijn} alt="delijn" />
                <img src={antwerpen} alt="antwerpen" />
                <img src={gent} alt="gent" />
                <img src={nmbs} alt="nmbs" />
              </div>
            </div>
            <div className={styles.footergrid}>
              <div>
                <h1 className={styles.logo}>
                  <img src={logo} alt="logo" />
                  <span className={styles.hide}>opera on wheels</span>
                </h1>
                <p className={styles.jaar}>©2019</p>
              </div>
              <div>
                <h2 className={styles.footertitle}>Opera on wheels</h2>
                <ul>
                  <Link to={`/`} className={styles.link}>
                    <li className={styles.footeritem}>Home</li>
                  </Link>
                  <Link to={`/jullieverhalen`} className={styles.link}>
                    <li className={styles.footeritem}>Verhalen</li>
                  </Link>
                </ul>
              </div>
              <div>
                <h2 className={styles.footertitle}>OBV vlaanderen</h2>
                <ul>
                  <a
                    href="https://www.operaballet.be/nl/het-huis/blog"
                    target="_blank" // eslint-disable-line
                    className={styles.linkobv}
                  >
                    <li className={styles.footeritem}>Het huis</li>
                  </a>
                  <a
                    href="https://www.operaballet.be/nl/programma/2018-2019?view=calendar#jump"
                    target="_blank" // eslint-disable-line
                    className={styles.linkobv}
                  >
                    <li className={styles.footeritem}>Kalender</li>
                  </a>
                  <a
                    href="https://www.operaballet.be/nl/het-huis/steun/giften"
                    target="_blank" // eslint-disable-line
                    className={styles.linkobv}
                  >
                    <li className={styles.footeritem}>Steun</li>
                  </a>
                  <a
                    href="https://www.operaballet.be/nl/het-huis/steun/giften"
                    target="_blank" // eslint-disable-line
                    className={styles.linkobv}
                  >
                    <li className={styles.footeritem}>Contact</li>
                  </a>
                </ul>
              </div>
              <div>
                <h2 className={styles.footertitle}>Verdere informatie</h2>
                <ul>
                  <li className={styles.footeritem}>Terms &amp; conditions</li>
                  <li className={styles.footeritem}>Privacy policy</li>
                </ul>
              </div>
              <div>
                <h2 className={styles.footertitle}>Volg ons</h2>
                <div className={styles.socialsbox}>
                  <p className={styles.socialstext}>Opera:</p>
                  <ul className={styles.socialsflex}>
                    <a
                      href="https://www.facebook.com/operavlaanderen"
                      target="_blank" // eslint-disable-line
                    >
                      <li>
                        <img src={facebook} alt="facebook" />
                      </li>
                    </a>
                    <a
                      href="https://twitter.com/operaballetvl"
                      target="_blank" // eslint-disable-line
                    >
                      <li>
                        <img src={twitter} alt="twitter" />
                      </li>
                    </a>
                    <a
                      href="https://www.instagram.com/operavlaanderen/"
                      target="_blank" // eslint-disable-line
                    >
                      <li>
                        <img src={instagram} alt="instagram" />
                      </li>
                    </a>
                    <a
                      href="https://www.youtube.com/operaballetvlaanderen"
                      target="_blank" // eslint-disable-line
                    >
                      <li>
                        <img src={youtube} alt="youtube" />
                      </li>
                    </a>
                  </ul>
                </div>
                <div className={styles.socialsbox}>
                  <p className={styles.socialstext}>Ballet:</p>
                  <ul className={styles.socialsflex}>
                    <a
                      href="https://www.facebook.com/balletvlaanderen"
                      target="_blank" // eslint-disable-line
                    >
                      <li>
                        <img src={facebook} alt="facebook" />
                      </li>
                    </a>
                    <a
                      href="https://twitter.com/operaballetvl"
                      target="_blank" // eslint-disable-line
                    >
                      <li>
                        <img src={twitter} alt="twitter" />
                      </li>
                    </a>
                    <a
                      href="https://www.instagram.com/balletvlaanderen/"
                      target="_blank" // eslint-disable-line
                    >
                      <li>
                        <img src={instagram} alt="instagram" />
                      </li>
                    </a>
                    <a
                      href="https://www.youtube.com/operaballetvlaanderen"
                      target="_blank" // eslint-disable-line
                    >
                      <li>
                        <img src={youtube} alt="youtube" />
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
