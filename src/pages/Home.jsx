import React from "react";
import Footer from "../components/common/Footer";
import FindPhone from "../components/FindPhone";
import CreateAccount from "../components/CreateAccount";
import Join from "../components/Join";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <>
      <HowItWorks />
      <Join />
      <CreateAccount />
      <FindPhone />
      <Footer />
    </>
  );
};

export default Home;
