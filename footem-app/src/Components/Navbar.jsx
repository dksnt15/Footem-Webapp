import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative ">
      <nav className="absolute top-0 left-0 w-full z-50 ">
        <div className="flex justify-between ">
          <div>
            <h1 className=" sm:mx-[2vmax] my-[1vmax] text-xl">Footurf</h1>
          </div>

          <div className="flex w-full justify-end md:px-[2vmax] py-[1.5vmax] gap-[1vw]  mx-[2vw] my-1">
             <div className="flex justify-end w-full gap-[0.5rem] items-center ">
              <form className=" w-full bg-white hidden sm:flex  rounded-full ">
                <input type="text" placeholder="Search" className="" />
              </form>
              <button className="text-white">
                <Search />
              </button>
            </div>

            <ul className="hidden sm:flex justify-content items-center text-white text-[2vmax]  lg:text-2xl  rounded-full px-[1vmax] space-x-[4vw] lg:space-x-[0.5vmax]">
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

            <ul
              className={`fixed md:hidden w-1/2 flex flex-col top-0 right-0  h-full text-white bg-black/80 backdrop-blur-sm p-4 transform transition-all duration-300 ease-in-out ${
                open
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="mt-[1rem]">
                <li className=" rounded-lg mt-[0.5rem] py-2">
                  <Link to="/">Home</Link>
                </li>
                <li className=" rounded-lg mt-[0.5rem] py-2">
                  <Link to="/mybookings">MyBookings</Link>
                </li>
                <li className=" rounded-lg mt-[0.5rem] py-2">
                  <Link to="/Turfs">Turfs</Link>
                </li>
              </div>
            </ul>

           

            <div className=" border-1 text-[0.8em] lg:text-[1vmax] font-semibold text-white hover:text-green-500 px-4 py-1 rounded-full cursor-pointer">
              <Link to="/signup">SignUp</Link>
            </div>
            <button
              className=" sm:hidden text-white z-50 "
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
