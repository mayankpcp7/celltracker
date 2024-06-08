import React from "react";
import UniversalPrivacy from "../components/landing/UniversalPrivacy";
import FindAnyone from "../components/landing/FindAnyone";
import LandingHome from "../components/landing/LandingHome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import WorkProcess from "../components/landing/WorkProcess";

const Landing = () => {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
    AOS.refresh();
  }, []);
  return (
    <>
      <LandingHome />
      <UniversalPrivacy />
      <FindAnyone />
      <WorkProcess />
    </>
  );
};

export default Landing;
