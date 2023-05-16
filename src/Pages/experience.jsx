import React from "react";
import style from "../Styles/experience.module.css";
import UncleSam from '../Images/sammy.jpg'
import social from '../Images/viral-marketing.png'
import copy from '../Images/note.png'
import ghost from '../Images/content.png'
import graphic from '../Images/illustration.png'
import Navbar from "../Components/Navbar";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const Experience = () => {
  const checked = {
    color: "#2B3E86",
  };

  return (
    <div>
      <Navbar />
      <section className={style.experience}>
        <div className={style.leftGrid}>
          <div className={style.leftIntroBox}>
            <img src={UncleSam} alt="profile.jpg" />
            <h2>Samuel Nssien</h2>
            <p>community Manager</p>
          </div>
          <div className={style.leftIntroContent}>
            <h1>area of expertise</h1>
            <span>
              <ul>
                <li>
                  <RadioButtonUncheckedIcon style={checked} />
                  Social Media Content
                </li>
                <li>
                  <RadioButtonUncheckedIcon style={checked} />
                  Branding
                </li>
                <li>
                  <RadioButtonUncheckedIcon style={checked} />
                  Blogs and articles
                </li>
                <li>
                  <RadioButtonUncheckedIcon style={checked} />
                  Community Management
                </li>
                <li>
                  <RadioButtonUncheckedIcon style={checked} />
                  Community Moderation
                </li>
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
                <h3>Community manager/moderator</h3>
                <p>Toketiname</p>
              </div>
            </span>
            <span>
              <div>
                <div className={style.imageBox}>
                  <img src={ghost} alt="ghost.png" />
                </div>
                <h3>SOCIAL MEDIA MANAGEMENT</h3>
                <p>Bearded Buddies</p>
              </div>
            </span>
            <span>
              <div>
                <div className={style.imageBox}>
                  <img src={graphic} alt="graphic.png" />
                </div>
                <h3>BRAND THERAPY SESSION</h3>
                <p>Confidential Clent</p>
              </div>
            </span>
            <span>
              <div>
                <div className={style.imageBox}>
                  <img src={copy} alt="cpoy.png" />
                </div>
                <h3>Content/Blog</h3>
                <p>CoindashMarketing</p>
              </div>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
