import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative ">
      <nav className="absolute top-0 left-0 w-full z-50 ">
        <div className="flex sm:justify-between justify-center ">
          <div>
            <h1 className="  text-xl">Logo</h1>
          </div>
          <div className="flex  justify-end p-[2vmax] gap-[4vw]  mx-[2vw] my-1">

            <ul className="flex text-white text-[2vmax]  lg:text-2xl font-semibold space-x-[4vw] lg:space-x-[3vmax]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mybookings">MyBookings</Link>
              </li>
              <li>
                <Link to="/Turfs">Turfs</Link>
              </li>
            </ul>
            <div className="bg-gray-300 lg:text-[1vmax] font-semibold text-green-700 px-4 py-1 rounded-full cursor-pointer">
              <Link to="/signup">SignUp</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
