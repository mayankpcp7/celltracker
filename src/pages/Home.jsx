import React from "react";
import Footer from "../components/common/Footer";
import FindPhone from "../components/FindPhone";
import CreateAccount from "../components/CreateAccount";

const Home = () => {
  return (
    <>
      <CreateAccount/>
      <FindPhone />
      <Footer />
    </>
  );
};

export default Home;
