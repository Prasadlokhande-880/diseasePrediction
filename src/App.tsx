import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Lazy load the Home component
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
import LoadingPage from "./pages/LodingPage";

const App: React.FC = () => {
  useEffect(() => {
    const cursal = document.querySelector(".cursal");

    const handleMouseMove = (e: MouseEvent) => {
      cursal?.setAttribute("style", `top: ${e.pageY - 15}px; left: ${e.pageX - 15}px;`);
    };

    const handleClick = () => {
      cursal?.classList.add("repelAnimation");

      setTimeout(() => {
        cursal?.classList.remove("repelAnimation");
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="cursal"></div>
      <Router>
        <Suspense fallback={<div><LoadingPage /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
