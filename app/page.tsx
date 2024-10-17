import AboutSection from "./components/AboutUs/AboutUs";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";


const Greeting = () => {
  return (<div><Navbar/>
  <Banner/><AboutSection/><WhatWeDo/></div>
  )
};

export default Greeting;
