import React, { useContext } from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaBell,
  FaHeart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { dataContext } from "../Context/UserContext";
import { motion } from "framer-motion";

const SideBar = () => {
  const { isOpen, setIsOpen } = useContext(dataContext);
  const data = [
    { icon: <FaHome />, title: "HOME", link: "/" },
    { icon: <FaUser />, title: "ABOUT", link: "/about" },
    { icon: <FaCog />, title: "SERVICES", link: "/services" },
    { icon: <FaBell />, title: "PROJECTS", link: "/portfolio" },
    { icon: <FaHeart />, title: "CONTACT", link: "/contact" },
  ];

  return (
    <>
      {/* Hamburger Button (Visible on Small Screens) */}
      <button
        className="lg:hidden fixed top-5 left-5 z-50 text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-full bg-black w-64 border-r-2 border-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-10`}
      >
        {/* Animated Sidebar Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-[80%] text-center py-4 mt-10 mx-auto text-white font-bold text-2xl border-white neon-text"
        >
          <motion.span
            animate={{
              textShadow: [
                "0px 0px 5px #00bfff",
                "0px 0px 15px #00bfff",
                "0px 0px 5px #00bfff",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            ALOK RANJAN
          </motion.span>

          {/* Top Right Corner Border */}
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white"></div>
          {/* Bottom Left Corner Border */}
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white"></div>
        </motion.div>

        {/* Sidebar Links */}
        <div className="mt-16 w-full flex flex-col items-center gap-6">
          {data.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                `flex items-center gap-4 text-white text-xl p-3 w-[90%] border-b-2 border-[#e0d6d670] rounded-lg ${
                  isActive
                    ? " text-yellow-400 font-bold"
                    : "hover:bg-white hover:text-black transition-all"
                }`
              }
              onClick={() => setIsOpen(false)} // Close sidebar on click (for mobile)
            >
              <span className="text-2xl">{item.icon}</span>
              <h1 className="font-medium">{item.title}</h1>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Additional Styles for Neon Glow */}
      <style>
        {`
          .neon-text {
            text-shadow: 0px 0px 10px #00bfff, 0px 0px 20px #00bfff;
          }
        `}
      </style>
    </>
  );
};

export default SideBar;
