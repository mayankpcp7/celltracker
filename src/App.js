import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BackToTop from "./components/common/BackToTop";
import Footer from "./components/common/Footer";

function App() {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
    AOS.refresh();
  }, []);

  const location = useLocation();

  let footerLinks = {
    firstlink: "Help",
    secondlink: "Contact us",
    thirdlink: "Found Phone",
  };

  if (location.pathname === "/landing") {
    footerLinks = {
      firstlink: "Home",
      secondlink: "How It Works",
      thirdlink: "Features",
    };
  }

  return (
    <>
      <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
        <Footer
          firstlink={footerLinks.firstlink}
          secondlink={footerLinks.secondlink}
          thirdlink={footerLinks.thirdlink}
        />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
