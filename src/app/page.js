import "./globals.css";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Triplead from "./_components/Triplead";
import Sticky from "./_components/Sticky";
import Features from "./_components/Features";

export default function Home() {
  return (
    <>
      <p className="text-red">xzczxnmc,</p>
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
}
