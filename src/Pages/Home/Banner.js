import React from "react";
import Me from "../../assists/Images/ME/Me.jpg";

const Banner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={Me} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold text-purple-600">
            Hi!! There!! My Name is Mahin.
          </h1>
          <h1 class="text-5xl font-bold text-purple-900">
            I am a Full Stack Developer.
          </h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
