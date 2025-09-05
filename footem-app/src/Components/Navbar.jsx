import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="absolute top-0 left-0 w-full z-50 ">
        <div className="flex justify-between ">
          <div>
            <h1 className="m-4 p-4 text-xl">Logo</h1>
          </div>
          <div className="flex justify-end p-4 gap-12 mx-12 my-4">
            
            <ul className="flex text-white text-xl font-semibold font-poppins space-x-12">
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
            <div className="bg-gray-300  text-green-700 px-4 py-1 rounded-xl">
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
