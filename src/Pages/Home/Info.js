import React from "react";
import InfoCard from "./InfoCard";
import card1 from "../../assists/Images/Banner/Full-stack.jpg";
import card2 from "../../assists/Images/Banner/Mean-stack.jpeg";
import card3 from "../../assists/Images/Banner/Node.png";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard cardTitle="Full-Stack" img={card1}></InfoCard>
      <InfoCard cardTitle="Mean-stack" img={card2}></InfoCard>
      <InfoCard cardTitle="Node" img={card3}></InfoCard>
    </div>
  );
};

export default Info;
