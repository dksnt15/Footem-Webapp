import HeroImg from "../assets/Heroimg.jpg";
import HeroVid from "../assets/HeroVid.mp4";
import Card from "../Components/Card";
const Home = () => {
  return (
    <div className="h-screen w-screen">
      <div className="relative h-[96%] w-full bg-center bg-cover bg-no-repeat">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HeroVid} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20 w-full h-full"></div>
        <div
          className="w-full lg:w-[60%] px-[8vmax] lg:px-0 py-[8vmax] h-full flex flex-col justify-center items-center text-white leading-none drop-shadow-2xl"
          style={{ fontFamily: "Racing Sans One" }}
        >
          <h1 className="flex gap-[2vmax] text-[12vmax] md:text-[120px] sm:leading-[12vmin]">
            YOUR <h1 className="text-[#1c4b41]">FIELD</h1>
          </h1>
          <h2 className=" pl-[8vmax] text-[12vmax] md:text-[120px] sm:leading-[12vmin]">
            YOUR GAME
          </h2>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#ffffff] to-[#D4DFED]  ">
        <h1
          className="font-semibold text-4xl pt-[1vmax] pl-[2vmax]"
          style={{ fontFamily: "Poppins" }}
        >
          Featured Turfs
        </h1>
        <div className="flex w-full overflow-x-auto    ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="bg-[#1c4b41] w-full md:h-[400px] rounded-2xl shadow-inner p-[1vmax] overflow-hidden ">
       <h1
            className="text-white font-semibold text-4xl p-[1.5vmax]"
            style={{ fontFamily: "Poppins" }}
          >
            Quick Booking
          </h1>
        <div className="w-full h-full p-[1vmax] flex gap-[5vmax]  ">
          
          <div className="bg-gray-100 m-[1vmax] rounded-2xl w-full md:w-1/2 md:h-[70%] shadow-lg">
            <form
              action=""
              className="w-full h-full p-[2vmax] flex flex-col space-y-4 "
            >
              <input
                type="text"
                className="w-full shadow-lg rounded-xl h-[30px] p-[20px] focus:outline-none "
                placeholder="Enter Location"
              />
              <input
                type="text"
                className="w-1/2 h-[30px] shadow-lg rounded-xl p-[20px] focus:outline-none "
                placeholder="Enter Date"
              />
              <button
                type="submit"
                className="cursor-pointer bg-green-700 shadow-2xl text-white p-[1vmax] rounded-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                Check Availability
              </button>
            </form>
          </div>
          <div className="hidden md:block md:w-1/3 h-[80%] rounded-2xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
            <div className="w-full h-[70%] bg-gray-300 shadow-inner">

            </div>
            <div className="w-full h-[30%] bg-gray-100 flex justify-center items-center">
             <h2 className="text-xl">Discover </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
