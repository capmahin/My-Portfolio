import React from "react";
import Zoom from "react-reveal/Zoom";

const InfoCard = ({ img, cardTitle }) => {
  return (
    <Zoom>
      <div class="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-3xl font-bold">{cardTitle}</h2>
        </div>
      </div>
    </Zoom>
  );
};

export default InfoCard;
