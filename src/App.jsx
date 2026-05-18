import React from "react";
//import Counter from "./Components/Counter";
//import UseEffect from "./Components/useeffecthook";
import UseEffectHook from "./Components/useeffecthook";
import Fetch from "./Components/Fetch";
import Navbar from "./Navbar";
//import Hero from "./Components/Hero";
import Footer  from "./Components/Footer";
import Fetch2 from "./Fetch2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";


function App() {
  return (
    <>
    <BrowserRouter>
     {/* <Counter /> */}
      {/* <Fetch2 /> */}
     {/* <UseEffectHook /> */}
      {/* <Hero />} */} 
      <Navbar />
  
  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
  </Routes>
     
  <Footer />
  </BrowserRouter>
    </>
  );
}

export default App;