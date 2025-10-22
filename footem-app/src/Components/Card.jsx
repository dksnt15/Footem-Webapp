import React from "react";

const Card = ({ turf, onClick }) => {
  return (
    <div className="">
      <div
        onClick={onClick}
        className=" w-[400px] m-[2vmax] flex flex-col bg-gray-200 justify-content items-center h-[300px] shadow-2xl rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <div className="w-full h-[65%] bg-gray-300 rounded-t-2xl shadow-inner ">
          <img src="" alt="" />
        </div>
        <div className=" p-[1.5vmax] flex justify-center gap-[5vmax] w-full">
          <div className="w-1/2">
            <h2 className="text-[1rem] font-semibold">{turf.name}</h2>
            <p className="text-[0.875rem] ">{turf.location}</p>
          </div>

          <h1 className="w-1/2 text-bold text-center text-[1.125rem]">
            Rs 1500
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
