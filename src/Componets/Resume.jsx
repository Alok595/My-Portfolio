import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [document.getElementById("resume-content").innerText],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "Alok_Ranjan_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-black p-6">

      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl bg-white shadow-lg p-8 rounded-xl"
        id="resume-content"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Alok Ranjan
        </h1>
        <p className="text-center text-gray-600">
          General Secretary | Web Developer | Data Analyst
        </p>

        <div className="border-t my-4"></div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">
            Contact Information
          </h2>
          <ul className="mt-2 text-gray-600">
            <li>📍 Jharkhand, India</li>
            <li>📧 alok.ranjan@example.com</li>
            <li>📞 +91 XXXXXXXXXX</li>
            <li>🌐 www.alokranjan.dev</li>
          </ul>
        </section>

        <div className="border-t my-4"></div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">Summary</h2>
          <p className="mt-2 text-gray-600">
            Creative and detail-oriented web developer with expertise in
            front-end design, data analytics, and UI/UX development. Passionate
            about designing modern web experiences and analyzing data to drive
            insights.
          </p>
        </section>

        <div className="border-t my-4"></div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">Education</h2>
          <p className="mt-2 text-gray-600">
            📚 <strong>B.Tech | IIT Patna (CEP UG Program)</strong> <br /> 📅
            *2022 - Present* <br /> 📊 <strong>CPI:</strong> 8.9 (Semester 2)
          </p>
        </section>

        <div className="border-t my-4"></div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">
            Technical Skills
          </h2>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-gray-600">
            <li>💻 JavaScript, ReactJS, Tailwind CSS, Python, SQL</li>
            <li>🎨 MERN Stack, GSAP, Locomotive Scroll</li>
            <li>📊 Power BI, Excel, Pandas, Matplotlib, Seaborn</li>
            <li>📽 Premiere Pro, Photoshop, After Effects</li>
          </ul>
        </section>

        <div className="border-t my-4"></div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">
            Experience & Projects
          </h2>
          <ul className="mt-2 text-gray-600">
            <li>
              🛠 <strong>General Secretary | Technology Club, IITP</strong> (2024
              - Present)
            </li>
            <li>
              🌐 <strong>Help Setu - Capstone Project</strong> (Front-end
              Developer)
            </li>
            <li>
              📸 <strong>Glitch Theory - YouTube Channel</strong> (Co-founder &
              Editor)
            </li>
          </ul>
        </section>

        <div className="border-t my-4"></div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">
            Achievements & Leadership
          </h2>
          <ul className="mt-2 text-gray-600">
            <li>
              🏆 Elected *General Secretary* of the Technology Club, IITP.
            </li>
            <li>
              🚀 Designed and launched a web portfolio and multiple
              mini-projects.
            </li>
            <li>
              🎮 Competitive gamer with quick adaptability to new gaming
              environments.
            </li>
          </ul>
        </section>
      </motion.div>

      <button
        onClick={handleDownload}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
