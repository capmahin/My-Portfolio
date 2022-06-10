import React from "react";
import ProjectsDetails from "./ProjectsDetails";
import card1 from "../../assists/Images/Projects-details/Bike-Center.png";
import card2 from "../../assists/Images/Projects-details/Bike-WareHouse.png";
import card3 from "../../assists/Images/Projects-details/Gym.png";

const ProjectsInfo = () => {
  return (
    <div className="p-8">
      <div className="text-3xl font-bold text-purple-800 text-center p-4 ">
        <h1>My-Projects</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <ProjectsDetails
          Description="This site About Bike-Parts and its a MERN-Stack Projects
        for details Click this Button"
          cardTitle="Bike-Manufacture-Center"
          img={card1}
        ></ProjectsDetails>
        <ProjectsDetails
          Description="This site about Gym-Equipment Sell  and its a MERN-Stack Projects
      for details Click this Button"
          cardTitle="Gym-Equipment-Center "
          img={card3}
        ></ProjectsDetails>
        <ProjectsDetails
          Description=" This site about Bike Ware-House  and its a React Projects
      for details Click this Button"
          cardTitle="Bike-WareHouse"
          img={card2}
        ></ProjectsDetails>
      </div>
    </div>
  );
};

export default ProjectsInfo;
