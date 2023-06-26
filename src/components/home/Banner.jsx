import React from "react";
import { Link } from "react-router-dom";
import topImg from "../../assets/banner/top-img 1.png";

const Banner = () => {
  return (
    <section className="banner-wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 order-lg-1 order-2">
            <h2>
              LET'S WORK TOGETHER TO
              <span>
                <br className="d-none d-xl-block" /> BRING YOUR VISION TO LIFE
              </span>
            </h2>
            <p>
              Best Vision is a renowned full service marketing agency based in
              Toronto, with the sole goal of bringing your vision to life and
              helping your ideas grow.
            </p>
            <p>
              Our main services consist of Web Design and Development, Branding,
              Social Media Marketing, and Advertising. We offer solutions that
              are innovative and custom tailored for you and your business.
            </p>
            <p>
              Our main services consist of Web Design and Development, Branding,
              Social Media Marketing, and Advertising. We offer solutions that
              are innovative and custom tailored for you and your business.
            </p>
            <p className="mt-5">Let's get started!</p>
            <Link to="/" className="btn main-btn mt-5">
              Request a Proposal
            </Link>
          </div>
          <div className="col-lg-6 mb-5 order-lg-2 order-1">
            <div>
              <img src={topImg} alt="topImg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
