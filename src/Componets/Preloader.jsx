import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onFinish }) => {
  const text = " Portfolio...";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [textComplete, setTextComplete] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 40 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 5 + 3,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener("resize", generateParticles);
    return () => window.removeEventListener("resize", generateParticles);
  }, []);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 75);
      return () => clearTimeout(timeout);
    } else {
      setTextComplete(true);
      setTimeout(() => onFinish(), 1200);
    }
  }, [index, text, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={textComplete ? { opacity: 0, scale: 1.1 } : {}}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black z-50 overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-400 rounded-full shadow-lg"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
            }}
            animate={{
              y: [particle.y, particle.y - 120, particle.y + 120],
              x: [particle.x, particle.x + 40, particle.x - 40],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Text */}
      <div className="text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-cyan-400 tracking-widest futuristic-text"
        >
          {displayText}
        </motion.h1>
      </div>

      <style>
        {`
          @keyframes pulse {
            0% { text-shadow: 0px 0px 10px #00ffff, 0px 0px 20px #00ffff; }
            50% { text-shadow: 0px 0px 15px #00ffff, 0px 0px 30px #00ffff; }
            100% { text-shadow: 0px 0px 10px #00ffff, 0px 0px 20px #00ffff; }
          }
          .futuristic-text {
            font-family: 'Rajdhani', sans-serif;
            animation: pulse 1.2s infinite alternate;
          }
        `}
      </style>
    </motion.div>
  );
};

export default Preloader;
