import AboutSection from "./components/AboutUs/AboutUs";
import Banner from "./components/Banner/Banner";
import FaqSection from "./components/FaqSection/FaqSection";
import Navbar from "./components/Navbar/Navbar";
import PrevWorkedSection from "./components/PrevWorkedSection/PrevWorkedSection";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";


const Greeting = () => {
  return (<div><Navbar/>
  <Banner/><AboutSection/><WhatWeDo/><PrevWorkedSection/><FaqSection/></div>
  )
};

export default Greeting;
