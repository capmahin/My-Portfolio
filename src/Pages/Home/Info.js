import React from "react";
import InfoCard from "./InfoCard";
import card1 from "../../assists/Images/Banner/Mongodb.jpg";
import card2 from "../../assists/Images/Banner/Express.png";
import card3 from "../../assists/Images/Banner/React.jpeg";
import card4 from "../../assists/Images/Banner/Node.png";

const Info = () => {
  return (
    <div className="p-8">
      <div className="text-3xl font-bold text-purple-800 text-center p-4 ">
        <h1>My-Skills</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <InfoCard cardTitle="Mongodb" img={card1}></InfoCard>
        <InfoCard cardTitle="Express" img={card2}></InfoCard>
        <InfoCard cardTitle="React" img={card3}></InfoCard>
        <InfoCard cardTitle="Node" img={card4}></InfoCard>
      </div>
    </div>
  );
};

export default Info;
