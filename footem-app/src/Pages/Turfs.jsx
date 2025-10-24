import React from "react";
import Card from "../Components/Card";
import turfdata from "../data/turf";
import { useNavigate } from "react-router-dom";

const Turfs = () => {
  const navigate = useNavigate();
  const turfs = [{}];
  return (
    <div className="relative w-full min-h-screen  ">
      <div className="w-full p-[2vmin] ">
        <h1 className="text-[5vmin] font-bold  ">Find Your Perfect Turf</h1>
        <h2 className="text-md pl-1 ">
          Showing some of the best turfs available
        </h2>
      </div>
      <div className="w-full h-full flex justify-center gap-[2vmin]">
        <aside className="hidden md:block md:w-[20%] h-full rounded-2xl shadow-2xl p-[1vmin] ">
          <h2 className="text-[2vmin] font-bold">Filter</h2>

          <div className="flex flex-col text-[2vmin] text-black/70 font-semibold space-y-[1vmin]">
            <div className="flex flex-col rounded-lg sm:flex-row  items-center gap-[1vmin] p-[1vmin] w-full text-black/70">
              <label for="location-input">Location</label>
              <input
                className="w-full border border-gray-300 text-sm rounded-md p-1"
                type="text"
                id="location-input"
                placeholder="City, Area, or Turf Name"
              ></input>
            </div>

            <div className="flex flex-col space-y-2 rounded-xl shadow-xl p-[1vmin] ">
              <h3>Sport Type</h3>
              <label>
                <input type="checkbox" name="sport" value="football" />
                <span>Football</span>
              </label>
              <label>
                <input type="checkbox" name="sport" value="cricket" />
                <span>Cricket</span>
              </label>
            </div>

            <div className="rounded-xl p-[1vmin] shadow-xl">
              <label for="price-range">Price Range</label>
              <div className="h-2 bg-gray-700 rounded-full mb-3">
                <div className="h-full bg-green-500 rounded-full w-3/4"></div>
              </div>
              <div className="text-sm text-gray-400">
                $<span id="min-price">1000</span> - $
                <span id="max-price">2500</span> per hour
              </div>
            </div>
            <button
              id="apply-filters-btn"
              class="w-full mt-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg 
                   hover:bg-green-500 transition duration-200 transform hover:scale-[1.01] active:scale-95"
            >
              APPLY FILTERS
            </button>
          </div>
        </aside>

        <div className="h-full w-full md:w-[75%] rounded-2xl border-2  border-blue-500 flex flex-wrap">
          {turfdata.map((turf) => (
            <Card
              key={turf.id}
              turf={turf}
              onClick={() => navigate(`/turf/${turf.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Turfs;
