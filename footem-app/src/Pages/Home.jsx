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
          <h1 className=" text-[12vmax] md:text-[120px] sm:leading-[12vmin]">
            YOUR <span className="text-[#1c4b41]">FIELD</span>
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
      <div className="w-full flex justify-center">
        <div className="bg-[#1c4b41] w-[98%] h-full md:h-[400px] rounded-2xl shadow-2xl p-[1vmax] overflow-hidden ">
          <h1
            className="text-white font-semibold sm:text-4xl p-[0.5vmax]"
            style={{ fontFamily: "Poppins" }}
          >
            Quick Booking
          </h1>
          <div className="w-full h-full p-[0.5vmax] flex gap-[5vmax]  ">
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
              <div className="w-full h-[70%] bg-gray-300 shadow-inner"></div>
              <div className="w-full h-[30%] bg-gray-100 flex justify-center items-center">
                <h2 className="text-xl">Discover </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[40vh] flex flex-wrap">
        <div className="w-1/2 h-full bg-[#B2E912]">
          <h1 className="text-[2vmax] font-semibold">Download Our App</h1>
        </div>

        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="h-[90%] w-[80%] rounded-2xl p-[1vmax] bg-[#282828] flex gap-[1vmax] ">
            <img
              src={HeroImg}
              alt="Hero"
              className="h-full w-1/2 object-cover rounded-2xl"
            />

            <div className=" w-full p-[1vmax] text-white space-y-[1vmax]">
              <div className="w-full flex gap-[0.5vmax] items-center ">
                <img
                  className="rounded-full w-[50px] h-[50px] border-1"
                  src=""
                  alt="Comment"
                />
                <h2>Name</h2>
              </div>

              <p className="w-full border-2 border-gray-500 rounded-xl whitespace-pre-wrap break-words overflow-hidden leading-relaxed">
                comments
                als;djf;asjdf;la
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white w-full h-[30vmax] flex justify-center ">
        info
      </footer>
    </div>
  );
};

export default Home;
