import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Created } from "./components";

const App = () => {
  console.clear();
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className=" bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        {/* <div className="bg-aboutUs bg-cover bg-no-repeat bg-center md:min-h-screen"> */}
        <div className="bg-white bg-no-repeat bg-center md:min-h-screen">
          <About />
        </div>
        {/* <div className="bg-[#DFDFDF] md:bg-skills bg-cover bg-no-repeat bg-center lg:min-h-screen"> */}
        <div className="bg-[#F6F6F6] lg:min-h-screen">
          <Tech />
        </div>
        <div className="bg-white">
          <Experience />
        </div>
        <div className="bg-[#F6F6F6]">
          <Works />
        </div>
        {/* <Feedbacks /> */}
        <div className="bg-white">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <Created />
      </div>
    </BrowserRouter>
  );
};

export default App;


// bg-hero-pattern