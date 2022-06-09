import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Info from "./Info";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default Home;
