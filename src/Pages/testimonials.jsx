import React from "react";
import Navbar from "../Components/Navbar";
import '../Styles/testimonial.css'
// import ImageOne from '../Images/viral-marketing.png'
// import ImageTwo from '../Images/two.jpg'
// import ImageThree from '../Images/three.jpg'
// import ImageFour from '../Images/four.jpg'
// import ImageFive from '../Images/one.jpg'
// import ImageSix from '../Images/six.jpg'

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <section className="testimony">
        <div className="leftTestimony">
          <h1>What people Say</h1>
        </div>
        <div className="rightTestimony">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <span className="slideBox">
                  <span>
                    {/* <div>
                      <img src={ImageOne} alt="ImageOne.jpb" />
                    </div> */}
                    <h3>Dev. Sam (CEO Toketiname)</h3>
                  </span>
                  <h2>COMMUNITY MANAGEMENT/MODERATION</h2>
                  <p>
                    It's important I commend you. I like your work. You're doing
                    a good job.
                  </p>
                </span>
              </div>
              <div class="carousel-item">
                <span className="slideBox">
                  <span>
                    {/* <div>
                      <img src={ImageTwo} alt="ImageOne.jpb" />
                    </div> */}
                    <h3>Ignacio (Founder Bearded Buddies)</h3>
                  </span>
                  <h2>SOCIAL MEDIA MANAGEMENT</h2>
                  <p>
                    Your content are great. You really understand our message.
                  </p>
                </span>
              </div>
              <div class="carousel-item">
                <span className="slideBox">
                  <span>
                    {/* <div>
                      <img src={ImageThree} alt="ImageOne.jpb" />
                    </div> */}
                    <h3>Happy Client 1</h3>
                  </span>
                  <h2>BRAND THERAPY SESSION</h2>
                  <p>
                    Thank you so much. You have redirected me. I know know what
                    I should be doing. I am so grateful
                  </p>
                </span>
              </div>
              <div class="carousel-item">
                <span className="slideBox">
                  <span>
                    {/* <div>
                      <img src={ImageFour} alt="ImageOne.jpb" />
                    </div> */}
                    <h3>Happy Client 2</h3>
                  </span>
                  <h2>BRAND THERAPY SESSION</h2>
                  <p>
                    Thank you for your time and for opening my mind....i do
                    appreciate and i honestly do not take it for granted.
                  </p>
                </span>
              </div>
              <div class="carousel-item">
                <span className="slideBox">
                  <span>
                    {/* <div>
                      <img src={ImageFive} alt="ImageOne.jpg" />
                    </div> */}
                    <h3>Happy Client 3</h3>
                  </span>
                  <h2>BRAND THERAPY SESSION</h2>
                  <p>
                    Oh My God! My Brand therapy session with you was the best,I
                    love the aspect of breaking things down to me into bit and
                    getting to understand what I was not doing right on how to
                    brand my account. Thanks for coming through.
                  </p>
                </span>
              </div>
              <div class="carousel-item">
                <span className="slideBox">
                  <span>
                    {/* <div>
                      <img src={ImageSix} alt="ImageOne.jpb" />
                    </div> */}
                    <h3>Nidhi, Head Of Content, CoindashMarketing</h3>
                  </span>
                  <h2>CONTENT</h2>
                  <p>Perfect! Thanks Samuel This is amazing. Always on time!</p>
                </span>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
