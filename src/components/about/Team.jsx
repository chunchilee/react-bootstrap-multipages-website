import React from "react";
import TeamImg from "../../assets/team/dummy.jpg";

const Team = () => {
  
  const renderBoxes = Array(8)
    .fill(0)
    .map((_, i) => {
      return (
        <div className="col-md-3 col-6 mb-5" key={i}>
          <div className="card border-0 text-center">
            <div className="team-img">
              <img src={TeamImg} alt="TeamImg" className="img-fluid" />
            </div>
            <div className="team-detail">
              <h5>John Smith</h5>
              <p>Frontend Designer</p>
            </div>
          </div>
        </div>
      );
    });
  return (
    <section className="team-wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5">
            <h1>OUR TEAM</h1>
            <h5 className="text-black fw-normal text-capitalize">
              A proud team of developers, coders, writers whose unbeatable
              coordination has been helping business survive for a decade now.
              We Inspire you to Aspire.
            </h5>
          </div>
        </div>
        <div className="row">
          {renderBoxes}
          {/* <div className="col-md-3 col-6 mb-5">
            <div className="card border-0 text-center">
              <div className="team-img">
                <img src={TeamImg} alt="TeamImg" className="img-fluid" />
              </div>
              <div className="team-detail">
                <h5>John Smith</h5>
                <p>Frontend Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-5">
            <div className="card border-0 text-center">
              <div className="team-img">
                <img src={TeamImg} alt="TeamImg" className="img-fluid" />
              </div>
              <div className="team-detail">
                <h5>John Smith</h5>
                <p>Frontend Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-5">
            <div className="card border-0 text-center">
              <div className="team-img">
                <img src={TeamImg} alt="TeamImg" className="img-fluid" />
              </div>
              <div className="team-detail">
                <h5>John Smith</h5>
                <p>Frontend Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-5">
            <div className="card border-0 text-center">
              <div className="team-img">
                <img src={TeamImg} alt="TeamImg" className="img-fluid" />
              </div>
              <div className="team-detail">
                <h5>John Smith</h5>
                <p>Frontend Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-5">
            <div className="card border-0 text-center">
              <div className="team-img">
                <img src={TeamImg} alt="TeamImg" className="img-fluid" />
              </div>
              <div className="team-detail">
                <h5>John Smith</h5>
                <p>Frontend Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-5">
            <div className="card border-0 text-center">
              <div className="team-img">
                <img src={TeamImg} alt="TeamImg" className="img-fluid" />
              </div>
              <div className="team-detail">
                <h5>John Smith</h5>
                <p>Frontend Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-5">
            <div className="card border-0 text-center">
              <div className="team-img">
                <img src={TeamImg} alt="TeamImg" className="img-fluid" />
              </div>
              <div className="team-detail">
                <h5>John Smith</h5>
                <p>Frontend Designer</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Team;
