import HeroImg from "../assets/Heroimg.jpg";
const Home = () => {
  return (
    <div className="h-screen w-screen">
      <div className="relative h-[96%] w-full bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImg})` }}>
        <div className="absolute inset-0 bg-black/20 w-full h-full"></div>
        <div className="w-full lg:w-[60%] px-[8vmax] lg:px-0 py-[8vmax] h-full flex flex-col justify-center items-center text-white leading-none drop-shadow-2xl"
        style={{ fontFamily: 'Racing Sans One'}}>
          <h1 className="text-[12vmax] md:text-[120px]">YOUR FIELD</h1>
          <h2 className=" pl-[8vmax] text-[12vmax] md:text-[120px]">YOUR GAME</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
