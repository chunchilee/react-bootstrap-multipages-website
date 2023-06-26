import React from "react";
import Banner from "../components/home/Banner";
import Process from "../components/home/Process";
import Services from "../components/home/Services";
import Testimonial from "../components/home/Testimonial";
import Work from "../components/home/Work";

const Home = () => {
  const isTrue = true;
  return (
    <>
      <Banner />
      <Services />
      <Process />
      <Work isTrue={isTrue} />
      <Testimonial />
    </>
  );
};

export default Home;
