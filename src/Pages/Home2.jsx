import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { dataContext } from "../Context/UserContext";
import photo from "../assets/photo.jpg";

const Home2 = () => {
  const texts = [
    "Web Developer",
    "UI Designer",
    "Data Analyst",
    "Tech Enthusiast",
  ];
  const { index, setIndex } = useContext(dataContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [setIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 md:px-12 lg:px-32"
    >
      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-500 opacity-30 blur-[100px] rounded-full top-10 left-5 md:top-20 md:left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-500 opacity-30 blur-[100px] rounded-full bottom-10 right-5 md:bottom-20 md:right-10 animate-pulse"></div>

      {/* Left Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center md:text-left max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hi, I'm Alok Ranjan
        </h1>

        <motion.h2
          key={index}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-red-400 mb-6"
        >
          {texts[index]}
        </motion.h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
          I am passionate about <strong>Web Development</strong>,{" "}
          <strong>Data Analysis</strong>, and <strong>UI/UX Design</strong>. I
          love crafting modern and functional websites while exploring the world
          of technology.
        </p>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
          <motion.div whileHover={{ scale: 1.1 }} className="w-full sm:w-auto">
            <Link
              to="/about"
              className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all w-full block text-center"
            >
              About Me
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="w-full sm:w-auto">
            <Link
              to="/resume"
              className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all w-full block text-center"
            >
              Resume
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="w-full sm:w-auto">
            <Link
              to="/result"
              className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all w-full block text-center"
            >
              Result
            </Link>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex gap-4 sm:gap-6 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-all"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://github.com/Alok595/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-all"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
        }}
        className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mt-8 md:mt-0 z-0 transition-all"
      >
        <img
          src={photo}
          alt="Profile"
          className="w-full h-full object-cover p-2 rounded-tl-3xl rounded-br-3xl shadow-xl border-2 border-transparent hover:border-red-500 transition-all duration-300"
        />
      </motion.div>
    </motion.div>
  );
};

export default Home2;
