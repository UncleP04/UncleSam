import React from 'react'
import '../Styles/introduction.css'
import { Link } from 'react-router-dom';
import ImageBlog from '../Images/bg.jpg'

const Introduction = () => {
  return (
    <div>
      <div className="splashBlog">
        <div className="leftBlog">
          <div className="innerBlog">
            <span className="nameBox">
              <div className="nameContent">
                <h1>Samuel Nssien</h1>
                <h4>Community Manager</h4>
              </div>
              <p>
                Feel free to contact me if you need any of my services: Branding
                Project Management Community Management Social Media Management
                Community Moderation Content Creation Ghost Writing
              </p>
            </span>
            <div className="webLinks">
              <Link href="/linkedIn" className="websites">
                LinkedIn
              </Link>

              <Link href="/linkedIn" className="websites">
                Twitter
              </Link>

              <Link href="/linkedIn" className="websites">
                Instagram
              </Link>
            </div>
          </div>
          <img src={ImageBlog} alt="ImageBlog.jpg" className="imageBlog" />
        </div>
        <span className="blogLinks">
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
              <Link className="link" to="/education">
                Education
              </Link>
            </span>
          </button>
        </span>
      </div>
    </div>
  );
}

export default Introduction