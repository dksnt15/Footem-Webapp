import React from "react";

const Card = () => {
  return (
    <div className="w-full flex justify-center items-center flex-wrap">
      <div className=" w-[90%] m-[2vmax] flex flex-col bg-gray-200 justify-content items-center sm:w-[300px] h-[300px] shadow-2xl rounded-2xl">
        <div className="w-full h-[65%] bg-gray-300 rounded-t-2xl shadow-inner ">
          <img src="" alt="" />
        </div>
        <div className=" p-[1.5vmax]  flex justify-center gap-[5vmax] w-full">
          <div className="w-1/2">
            <h2 className=" text-lg">Name</h2>
            <p className="text-sm text-gray-500">Card Description</p>
          </div>

          <h1 className="w-1/2 text-center text-xl">Rs 1500</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
