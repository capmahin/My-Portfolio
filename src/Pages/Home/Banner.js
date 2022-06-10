import React from "react";
import Me from "../../assists/Images/ME/Me.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/about");
  };
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
          <p class="py-6 text-xl font-bold">
            I can build Full Stack website. i like to build Front-End and
            Back-end both side .. i love to work using React. i work many MEAN
            Stack Projects. I’ve always been someone who has both a creative and
            a logical side. When I discovered web design. i love to Prefer
            wroking in MEAN Stack Project.
          </p>
          <p class="py-2 text-xl font-bold text-purple-900">
            MEAN stack: JavaScript - MongoDB - Express - AngularJS - Node.js
          </p>
          <div>
            <button
              class="btn btn-xs btn-info sm:btn-sm md:btn-md lg:btn-lg"
              onClick={navigateAbout}
            >
              About Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
