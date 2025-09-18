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
          <h1 className="text-[12vmax] md:text-[120px] sm:leading-[12vmin]">
            YOUR FIELD
          </h1>
          <h2 className=" pl-[8vmax] text-[12vmax] md:text-[120px] sm:leading-[12vmin]">
            YOUR GAME
          </h2>
        </div>
      </div>
      <div className=" w-full overflow-x-auto p-[3vmax] bg-gradient-to-r from-[#ffffff] to-[#D4DFED]">
        <h1
          className="font-semibold text-3xl"
          style={{ fontFamily: "Poppins" }}
        >
          Some of the fields
        </h1>
        <div className="flex ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
