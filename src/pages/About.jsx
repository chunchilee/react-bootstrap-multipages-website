import React from "react";
import Abilities from "../components/about/Abilities";
import AboutUs from "../components/about/AboutUs";
import Process from "../components/about/Process";
import Team from "../components/about/Team";
import TeamGroup from "../components/about/TeamGroup";

const About = () => {
  return (
    <>
      <AboutUs />
      <TeamGroup />
      <Abilities />
      <Process />
      <Team />
    </>
  );
};

export default About;
