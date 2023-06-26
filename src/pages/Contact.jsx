import React from "react";

const Contact = () => {
  return (
    <>
      <section className="parallax parallax-main img1">
        <div className="main-wrapper wrapper pb-0">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-lg-9 mb-5">
                <div className="sec-title">
                  <h1>GET IN TOUCH</h1>
                  <h4>DESIGN YOUR STORY</h4>
                  <p className="text-black">
                    Need an expert? you are more than welcomed to leave your
                    contact info and we will be in touch shortly
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container get-in-touch">
            <div className="row">
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card">
                  <i className="fas fa-home"></i>
                  <h4>Visit Us</h4>
                  <p>A-212, FIRST FLOOR INDIA</p>
                  <p>COde4Education</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card">
                  <i className="fas fa-phone-alt"></i>
                  <h4>Call Us</h4>
                  <p>
                    We're here to help and answer any question you might have.
                    We look forward to hearing from you 😊
                  </p>
                  <p>+91 121 212 1221</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card">
                  <i className="fas fa-envelope-open"></i>
                  <h4>Contact Us</h4>
                  <p>For any questions you may have, you can reach me here:</p>
                  <p>EXAMPLE@GMAIL.COM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="form-wrapper wrapper">
        <div className="container">
          <div className="row mb-5">
            <div className="sec-title">
              <h1>LETS TALK</h1>
              <p class="text-black">
                Don’t Hesitate to contact with us for any kind of information!!
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="form-section">
                <form>
                  <div className="mb-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name *"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Subject *"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <textarea
                      rows={8}
                      className="form-control"
                      placeholder="Message...."
                      required
                    />
                  </div>
                  <div className="mb-5 text-end">
                    <button className="btn main-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
