import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import MediaFImg from "../../assets/social-media/f.webp";
import MediaIImg from "../../assets/social-media/i.webp";
import MediaLImg from "../../assets/social-media/l.webp";
import MediaTImg from "../../assets/social-media/t.webp";

const Footer = () => {
  return (
    <footer>
      <section className="footer-wrapper wrapper">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0 footer-logo">
              <img src={LogoImg} alt="LogoImg" />
            </div>
            <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
              <h5>
                <Link to="/">+91 121 212 1221</Link>
              </h5>
              <h5>
                <Link to="/">example@gmail.com </Link>
              </h5>
              <h5>A-212, First Floor India</h5>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
              <ul className="link-widget p-0">
                <li>
                  <Link to="/">
                    <img src={MediaFImg} alt="MediaFImg" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={MediaIImg} alt="MediaIImg" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={MediaLImg} alt="MediaLImg" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={MediaTImg} alt="MediaTImg" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5 px-0">
          <div className="row">
            <div className="col-12">
              <iframe
                title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d465743.2933408488!2d120.9558744!3d24.2201031!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1687158386665!5m2!1szh-TW!2stw"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright-section">
          <p> &copy; 2021 Code4Education. All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
