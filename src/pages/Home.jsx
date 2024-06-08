import React from "react";
import FindPhone from "../components/home/FindPhone";
import CreateAccount from "../components/home/CreateAccount";
import Join from "../components/home/Join";
import HowItWorks from "../components/home/HowItWorks";
import Advantage from "../components/home/Advantage";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <>
      <Hero/>
      <Advantage />
      <HowItWorks />
      <Join />
      <CreateAccount />
      <FindPhone />
    </>
  );
};

export default Home;
