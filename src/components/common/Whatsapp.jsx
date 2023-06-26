import React from "react";
import { Link } from "react-router-dom";
import WhatsappImg from "../../assets/whatsapp.png";

const Whatsapp = () => {
  return (
    <div className="whatsapp-icon">
      <div className="whatsapp">
        <Link to="/" target="_blank">
          <img src={WhatsappImg} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Whatsapp;
