import React from "react";
import { Link } from "react-router-dom";
import Testimonial from "../components/home/Testimonial";
import Work from "../components/home/Work";

const SocialMedia = () => {
  const isTrue = false;
  return (
    <>
      <section class="parallax parallax-main img1">
        <div class="main-wrapper wrapper">
          <div class="container">
            <div class="row mb-5 justify-content-center">
              <div class="col-lg-9">
                <div class="sec-title">
                  <h1>SOCIAL MEDIA MARKETING</h1>
                  <h4>CREATE CONTENT WITH MEASURABLE IMPACT</h4>
                  <p class="text-black">
                    Nowadays, a strong online presence is essential to ensure
                    the success of any business. In order to maximize
                    profitability, you need to clearly differentiate your
                    business from the vast sea of competitors, through the
                    ownership of a powerful digital platform. It is crucial to
                    showcase your work in an attractive, yet elegant and
                    user-friendly manner, while establishing trust with your
                    target audience.
                  </p>
                  <p class="text-black">
                    At Brand Vision, we will take care of the entire process
                    from A to Z, in order to take your business to the next
                    level and bring your vision to life. Reach out today so we
                    can discuss a solution that best suits your needs!
                  </p>
                  <div class="text-center mt-5">
                    <Link to="/contact" class="btn main-btn text-center">
                      Book a Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Work isTrue={isTrue} />
      <Testimonial />
    </>
  );
};

export default SocialMedia;
