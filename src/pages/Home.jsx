import React from "react";
import Footer from "../components/common/Footer";
import FindPhone from "../components/FindPhone";
import CreateAccount from "../components/CreateAccount";
import Join from "../components/Join";
import HowItWorks from "../components/HowItWorks";
import Advantage from "../components/Advantage";
import Hero from "../components/Hero";
import { BackTop } from "../components/common/Icons";

const Home = () => {
  return (
    <>
      <Hero/>
      <Advantage/>
      <HowItWorks />
      <Join />
      <CreateAccount />
      <FindPhone />
      <Footer />
    </>
  );
};

export default Home;
