import Contactform from "../component/ContactForm";
import Footer from "../component/layout/footer";
import Navbar from "../component/layout/Navbar";
import FloatingNavDemo from "../component/FloatingNavbar";


const Contact = () => {
  return (
    <div>
        <FloatingNavDemo></FloatingNavDemo>
        <Navbar></Navbar>
        <Contactform></Contactform>
        <Footer></Footer>
    </div>
  )
}

export default Contact
