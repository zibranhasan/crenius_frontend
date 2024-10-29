import AboutSection from "./components/AboutUs/AboutUs";
import Banner from "./components/Banner/Banner";
import Contact from "./components/ContactSection/ContactSection";
import FaqSection from "./components/FaqSection/FaqSection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PrevWorkedSection from "./components/PrevWorkedCoSection/PrevWorkedSection";
import Projects from "./components/Projects/projects";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";

const Greeting = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutSection />
      <WhatWeDo />
      <PrevWorkedSection />
      <FaqSection />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
};

export default Greeting;
