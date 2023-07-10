import React from 'react'
import '../Styles/introduction.css'
import { Link } from 'react-router-dom';
import one from "../Images/s.jpg";
import two from "../Images/ss.jpg";
import three from "../Images/sss.jpg";
import five from "../Images/sssss.jpg";
import six from "../Images/ssssss.jpg";
import Seven from "../Images/sssssss.jpg";
import eight from "../Images/ssssssss.jpg";
import CircleIcon from "@mui/icons-material/Circle";

const Introduction = () => {

  const bullet = {
    padding: '5px',
    color: 'var(--textColor)'
  }
  return (
    <div>
      <div className="splashBlog">
        <div className="leftBlog">
          <div className="innerBlog">
            <span className="nameBox">
              <div className="nameContent">
                <h1>Samuel Nssien</h1>
                <h4>
                  Helping web3 projects, founders, & enthusiasts find clarity
                  and scale
                </h4>
              </div>
              <p>
                <span className="experienceBox">
                  <p>
                    <h2>18+ </h2>
                    <span>Clients and Partners</span>
                  </p>
                  <p>
                    <h2> 2+ Years</h2> <span>Experience</span>
                  </p>
                </span>
                Feel free to contact me if you need any of my services: <br />
                <CircleIcon style={bullet} /> Branding <br />
                <CircleIcon style={bullet} /> Project Management <br />
                <CircleIcon style={bullet} /> Community Management <br />
                <CircleIcon style={bullet} /> Social Media Management <br />
                <CircleIcon style={bullet} /> Community Moderation <br />
                <CircleIcon style={bullet} /> Content Creation <br />
                <CircleIcon style={bullet} /> Ghost Writing
              </p>
            </span>
            <div className="webLinks">
              <Link
                to="https://www.linkedin.com/in/samuelnssien/"
                className="websites"
                target="_blank"
              >
                LinkedIn
              </Link>

              <Link
                to="https://twitter.com/unclesam_001"
                className="websites"
                target="_blank"
              >
                Twitter
              </Link>
              <Link
                to="https://officialrepublic.onrender.com/"
                className="websites"
                target="_blank"
              >
                WebSite
              </Link>
            </div>
          </div>

          <div className="imageBox">
            <span>
              <h1>Friends I've made along the way.</h1>
            </span>
            <div>
              <img src={one} alt="ImageBlog.jpg" className="imageBlog" />
              <img src={two} alt="ImageBlog.jpg" className="imageBlog" />
              <img src={three} alt="ImageBlog.jpg" className="imageBlog" />
              <img src={five} alt="ImageBlog.jpg" className="imageBlog" />
              <img src={six} alt="ImageBlog.jpg" className="imageBlog" />
              <img src={Seven} alt="ImageBlog.jpg" className="imageBlog" />
              <img src={eight} alt="ImageBlog.jpg" className="imageBlog" />
            </div>
          </div>
        </div>
        <span className="blogLinks">
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">
              <Link className="link" to="/about">
                About
              </Link>
            </span>
          </button>
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">
              <Link className="link" to="/experience">
                Experience
              </Link>
            </span>
          </button>
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">
              <Link className="link" to="/content">
                contents
              </Link>
            </span>
          </button>
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">
              <Link className="link" to="/testimonials">
                Testimonials
              </Link>
            </span>
          </button>
        </span>
      </div>
    </div>
  );
}

export default Introduction



