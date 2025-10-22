import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/Heroimg.jpg";

import HeroVid from "../assets/HeroVid.mp4";
import Card from "../Components/Card";
import Live from "../assets/Live.webm";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
const Home = () => {
  const navigate= useNavigate();
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = (e) => {
    const diff = startX.current - endX.current;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % comments.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + comments.length) % comments.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  const comments = [
    {
      text: "This app is amazing! It really helped me manage my schedule better.",
      author: "Riya",
    },
    {
      text: "Clean UI and easy to use. Highly recommend it!",
      author: "Aarav",
    },
    {
      text: "Customer support was quick and very helpful.",
      author: "Neha",
    },
  ];
  const turfs = [
    { id: 1, name: "Green Park Turf", location: "Delhi" },
    { id: 2, name: "City Arena", location: "Mumbai" },
    { id: 3, name: "Goal Hub Turf", location: "Bangalore" },
    { id: 4, name: "Soccer Zone", location: "Pune" },
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-[#ffffff] to-[#D4DFED]">
      <div className="relative h-[99vh] w-full bg-center bg-cover bg-no-repeat">
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
            YOUR <span className="text-[#b4e716]">FIELD</span>
          </h1>
          <h2 className=" pl-[8vmax] text-[12vmax] md:text-[120px] sm:leading-[12vmin]">
            YOUR GAME
          </h2>
        </div>
      </div>

      <div className=" ">
        <h1
          className="font-semibold text-4xl pt-[1vmax] pl-[2vmax] text-[#1c4b41]"
          style={{ fontFamily: "Poppins" }}
        >
          Featured Turfs
        </h1>
          <div className="flex w-full h-[23em] md:h-[25em] overflow-x-auto [scrollbar-width:none]   ">
           {turfs.map((turf)=>(
            <Card 
             key ={turf.id}
             turf={turf}
             onClick={()=> navigate(`/turf/${turf.id}`)}
           />))}

          </div>
        </div>

      <div className="w-full flex justify-center ">
        <div className="bg-[#1c4b41] w-full -mt-5 h-full  md:h-[400px] rounded-2xl shadow-inner p-[1vmax]  overflow-hidden z-10 ">
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

            <div className="hidden md:block md:w-1/3 h-[80%] rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
              <div className="w-full h-[70%] bg-gray-300 shadow-inner"></div>
              <div className="w-full h-[30%] bg-gray-100 flex justify-center items-center">
                <h2 className="text-xl">Discover </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full sm:h-[27vmax] flex sm:flex-row flex-col mt-[1vmax]">
        <div className="w-full sm:w-[40%] md:w-1/2 h-full flex justify-center items-center   ">
          <div
            className="p-[2vmax] sm:p-[0vmax] space-y-[2vmax] text-[#1c4b41]"
            style={{ fontFamily: "Poppins" }}
          >
            <h1 className="font-medium -tracking-[0.07em] text-3xl sm:text-[3vmax] ">
              Easy Online Booking
            </h1>
            <h1 className="font-medium text-4xl -tracking-[0.07em] text-[#b4e716] ">
              Affordable Rates
            </h1>
            <h1 className="font-medium text-3xl sm:text-[3vmax] -tracking-[0.07em] ">
              Verified Turfs
            </h1>
            <h1 className="font-medium text-3xl sm:text-[3vmax] -tracking-[0.07em] ">
              Real-Time Availability
            </h1>
          </div>
        </div>

        <div className=" w-full h-full sm:w-[60%] md:w-1/2 flex md:justify-center items-center">
          <div className="h-full lg:h-[75%] w-full md:w-[80%] flex rounded-2xl p-[1vmax] bg-[#282828] gap-[1vmax] ">
            <img
              src={HeroImg}
              alt="Hero"
              className="h-full w-1/2 hidden sm:block object-cover rounded-2xl"
            />

            <div className=" md:w-1/2 h-full p-[1vmax] text-white space-y-[1vmax]">
              <div className="w-full h-full flex flex-col  sm:space-y-3 ">
                <div className="w-full h-full flex sm:flex-col justify-end gap-3 sm:gap-0">
                  <img
                    className="rounded-full w-[50px] h-[50px] border-1 -ml-[5px]"
                    src=""
                    alt=""
                  />
                  <div
                    className="overflow-hidden w-full"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div
                      className="flex transition-transform duration-500 ease-in-out "
                      style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                      {comments.map((c, i) => (
                        <div
                          key={i}
                          className=" min-w-full rounded-xl whitespace-pre-wrap break-words overflow-hidden leading-relaxed"
                        >
                          <h2 className="font-medium">{c.author}</h2>
                          <p className="text-sm text-gray-300">{c.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-1">
                  {comments.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === index ? "bg-gray-600" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[30vmax] md:h-[25vmax] flex justify-center items-center text-7xl overflow-hidden">
        

        <video
          autoPlay
          muted
          loop
          className="absolute  w-full  object-cover"
          style={{
            objectFit: "contain",
            transformOrigin: "center",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 60%, transparent 80%)",
            maskImage:
              "radial-gradient(circle at center, black 60%, transparent 80%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        >
          <source src={Live} type="video/mp4" />
        </video>

        <h1
          className=" text-white items-center z-10"
          style={{
            fontFamily: "Racing Sans One",
     
            textShadow: `
                0 0 10px rgba(255,255,255,0.8),
                0 0 20px rgba(255,255,255,0.6),
                0 0 30px rgba(255,255,255,0.4)
              `,
          }}
        >
          Live the Game
        </h1>
      </div>

      <footer className="w-full bg-[#0a0a0a] text-gray-300 py-[3vmax]  overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between px-[3vmax] gap-10">
          {/* Left */}
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold text-white">Footurf</h1>
            <p className="text-sm text-gray-400 max-w-sm">
              Find, book, and play at the best turfs near you. Experience
              hassle-free booking and verified listings.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Quick Links
            </h2>
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
