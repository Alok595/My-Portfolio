import React from "react";
import { motion } from "framer-motion";
import imageEn from "../assets/imageEnhancer.png";
import Moko from "../assets/Moko.png";
import Quiz from "../assets/Quiz.png";
import Todo from "../assets/Todo.png";
import SastaGpt from "../assets/SastaGpt.png";

const Portfolio = () => {
  const projects = [
    {
      title: "ALook:-Image Enhancer Website",
      description:
        "Look is an AI-powered image enhancement tool that transforms your low-quality photos into high-definition images instantly. Just upload an image, and let AI work its magic! 🚀",
      image: imageEn,
      link: "https://alook-imageenhancer.netlify.app/",
    },
    {
      title: "Moko-AI Virtual Agent",
      description:
        "Moko is a voice-controlled virtual assistant built with React and Google Gemini AI. It listens to commands, processes them with AI, and speaks back responses, helping with tasks like opening websites and answering queries.",
      image: Moko,
      link: "https://moko-ai-agent.vercel.app/",
    },
    {
      title: "KBC Quiz Game",
      description:
        "KBC Quiz Game - Test Your Knowledge & Win! 🎉 A fun and interactive quiz game inspired by Kaun Banega Crorepati (KBC)! Answer multiple-choice questions, use lifelines, and see how far you can go. Do you have what it takes to be a crorepati? 💰🔥",
      image: Quiz,
      link: "https://kbc-quiz-using-react.vercel.app/",
    },
    {
      title: "Yadi ToDo",
      description:
        "Yadi ToDo - Simplify Your Tasks ✅ Yadi ToDo is a lightweight and intuitive task management app that helps you stay organized. Add, track, and complete your tasks effortlessly! 🚀",
      image: Todo,
      link: "https://todolist-taupe-theta.vercel.app/",
    },
    {
      title: "SastaGpt",
      description:
        "SastaGPT – A budget-friendly AI that responds with text, generates images from text, answers images with insights, and more! Smart, sassy, and creative. 🤖🔥",
      image: SastaGpt,
      link: "https://sastagptbro.netlify.app/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white min-h-screen px-6 py-12 flex flex-col items-center"
    >
      <div className="absolute w-96 h-96 bg-blue-500 opacity-30 blur-[120px] rounded-full top-20 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-purple-500 opacity-30 blur-[120px] rounded-full bottom-20 right-10 animate-pulse"></div>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-blue-400 text-center border-b-4 border-blue-500 pb-4"
      >
        My Projects
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-300 text-lg mt-4 text-center max-w-2xl"
      >
        Here are some of my recent projects showcasing my skills and creativity.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center border border-gray-700"
          >
            {/* Laptop Frame */}
            <div className="relative bg-gray-900 p-3 rounded-lg shadow-md w-full max-w-xs border border-gray-700">
              <div className="bg-gray-700 h-5 rounded-t-lg flex justify-start items-center px-3">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <div className="bg-black p-2 rounded-b-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-blue-400 mt-4 text-center">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mt-2 text-center">
              {project.description}
            </p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex justify-center mt-4"
            >
              <a
                href={project.link}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg text-sm font-bold hover:bg-blue-600 transition duration-300"
              >
                View Project
              </a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
