import BackgroundBeamsDemo from '../component/BackgroundBeams';
import Footer from "../component/layout/footer";
import Navbar from "../component/layout/Navbar";
import FloatingNavDemo from "../component/FloatingNavbar";
import HeroScrollDemo from '../component/ScrollAnimation';
import AppleCardsCarouselDemo from '../component/CardsCarousel';

const About = () => {
  return (
    <div>
      <FloatingNavDemo></FloatingNavDemo>
      <Navbar></Navbar>
      <BackgroundBeamsDemo></BackgroundBeamsDemo>
      <HeroScrollDemo></HeroScrollDemo>
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
      <Footer></Footer>
    </div>
  )
}

export default About
