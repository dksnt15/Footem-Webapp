import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative ">
      <nav className="absolute top-0 left-0 w-full z-50 ">
        <div className="flex sm:justify-between justify-center ">
          <div>
            <h1 className=" sm:mx-[2vmax] my-[1vmax] text-xl">Logo</h1>
          </div>
          <div className="flex  justify-end  md:px-[2vmax]  py-[1.5vmax] gap-[1vw]  mx-[2vw] my-1">

            <ul className=" flex justify-content items-center text-white text-[2vmax]  lg:text-2xl  rounded-full px-[1vmax] space-x-[4vw] lg:space-x-[0.5vmax]">
              <li className=" hover:bg-black/5 hover:backdrop-blur-sm md:px-[1vmax] py-[0.1vmax]  rounded-full transition duration-300">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:bg-black/5 hover:backdrop-blur-sm md:px-[1vmax] py-[0.1vmax] rounded-full transition duration-300">
                <Link to="/mybookings">MyBookings</Link>
              </li>
              <li className="hover:bg-black/5 hover:backdrop-blur-sm md:px-[1vmax] py-[0.1vmax] rounded-full transition duration-300">
                <Link to="/Turfs">Turfs</Link>
              </li>
            </ul>
            <div className=" border-1 text-[0.8em] lg:text-[1vmax] font-semibold text-white hover:text-green-500 px-4 py-1 rounded-full cursor-pointer">
              <Link to="/signup">SignUp</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
