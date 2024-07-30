import Hero from "../component/hero";
import Navbar from "../component/layout/Navbar";
import GoogleGeminiEffectDemo from "../component/AceternityUi";
import Cared from "../component/Card";
import FlipWordsDemo from "../component/FlipWords";
import FloatingNavDemo from "../component/FloatingNavbar";
import BentoGridDemo from "../component/BentoGrid";
import Footer from "../component/layout/footer";

function Home() {
  return (
    <div>
    <FloatingNavDemo></FloatingNavDemo>
    <div className="p-0 m-0 bg-black">
      <Navbar />
      <Hero />
      <GoogleGeminiEffectDemo />
      <div className="m-0 p-0 ">
        <FlipWordsDemo></FlipWordsDemo>
        <div className="card-container">
          <Cared />
          <Cared />
        </div>
      </div>
      <div className="m-0 p-0">
        <BentoGridDemo></BentoGridDemo>
      </div>
      <Footer></Footer>
</div>
    </div>
  );
}

export default Home;
