import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectsDetails = ({ img, cardTitle, Description }) => {
  const navigate = useNavigate();
  const navigateProject = () => {
    navigate("/my-projects");
  };
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-xl text-purple-700 font-bold">
          {cardTitle}
        </h2>
        <p className="text-xl font-bold">{Description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" onClick={navigateProject}>
            Details!!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
