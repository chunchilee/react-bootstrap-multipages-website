import React from "react";
import { Link } from "react-router-dom";
import W1Img from "../assets/work/w1.webp";
import W2Img from "../assets/work/w2.webp";
import W3Img from "../assets/work/w3.webp";
import W4Img from "../assets/work/w4.webp";

const Portfolio = () => {
  return (
    <>
      <section className="parallax parallax-main img1 ">
        <div className="main-wrapper wrapper ">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-lg-9 mt-5">
                <div className="sec-title">
                  <h1>Our latest Projects</h1>
                  <p className="text-black">
                    Our portfolio represents the diverse and versatile nature of
                    the projects that our team has taken on. We always thrive to
                    take on new challenging and unique ventures that let us
                    embrace our creativity. The following is a list of the
                    latest clients that we have worked with and how we helped
                    them bring their vision to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="wrapper portfolio-services pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-between">
                <div className="col-md-5 col-sm-6 mb-5">
                  <div className="card border-0 position-relative">
                    <img src={W1Img} alt="W1Img" className="img-fluid" />
                    <div class="card-detail">
                      <h5>Joint Seal Waterproofing</h5>
                      <p>
                        Our team of designers has optimized Joint Seal's website
                        to fit perfectly in every screen aspect.
                      </p>
                      <Link to="/portfolio" class="btn main-btn">
                        Visit Website
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-sm-6 mb-5">
                  <div className="card border-0 position-relative">
                    <img src={W2Img} alt="W2Img" className="img-fluid" />
                    <div class="card-detail">
                      <h5>Joint Seal Waterproofing</h5>
                      <p>
                        Our team of designers has optimized Joint Seal's website
                        to fit perfectly in every screen aspect.
                      </p>
                      <Link to="/portfolio" class="btn main-btn">
                        Visit Website
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-between">
                <div className="col-md-5 col-sm-6 mb-5">
                  <div className="card border-0 position-relative">
                    <img src={W3Img} alt="W3Img" className="img-fluid" />
                    <div class="card-detail">
                      <h5>Joint Seal Waterproofing</h5>
                      <p>
                        Our team of designers has optimized Joint Seal's website
                        to fit perfectly in every screen aspect.
                      </p>
                      <Link to="/portfolio" class="btn main-btn">
                        Visit Website
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-sm-6 mb-5">
                  <div className="card border-0 position-relative">
                    <img src={W4Img} alt="W4Img" className="img-fluid" />
                    <div class="card-detail">
                      <h5>Joint Seal Waterproofing</h5>
                      <p>
                        Our team of designers has optimized Joint Seal's website
                        to fit perfectly in every screen aspect.
                      </p>
                      <Link to="/portfolio" class="btn main-btn">
                        Visit Website
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
