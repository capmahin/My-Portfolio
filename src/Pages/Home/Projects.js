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
          A full stack web developer is a person who can develop both client and
          server software.In addition to mastering HTML and CSS, he knows how
          to: Program a browser (like using JavaScript, jQuery, Angular, or Vue)
          Program a server (like using PHP, ASP, Python, or Node) Program a
          database (like using SQL, SQLite, or MongoDB). A full stack web
          developer is a person who can develop both client and server
          software.In addition to mastering HTML and CSS, he knows how to:
          Program a browser (like using JavaScript, jQuery, Angular, or Vue)
          Program a server (like using PHP, ASP, Python, or Node) Program a
          database (like using SQL, SQLite, or MongoDB).
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
