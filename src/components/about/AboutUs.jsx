import React from "react";
import { Link } from "react-router-dom";
import ArrowImg from "../../assets/arrow.svg";
const AboutUs = () => {
  return (
    <section className="parallax parallax-main img1 mt-3 ">
      <div className="main-wrapper wrapper ">
        <div className="container"></div>
        <div className="container-fluid px-lg-0">
          <div className="row">
            <div className="offset-lg-6 col-lg-6 offset-md-4 col-md-8 mb-5 mb-lg-0">
              <div className="text-end parallax parallax-1 img2">
                <div className="card black-card">
                  <h3>About Us</h3>
                  <h5>
                    Our sole goal is to bring your vision to life, through our
                    vast experience, innovation and dedication
                  </h5>
                  <p>
                    Our team is here to assist you with all of your digital
                    marketing needs, From Web Design and Branding, all the way
                    to Advertisement
                  </p>
                  <Link to="/about" className="view-link">
                    Contact Us
                    <img src={ArrowImg} alt="ArrowImg" className="ms-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
