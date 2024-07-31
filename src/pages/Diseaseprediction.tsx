import Footer from "../component/layout/footer";
import Navbar from "../component/layout/Navbar";
import FloatingNavDemo from "../component/FloatingNavbar";
import ContactForm from '../component/DiseasePrediction';


const Diseaseprediction = () => {
  return (
    <div className="color-white">
        <FloatingNavDemo></FloatingNavDemo>
        <Navbar></Navbar>
        <ContactForm></ContactForm>
        <Footer></Footer>
    </div>
  )
}

export default Diseaseprediction
