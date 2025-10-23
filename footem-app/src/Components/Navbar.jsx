import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="relative ">
      <nav className={` w-full h-[4em] lg:h-[5.5em] z-50 ${location.pathname === "/" ? "absolute top-0 left-0 " : "bg-[#0a0a0a] sticky top-0 shadow-2xl"}`}>
        <div className="flex justify-between ">
          <div>
            <h1
              className="text-white sm:mx-[2vmax] my-[1vmax] text-4xl"
              style={{ fontFamily: "BBH Sans Hegarty" }}
            >
              Footurf
            </h1>
          </div>

          <div className="flex w-full justify-end  md:px-[2vmax] py-[1vmax] gap-[2vw]  mx-[2vw] my-1">
            <div className="bg-gradient-to-r from-[#ffffff] to-[#D4DFED] flex rounded-full justify-end md:w-1/2 gap-[0.5rem] items-center p-[0.1em] shadow-2xl">
              <form className="hidden md:block w-full rounded-full focus:ring-0 ">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-[1.7em] p-[1em] focus:outline-none "
                />
              </form>
              <button className="bg-[#b4e716] rounded-full w-[45px] h-[40px] flex justify-center items-center">
                <Search />
              </button>
            </div>

            <ul className="hidden sm:flex justify-content items-center text-white text-[2.5vmax]  lg:text-[1.5em]  rounded-full px-[1vmax] space-x-[4vw] lg:space-x-[0.5vmax]">
              <li
                className={`hover:bg-black/10 hover:backdrop-blur-sm px-[1vmax] py-[0.1vmax] rounded-full transition duration-300 hover:text-[#b4e716]
              ${
                location.pathname === "/" ? "text-[#b4e716] bg-black/20 " : ""
              }`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`hover:bg-black/5 hover:backdrop-blur-sm px-[1vmax] py-[0.1vmax] rounded-full transition duration-300 hover:text-[#b4e716]
              ${
                location.pathname === "/mybookings"
                  ? "text-[#b4e716] bg-black/20"
                  : ""
              }`}
              >
                <Link to="/mybookings">MyBookings</Link>
              </li>
              <li
                className={`hover:bg-black/5 hover:backdrop-blur-sm px-[1vmax] py-[0.1vmax] rounded-full transition duration-300 hover:text-[#b4e716]
              ${
                location.pathname === "/Turfs"
                  ? "text-[#b4e716] bg-black/20"
                  : ""
              }`}
              >
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
                <li className=" rounded-lg mt-[0.5rem] py-2 active:text-[#b4e716]">
                  <Link to="/">Home</Link>
                </li>
                <li className=" rounded-lg mt-[0.5rem] py-2 active:text-[#b4e716]">
                  <Link to="/mybookings">MyBookings</Link>
                </li>
                <li className=" rounded-lg mt-[0.5rem] py-2 active:text-[#b4e716]">
                  <Link to="/Turfs">Turfs</Link>
                </li>
              </div>
            </ul>

            <div className={`flex items-center border-1 text-[0.8em] lg:text-[1vmax] font-semibold text-white hover:text-[#b4e716] px-4 py-1 rounded-full cursor-pointer `}>
              <Link className="" to="/signup">
                SignUp
              </Link>
            </div>
            <button
              className=" sm:hidden text-white z-50 "
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu className=" " size={28} />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
