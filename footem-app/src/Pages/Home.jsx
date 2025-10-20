import HeroImg from "../assets/Heroimg.jpg";
import HeroVid from "../assets/HeroVid.mp4";
import Card from "../Components/Card";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#ffffff] to-[#D4DFED] text-[#1c1c1c] overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[100vh] w-full bg-center bg-cover bg-no-repeat overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HeroVid} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-white text-center space-y-3 px-4"
          style={{ fontFamily: "BBH Sans Hegarty" }}
        >
          <h1 className="text-[12vmax] md:text-[120px] leading-none font-bold drop-shadow-2xl">
            YOUR <span className="text-[#b4e716]">FIELD</span>
          </h1>
          <h2 className="text-[10vmax] md:text-[100px] leading-none font-bold">
            YOUR GAME
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mt-3 font-light">
            Book your favorite turf in seconds. Anytime, anywhere.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#b4e716] text-black rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
            Explore Turfs
          </button>
        </div>
      </div>

      {/* Quick Booking Section */}
      <div className="w-full flex justify-center px-[4vmax] -mt-0 overflow-hidden">
        <div className="bg-[#0d3107]  mt-15 w-full max-w-7xl rounded-3xl shadow-2xl p-[2vmax]">
          <h1
            className="text-white font-semibold text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Quick Booking
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
            <form className="bg-gray-100 p-[2vmax] rounded-2xl shadow-lg flex flex-col space-y-4 w-full md:w-1/2">
              <input
                type="text"
                className="w-full h-[45px] p-[15px] rounded-xl focus:outline-none shadow-sm"
                placeholder="Enter Location"
              />
              <input
                type="date"
                className="w-1/2 h-[45px] p-[15px] rounded-xl focus:outline-none shadow-sm"
              />
              <button
                type="submit"
                className="bg-[#b4e716] text-black font-semibold py-3 rounded-xl hover:scale-105 transition-all duration-300"
              >
                Check Availability
              </button>
            </form>

            <div className="hidden md:flex w-[45%] h-[250px] rounded-2xl overflow-hidden relative shadow-lg cursor-pointer group">
              <img
                src={HeroImg}
                alt="Discover Turf"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h2 className="text-2xl font-semibold text-white">
                  Discover Nearby Turfs
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Turfs */}
      <div className="mt-[4vmax] px-[2vmax] overflow-hidden">
        <h1
          className="font-semibold text-4xl mb-[1vmax]"
          style={{ fontFamily: "Poppins" }}
        >
          Featured Turfs
        </h1>
        <div className="flex w-full overflow-x-auto overflow-y-hidden gap-6 pb-4 scrollbar-hide">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* Highlights */}
      <div className="w-full my-[4vmax] flex flex-col sm:flex-row items-center justify-center px-[3vmax] gap-[3vmax] overflow-hidden">
        <div
          className="w-full sm:w-1/2 space-y-3 text-[#1c4b41]"
          style={{ fontFamily: "Poppins" }}
        >
          <h1 className="font-medium text-[2.5vmax]">⚡ Easy Online Booking</h1>
          <h1 className="font-medium text-[2.5vmax] text-[#b4e716]">
            💸 Affordable Rates
          </h1>
          <h1 className="font-medium text-[2.5vmax]">✅ Verified Turfs</h1>
          <h1 className="font-medium text-[2.5vmax]">
            📅 Real-Time Availability
          </h1>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <div className="bg-[#282828] rounded-3xl p-5 w-[90%] sm:w-[80%] flex gap-4 text-white shadow-xl overflow-hidden">
            <img
              src={HeroImg}
              alt="Hero"
              className="h-[200px] w-1/2 hidden sm:block object-cover rounded-2xl"
            />
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-[50px] h-[50px] bg-gray-500 rounded-full"></div>
                <h2 className="text-lg font-semibold">Rahul Sharma</h2>
              </div>
              <p className="text-gray-300 mt-3">
                “Loved the turf quality and quick booking process. Definitely my
                go-to place for weekend football matches!”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#0a0a0a] text-gray-300 py-[3vmax] mt-[3vmax] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between px-[3vmax] gap-10">
          {/* Left */}
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold text-white">Footurf</h1>
            <p className="text-sm text-gray-400 max-w-sm">
              Find, book, and play at the best turfs near you.  
              Experience hassle-free booking and verified listings.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Quick Links</h2>
            <ul className="space-y-1 text-gray-400">
              <li className="hover:text-[#b4e716] cursor-pointer">Home</li>
              <li className="hover:text-[#b4e716] cursor-pointer">About</li>
              <li className="hover:text-[#b4e716] cursor-pointer">Contact</li>
              <li className="hover:text-[#b4e716] cursor-pointer">Terms</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
            <p>Email: support@footurf.com</p>
            <p>Phone: +91 98765 43210</p>
            <div className="flex gap-4 mt-3">
              <FaFacebookF className="cursor-pointer hover:text-[#b4e716]" />
              <FaInstagram className="cursor-pointer hover:text-[#b4e716]" />
              <FaTwitter className="cursor-pointer hover:text-[#b4e716]" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#b4e716]" />
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Footurf. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
