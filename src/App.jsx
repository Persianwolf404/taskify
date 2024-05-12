import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Triplead from "./Components/Triplead";
import Sticky from "./Components/Sticky";
import Features from "./Components/Features";
const App = () => {



  return (
    <>
      <Sticky />
      <div className="navapp flex flex-col">
        <Navbar />
        <div className="app">
          <Hero />
          <About />
        </div>
        <Triplead />
        <div className="app">
          <Features />
          
        </div>
        <div className="h-[100vh]"></div>
      </div>
    </>

  );
};

export default App;
