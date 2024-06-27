import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials"
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="testimonials-stars-container">
      <Home/>
      <About/>
      <Work/>
      <Testimonials/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
