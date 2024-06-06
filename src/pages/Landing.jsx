import React from "react";
import UniversalPrivacy from "../components/UniversalPrivacy";
import FindAnyone from "../components/FindAnyone";
import Footer from "../components/common/Footer";
import HowItWork from "../components/HowItWork";
import LandingHome from "../components/LandingHome";

const Landing = () => {
  return (
    <>
      <LandingHome />
      <UniversalPrivacy />
       <FindAnyone />
      <HowItWork/>
      <Footer />
    </>
  );
};

export default Landing;
