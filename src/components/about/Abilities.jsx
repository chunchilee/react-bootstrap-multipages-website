import React from "react";

const Abilities = () => {
  return (
    <section className="abilities-wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-8 mb-5">
            <div className="sec-title mb-5">
              <h1>Our Capabilities</h1>
              <h5 className="text-black fw-normal text-capitalize">
                Everything you need to turn an idea into a website
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-6 mb-5">
            <div className="card border-0">
              <h3>Product</h3>
              <ul>
                <li>
                  <p>Strategy</p>
                </li>
                <li>
                  <p>Audience Analysis</p>
                </li>
                <li>
                  <p>Business Model Canvas</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-5">
            <div className="card border-0">
              <h3>Design</h3>
              <ul>
                <li>
                  <p>Brand Identity</p>
                </li>
                <li>
                  <p>UI/UX Research</p>
                </li>
                <li>
                  <p>Visual Design</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-5">
            <div className="card border-0">
              <h3>Development</h3>
              <ul>
                <li>
                  <p>Websites</p>
                </li>
                <li>
                  <p>Internet of Things</p>
                </li>
                <li>
                  <p>Emerging Tech `&` Labs</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-5">
            <div className="card border-0">
              <h3>Growth</h3>
              <ul>
                <li>
                  <p>Digital Marketing</p>
                </li>
                <li>
                  <p>Internet of Things</p>
                </li>
                <li>
                  <p>Search Engine Optimization</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abilities;
