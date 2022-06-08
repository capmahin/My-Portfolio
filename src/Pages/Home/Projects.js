import React from "react";
import projects from "../../assists/Images/Projects/full-stack1200.png";
import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const navigateProjects = () => {
    navigate("/my-projects");
  };

  return (
    <section className="flex justify-center items-center p-5">
      <div className="flex-1">
        <img className="rounded-lg shadow-2xl" src={projects} alt="" />
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-xl text-primary font-bold">Projects</h3>
        <h2 className="text-3xl">Watch it!</h2>
        <p>
          Royal Enfield is an Indian multinational motorcycle manufacturing
          company headquartered in Chennai, Tamil Nadu, India. The company is
          the oldest global motorcycle brand in continuous production, and
          operates manufacturing plants in Chennai in India.
        </p>
        <div>
          <Link to="/my-projects" onClick={navigateProjects}>
            {" "}
            <button class="btn btn-wide btn-info">Projects</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
