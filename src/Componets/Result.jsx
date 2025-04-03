import React from "react";
import { motion } from "framer-motion";

const Result = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 to-black "
    >
      {/* Image with Smooth Animation & Cool Hover Effects */}
      <motion.img
        src="/Image.png"
        alt="Result"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{
          scale: 1.1,
          rotate: 3,
          filter: "brightness(1.2) drop-shadow(0px 0px 10px cyan)",
        }}
        className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg"
      />

      {/* Download Button with Enhanced Hover Animation */}
      <motion.a
        href="/result.pdf"
        download="result.pdf"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "#00FFFF",
          color: "#000",
          boxShadow: "0px 0px 20px cyan",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-2 right-2 bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md"
      >
        Download
      </motion.a>
    </motion.div>
  );
};

export default Result;
