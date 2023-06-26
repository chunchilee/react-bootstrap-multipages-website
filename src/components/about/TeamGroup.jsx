import React from "react";
import AboutUsImg from "../../assets/about/about-us.webp";

const TeamGroup = () => {
  return (
    <section className="bg-black wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-title">
              <h1 className="text-white">Who We Are</h1>
            </div>
          </div>
          <div className="col-md-7 mb-5">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              distinctio quis voluptatum pariatur magnam tempore atque ducimus
              adipisci aliquam, nemo facilis impedit fugiat aperiam
              reprehenderit a qui ea corrupti? Alias! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Nobis distinctio quis
              voluptatum pariatur magnam tempore atque ducimus adipisci aliquam,
              nemo facilis impedit fugiat aperiam reprehenderit a qui ea
              corrupti? Alias!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              distinctio quis voluptatum pariatur magnam tempore atque ducimus
              adipisci aliquam, nemo facilis impedit fugiat aperiam
              reprehenderit a qui ea corrupti? Alias
            </p>
          </div>
          <div className="col-md-5 mb-5">
            <img src={AboutUsImg} alt="AboutUsImg" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGroup;
