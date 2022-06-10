import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Info from "./Info";
import Projects from "./Projects";
import ProjectsInfo from "./ProjectsInfo";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProjectsInfo></ProjectsInfo>
      <Projects></Projects>
      <Info></Info>

      <Footer></Footer>
    </div>
  );
};

export default Home;
