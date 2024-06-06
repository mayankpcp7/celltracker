import {  Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <div className="overflow-hidden">
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
