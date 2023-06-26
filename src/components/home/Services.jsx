import React from "react";
import { Link } from "react-router-dom";
import ArrowImg from "../../assets/arrow.svg";

const Services = () => {
  return (
    <section className="parallax parallax-main img1">
      <div className="main-wrapper wrapper ">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <div className="sec-title">
                <h1>
                  Discover <span>Solution</span>
                </h1>
                <h4>For every business goal</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-lg-0">
          <div className="row">
            <div className="offset-lg-6 col-lg-6 offset-md-4 col-md-8 mb-lg-0 ">
              <div className="parallax parallax-1 img2">
                <div className="card black-card">
                  <h3>WEBSITE DESIGN</h3>
                  <h5>DESIGNED WITH INNOVATION</h5>
                  <p>
                    Our award-winning designers are here to create the perfect
                    online presence for you. We bring experience as well as a
                    design that stands out to all websites we create for brands
                    both large and small.
                  </p>
                  <Link to="/" className="view-link">
                    Learn More <img src={ArrowImg} alt="arrowImg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-8 mb-5 mb-lg-0">
              <div className="text-end parallax img3">
                <div className="card right black-card">
                  <h3>WEBSITE DESIGN</h3>
                  <h5>DESIGNED WITH INNOVATION</h5>
                  <p>
                    Our award-winning designers are here to create the perfect
                    online presence for you. We bring experience as well as a
                    design that stands out to all websites we create for brands
                    both large and small.
                  </p>
                  <Link to="/" className="view-link">
                    Learn More <img src={ArrowImg} alt="arrowImg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="offset-lg-6 col-lg-6 offset-md-6 col-md-6 mb-5 mb-lg-0">
              <div className="text-end parallax parallax-1 img4">
                <div className="card black-card">
                  <h3>ADVERTISING & CAMPAIGNS</h3>
                  <h5>PAY-PER-CLICK (PPC)</h5>
                  <p>
                    Our award-winning designers are here to create the perfect
                    online presence for you. We bring experience as well as a
                    design that stands out to all websites we create for brands
                    both large and small.
                  </p>
                  <Link to="/" className="view-link">
                    Learn More <img src={ArrowImg} alt="arrowImg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-8 mb-5 mb-lg-0">
              <div className="text-end parallax img5">
                <div className="card right black-card">
                  <h3>SOCIAL MEDIA MARKETING</h3>
                  <h5>CONTENT WITH MEASURABLE IMPACT</h5>
                  <p>
                    Our award-winning designers are here to create the perfect
                    online presence for you. We bring experience as well as a
                    design that stands out to all websites we create for brands
                    both large and small.
                  </p>
                  <Link to="/" className="view-link">
                    Learn More <img src={ArrowImg} alt="arrowImg" />
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

export default Services;
