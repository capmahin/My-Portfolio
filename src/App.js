import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";

import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Resume from "./Pages/Resume/Resume";
import MyProjects from "./Pages/My-projects/MyProjects";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="my-projects" element={<MyProjects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
