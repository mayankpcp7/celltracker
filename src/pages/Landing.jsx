import React from "react";
import LandingHero from "../components/LandingHero";
import UniversalPrivacy from "../components/UniversalPrivacy";
import FindAnyone from "../components/FindAnyone";
import Footer from "../components/common/Footer";

const Landing = () => {
  return (
    <>
      <LandingHero />
      <UniversalPrivacy />
      <FindAnyone />
      <Footer />
    </>
  );
};

export default Landing;
