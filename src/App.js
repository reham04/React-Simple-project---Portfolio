


import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About"; 
import Courses from "./pages/Courses";
import './App.css';
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/Contact" element={<Contact/>}/>


       
      </Routes>

  </>

    
   
  
  );
}

export default App;
