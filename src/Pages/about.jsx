import React from "react";
import Navbar from "../Components/Navbar";
import style from "../Styles/about.module.css";
import brand from '../Images/brand-removebg-preview.png'
import blog from '../Images/blog-removebg-preview.png'
import context from '../Images/context-removebg-preview.png'
import moderate from '../Images/moderate-removebg-preview.png'
import manage from '../Images/management-removebg-preview.png'

const About = () => {
  return (
    <div>
      <Navbar />
      <section className={style.aboutBox}>
        <div className={style.leftAbout}>
          <h1>About Me</h1>
        </div>
        <div className={style.rightAbout} id="rightAbout">
          <h1>What you have to know about me</h1>
          <div className={style.innerRightAbout}>
            <label>
              <span>
                <h2>Community Manager</h2>
                <p>
                  Enthusiastic community manager dedicated to fostering vibrant
                  and inclusive online communities. With a proactive approach
                  and excellent communication skills.
                </p>
              </span>
              <img src={manage} alt="manage.jpg" />
            </label>
            <label>
              <img src={blog} alt="blog.jpg" />
              <span>
                <h2>Blogs and articles</h2>
                <p>
                  I thrive on the power of words to inform, engage, and inspire.
                  With a keen eye for captivating storytelling and a dedication
                  to research, I craft compelling content that resonates with
                  readers.
                </p>
              </span>
            </label>
            <label>
              <span>
                <h2>Social Media Content</h2>
                <p>
                  Experienced social media manager passionate about crafting
                  compelling digital narratives and driving engagement.
                </p>
              </span>
              <img src={context} alt="context.jpg" />
            </label>
            <label>
              <img src={moderate} alt="moderate.jpg" />
              <span>
                <h2>Community Moderator</h2>
                <p>
                  Detail-oriented community moderator experienced in maintaining
                  safe and thriving online communities. With a vigilant eye for
                  enforcing community guidelines, promoting positive engagement,
                  and resolving conflicts.
                </p>
              </span>
            </label>
            <label>
              <span>
                <h2>Branding</h2>
                <p>
                  Committed to strategically elevating brands through
                  captivating content, cohesive visuals, and audience-centric
                  campaigns. Skilled in developing brand messaging and fostering
                  brand loyalty in the digital landscape.
                </p>
              </span>
              <img src={brand} alt="brand.jpg" />
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
