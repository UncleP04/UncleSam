import React from "react";
import style from "../Styles/experience.module.css";
import UncleSam from '../Images/Unclesam.jpg'
import social from '../Images/viral-marketing.png'
import copy from '../Images/note.png'
import ghost from '../Images/content.png'
import graphic from '../Images/illustration.png'
import Navbar from "../Components/Navbar";

const Experience = () => {
  return (
    <div>
      <Navbar />
      <section className={style.experience}>
        <div className={style.leftGrid}>
          <div className={style.leftIntroBox}>
            <img src={UncleSam} alt="profile.jpg" />
            <h2>Nssien, Samuel</h2>
            <p>community Manager</p>
          </div>
          <div className={style.leftIntroContent}>
            <h1>area of expertise</h1>
            <span>
              <ul>
                <li>Copywriting</li>
                <li>Ghostwriting</li>
                <li>Graphics Design</li>
                <li>Content Creation</li>
                <li>Social Management</li>
              </ul>
            </span>
          </div>
        </div>
        <div className={style.rightGrid}>
          <h1>Working Experience</h1>
          <div className={style.additionBox}>
            <span>
              <div>
                <div className={style.imageBox}>
                  <img src={social} alt="social.png" />
                </div>
                <h3>Community manager</h3>
                <p>Arrow Group</p>
              </div>
            </span>
            <span>
              <div>
                <div className={style.imageBox}>
                  <img src={ghost} alt="ghost.png" />
                  </div>
                <h3>Community manager</h3>
                <p>Arrow Group</p>
              </div>
            </span>
            <span>
              <div>
                <div className={style.imageBox}>
                  <img src={graphic} alt="graphic.png" />
                  </div>
                <h3>Community manager</h3>
                <p>Arrow Group</p>
              </div>
            </span>
            <span>
              <div>
                <div className={style.imageBox}>
                  <img src={copy} alt="cpoy.png" />
                  </div>
                <h3>Community manager</h3>
                <p>Arrow Group</p>
              </div>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
