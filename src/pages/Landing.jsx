import React from "react";
import UniversalPrivacy from "../components/UniversalPrivacy";
import FindAnyone from "../components/FindAnyone";
import Footer from "../components/common/Footer";
import HowItWork from "../components/HowItWork";
import LandingHome from "../components/LandingHome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BackTop } from "../components/common/Icons";

const Landing = () => {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-hidden">
      <LandingHome />
      <UniversalPrivacy />
      <FindAnyone />
      <HowItWork />
      <Footer firstlink="Home" secondlink="How It Works" thirdlink="Features" />
    </div>
  );
};

export default Landing;
