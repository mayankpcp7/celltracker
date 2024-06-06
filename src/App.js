import {  Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Preloader from "./components/common/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BackToTop from "./components/common/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Preloader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
        <BackToTop />
      </div>
    </>
  );
}

export default App;
