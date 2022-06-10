import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";

import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";

import MyProjects from "./Pages/My-projects/MyProjects";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />

        <Route path="my-projects" element={<MyProjects />} />
      </Routes>
    </div>
  );
}

export default App;
