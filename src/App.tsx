import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Lazy load the Home component
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
import LodingPage from "./pages/LodingPage";

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Suspense fallback={<div><LodingPage></LodingPage></div>}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
    </>
  );
}

export default App;
