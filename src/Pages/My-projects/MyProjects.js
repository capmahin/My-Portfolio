import React from "react";
import bike from "../../assists/Images/MyProjects/Bike-Center.png";
import bikecenter from "../../assists/Images/MyProjects/Bike-WareHouse.png";
import gym from "../../assists/Images/MyProjects/Gym.png";

const MyProjects = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-900 text-center">
        My-Projects
      </h1>
      <div className="flex p-8 grid grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={bike} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Bike-Manufacture-center-Site</h2>
            <p>• A Bike-Manufacturing website.</p>
            <p>
              {" "}
              • Front End Tech Used: React,ReactTailwind,React-route,Firebase
              Auth, React-hooks.
            </p>
            <p> • Back End Tech Used: Mongdb,Express,cods</p>
            <div class="card-actions">
              <a href="https://assignment-12-dfa93.firebaseapp.com/">
                <button class="btn btn-primary">Live-link</button>
              </a>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={gym} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Gym-Equipment-Site</h2>
            <p>• Gym Equipment website.</p>
            <p>
              • Front End Tech Used: React,React-Route,Firebase
              Auth,React-BootStrap.
            </p>
            <p>• Deploy:In FireBase</p>
            <div class="card-actions">
              <a href="https://assignment-10-eee47.web.app/">
                {" "}
                <button class="btn btn-primary">Live Link</button>
              </a>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={bikecenter} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Bike-WareHouse-Site</h2>
            <p>• Bike-WareHouse website.</p>
            <p>
              • Front End Tech Used:
              React,ReactTailwind,React-routs,React-hooks.
            </p>
            <p>• Back End Tech Used: Mongdb,Express,cods</p>
            <div class="card-actions">
              <a href="https://assignment-11-b1cef.web.app/">
                <button class="btn btn-primary">Live Link</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
