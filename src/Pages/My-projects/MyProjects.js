import React from "react";
import bike from "../../assists/Images/MyProjects/Bike-Center.png";
import bikecenter from "../../assists/Images/MyProjects/Bike-WareHouse.png";
import gym from "../../assists/Images/MyProjects/Gym.png";

import Bounce from "react-reveal/Bounce";

const MyProjects = () => {
  return (
    <Bounce top>
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
              <div>
                <p className="text-xl font-bold text-center p-3 ">
                  For Full Code Details!!!
                </p>
                <a href="https://github.com/capmahin/Bike-manufacture-center">
                  {" "}
                  <button class="btn btn-info">GitHub</button>
                </a>
              </div>
              <div class="card-actions">
                <a href="https://bike-manufacture-center.vercel.app/">
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
              <div>
                <p className="text-xl font-bold text-center p-3 ">
                  For Full Code Details!!!
                </p>
                <a href="https://github.com/capmahin/gym-equvment-site">
                  {" "}
                  <button class="btn btn-info">GitHub</button>
                </a>
              </div>
              <div class="card-actions">
                <a href="https://gym-equvment-site.vercel.app/">
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
              <div>
                <p className="text-xl font-bold text-center p-3 ">
                  For Full Code Details!!!
                </p>
                <a href="https://github.com/capmahin/Bike-wareHouse-clinetsite">
                  {" "}
                  <button class="btn btn-info">GitHub</button>
                </a>
              </div>
              <div class="card-actions">
                <a href="https://bike-ware-house-clinetsite.vercel.app/">
                  <button class="btn btn-primary">Live Link</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bounce>
  );
};

export default MyProjects;
