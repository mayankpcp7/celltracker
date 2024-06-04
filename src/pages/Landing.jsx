import React from "react";
import LandingHero from "../components/LandingHero";
import UniversalPrivacy from "../components/UniversalPrivacy";
import FindAnyone from "../components/FindAnyone";
import Footer from "../components/common/Footer";
import HowItWork from "../components/HowItWork";

const Landing = () => {
  return (
    <>
      <LandingHero />
      <UniversalPrivacy />
      <HowItWork/>
      {/* <FindAnyone /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
