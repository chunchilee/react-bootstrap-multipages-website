import React from "react";

const Testimonial = () => {
  return (
    <section className="testimonial-wrapper wrapper">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 text-lg-end">
            <h2>
              WHAT OUR
              <br className="d-lg-block d-none" />
              CLIENTS SAY
            </h2>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              // data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  aria-current="true"
                  data-bs-slide-to="0"
                  aria-label="Slide 1"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active " data-bs-interval="1000">
                  <div className="card">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="py-5">
                      <p>
                        “lorum Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quae nobis molestias natus impedit
                        consequuntur enim inventore aperiam. Error commodi
                        laudantium repellat debitis quisquam ab accusantium
                        ratione saepe laborum consectetur? Sit!”
                      </p>
                    </div>
                    <div className="title">
                      <h5>David James</h5>
                      <h5>Dierector</h5>
                    </div>
                  </div>
                </div>
                <div className="carousel-item " data-bs-interval="1000">
                  <div className="card">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="py-5">
                      <p>
                        “lorum Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quae nobis molestias natus impedit
                        consequuntur enim inventore aperiam. Error commodi
                        laudantium repellat debitis quisquam ab accusantium
                        ratione saepe laborum consectetur? Sit!”
                      </p>
                    </div>
                    <div className="title">
                      <h5>David James</h5>
                      <h5>Dierector</h5>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                  <div className="card">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="py-5">
                      <p>
                        “You guys rocked on our Social media & Website Project,
                        Thank you Team for doing Such a Great Job ..”
                      </p>
                    </div>
                    <div className="title">
                      <h5>Girdhar</h5>
                      <h5>Founder Of Girdhar</h5>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                  <div className="card">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="py-5">
                      <p>
                        “We are greatly thankful to Analog for supporting us to
                        explore and create our name as brand on social media.
                        The team of Analog Webmedia works with full dedication
                        and responsibility to make the market for our brand.
                        It’s been more than 30 days since we are connected and
                        we are like digital family now. We appreciate the work
                        and support the working team for best outputs in
                        future.”
                      </p>
                    </div>
                    <div className="title">
                      <h5>Virasati</h5>
                      <h5>Founder Of Virasati</h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
