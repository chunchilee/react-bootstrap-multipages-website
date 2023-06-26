import React from "react";
import { Link } from "react-router-dom";
import ArrowImg from "../../assets/arrow.svg";
import Work1Img from "../../assets/work/1.webp";
import Work2Img from "../../assets/work/2.webp";
import Work3Img from "../../assets/work/3.webp";
import Work4Img from "../../assets/work/4.webp";

const Work = ({ isTrue }) => {
  return (
    <section className={`work-wrapper wrapper ${isTrue && "pt-0"}`}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <div className="sec-title">
              <h1>OUR LATEST WORKS</h1>
              <p>
                Brand Vision is proud to work with businesses from many
                industries
              </p>
              <Link to="/" className="view-link">
                View More
                <img src={ArrowImg} alt="arrow.svg" className="ms-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-lg-0">
        <div className="row">
          <div className="col-sm-6 p-0">
            <div>
              <img src={Work1Img} alt="work1" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-6 p-0">
            <div>
              <img src={Work2Img} alt="work2" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-6 p-0">
            <div>
              <img src={Work3Img} alt="work3" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-6 p-0">
            <div>
              <img src={Work4Img} alt="work4" className="img-fluid" />
            </div>
          </div>
          <div className="col-12 text-center mt-5">
            <Link to="/" className="btn main-btn">
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
