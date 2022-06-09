import React from "react";

const InfoCard = ({ img, cardTitle }) => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl ">
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-3xl font-bold">{cardTitle}</h2>
      </div>
    </div>
  );
};

export default InfoCard;
