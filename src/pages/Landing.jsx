import React from "react";
import UniversalPrivacy from "../components/UniversalPrivacy";
import FindAnyone from "../components/FindAnyone";
import Footer from "../components/common/Footer";
import HowItWork from "../components/HowItWork";
import LandingHome from "../components/LandingHome";
import Preloader from "../components/common/Preloader";

const Landing = () => {
  return (
    <>
      {/* <LandingHome /> */}
      <UniversalPrivacy />
      <FindAnyone />
      <HowItWork />
      <Footer />
    </>
  );
};

export default Landing;
