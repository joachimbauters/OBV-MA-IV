import React, { Component } from "react";
import styles from "./Verhalen.module.css";
import logo from "../assets/logo.svg";
import { PropTypes, inject, observer } from "mobx-react";
import Verhaal from "../components/website/Verhaalaal";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import { Link } from "react-router-dom";

class Verhalen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 6
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(prev => {
      return { count: prev.count + 4 };
    });
  }

  render() {
    console.log(this.state.count);

    const { verhalenStore } = this.props;
    const { verhalen } = verhalenStore;
    return (
      <>
        <section className={styles.bluebackground}>
          <div className={styles.containerlist}>
            <h1 className={styles.logo}>
              <img src={logo} alt="logo" />
              <span className={styles.hide}>opera on wheels</span>
            </h1>
            <nav className={styles.gridnav}>
              <ul className={styles.nav}>
                <Link to={`/`} className={styles.linkobv}>
                  <li>Home</li>
                </Link>
                <Link to={`/jullieverhalen`} className={styles.linkobv}>
                  <li>Verhalen</li>
                </Link>
              </ul>
            </nav>
            <div className={styles.droppicker}>
              <button className={styles.languagepickerbutton}>NL</button>
              <div className={styles.languagepicker}>
                <p>FR</p>
                <p>DE</p>
              </div>
            </div>

            <h2 className={styles.pagetitel}>Jullie verhalen</h2>
            <input
              type="text"
              className={styles.inputfield}
              placeholder="Zoek verhalen"
            />
            <div className={styles.tabs}>
              <input
                type="checkbox"
                id="recent"
                name="recent"
                value="recent"
                className={styles.toggle}
              />
              <label htmlFor="recent" className={styles.togglelabelrecent}>
                Recent
              </label>
              <input
                type="checkbox"
                name="populair"
                id="populair"
                className={styles.toggle}
              />
              <label htmlFor="populair" className={styles.togglelabelpopulair}>
                Populair
              </label>
            </div>
          </div>
        </section>
        <section className={styles.container}>
          {verhalen.length > 0 ? (
            <>
              <ul className={styles.flexcards}>
                <Verhaal count={this.state.count} />
              </ul>
              <button className={styles.loadmore} onClick={this.loadMore}>
                Meer verhalen laden
              </button>
            </>
          ) : (
            <p>Tijdelijk geen verhalen beschikbaar :(</p>
          )}
        </section>
        <section className={styles.bluebackground}>
          <div className={styles.containerfooter}>
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
                  <Link to={`/`} className={styles.linkobv}>
                    <li className={styles.footeritem}>Home</li>
                  </Link>
                  <Link to={`/jullieverhalen`} className={styles.linkobv}>
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
        </section>
      </>
    );
  }
}

Verhalen.propTypes = {
  verhalenStore: PropTypes.observableObject.isRequired
};

export default inject(`verhalenStore`)(observer(Verhalen));
