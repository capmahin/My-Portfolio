import React from "react";
import ProjectsDetails from "./ProjectsDetails";

const ProjectsInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <ProjectsDetails></ProjectsDetails>
      <ProjectsDetails></ProjectsDetails>
      <ProjectsDetails></ProjectsDetails>
    </div>
  );
};

export default ProjectsInfo;
