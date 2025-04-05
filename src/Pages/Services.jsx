import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaChartLine,
  FaCloud,
  FaShoppingCart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen px-6 md:px-12 lg:px-20 py-12 relative">
      {/* Background Effects */}
      

      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400 border-b-4 border-blue-500 pb-2 inline-block">
          My Services
        </h1>
        <p className="text-gray-300 text-lg mt-4 italic">
          Providing high-quality web solutions with expertise in UI/UX, frontend
          & backend development.
        </p>
      </div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12"
      >
        {[
          {
            icon: <FaCode className="text-blue-400 text-5xl" />,
            title: "Web Development",
            description:
              "Building fast, responsive, and modern web applications using the latest technologies.",
          },
          {
            icon: <FaPaintBrush className="text-green-400 text-5xl" />,
            title: "UI/UX Design",
            description:
              "Creating visually stunning and user-friendly interfaces with a focus on experience.",
          },
          {
            icon: <FaMobileAlt className="text-yellow-400 text-5xl" />,
            title: "Mobile App Development",
            description:
              "Developing cross-platform mobile applications with smooth user experiences.",
          },
          {
            icon: <FaChartLine className="text-red-400 text-5xl" />,
            title: "SEO & Analytics",
            description:
              "Optimizing websites for search engines and analyzing traffic to enhance performance.",
          },
          {
            icon: <FaCloud className="text-cyan-400 text-5xl" />,
            title: "Cloud Solutions",
            description:
              "Deploying scalable and secure cloud applications with modern cloud computing platforms.",
          },
          {
            icon: <FaShoppingCart className="text-pink-400 text-5xl" />,
            title: "E-commerce Development",
            description:
              "Building feature-rich online stores with secure payment integrations.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-300">Interested in working together?</p>
        <Link
          to="/contact"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Services;
