import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen px-6 md:px-12 lg:px-20 py-12 overflow-y-auto"
    >
      {/* About Me Title */}
      <motion.div variants={fadeInUp} className="flex justify-start">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400 border-b-4 border-blue-500 pb-2">
          About Me
        </h1>
      </motion.div>

      {/* Short Description */}
      <motion.p
        variants={fadeInUp}
        className="text-gray-300 text-lg mt-4 italic"
      >
       I am a passionate Web Developer with extensive experience in UI/UX design and frontend development. With a deep understanding of modern web technologies, I specialize in creating visually appealing, highly functional, and responsive web applications. My expertise lies in leveraging frameworks like React and JavaScript to build seamless and interactive user experiences. I have a keen eye for design aesthetics and usability, ensuring that every project I work on is intuitive and engaging for users. My skill set includes crafting reusable UI components, optimizing website performance, and integrating best practices in frontend development to deliver high-quality digital solutions.
      </motion.p>

      {/* Personal Info + Skills Grid */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8"
      >
        {/* Personal Info Section */}
        <motion.div
          variants={fadeInUp}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Personal Details
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <p>
                <strong>Birthday:</strong> 5th Oct 2004
              </p>
              <p>
                <strong>Collage:</strong> IIT PATNA
              </p>
              <p>
                <strong>Degree:</strong> Bsc(Hons) in Computer Science & Data
                Analytics
              </p>
              <p>
                <strong>City:</strong> Ranchi,Jharkhand, India
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <strong>Age:</strong> 20
              </p>
              <p>
                <strong>Email:</strong> alokranjankolaalok@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 6202585952
              </p>
              <p>
                <strong>Freelance:</strong> Available
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={fadeInUp}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Skills</h2>
          <div className="space-y-4">
            {[
              { name: "HTML", level: 90 },
              { name: "CSS", level: 85 },
              { name: "JavaScript", level: 80 },
              { name: "React", level: 75 },
              
            ].map((skill, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="flex justify-between">
                  <p className="text-sm">{skill.name}</p>
                  <p className="text-sm font-bold text-green-400">
                    {skill.level}%
                  </p>
                </div>
                <div className="bg-gray-700 w-full h-4 rounded-md overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="bg-green-500 h-full rounded-md"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Education & Experience Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education Section */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-4 flex items-center text-blue-400">
            <FaGraduationCap className="mr-3" /> Education
          </h2>
          {[
            {
              title: "Bsc(Hons) in Computer Science & Data Analytics",
              subtitle: "IIT Patna | 2023 - 2026",
              marks: "CPI: 8.9 (till semester 2)",
              description:
                "Focused on Web Development, Machine Learning, and Data Analytics.",
            },
            {
              title: "Intermediate (PCM)",
              subtitle: "DAV Public School | 2020 - 2022",
              marks: "Percentage: 84.2%",
              description:
                "Studied Physics, Chemistry, Mathematics, and Computer Science with high academic achievements.",
            },
            {
              title: "Matriculation",
              subtitle: "DAV Public School | 2019 - 2020",
              marks: "Percentage: 76%",
              description:
                "Excelled in all subjects",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border-l-4 border-blue-400 hover:scale-105 transform transition duration-300"
            >
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.subtitle}</p>
              <p className="text-sm text-green-400 font-semibold">
                {item.marks}
              </p>
              <p className="text-sm mt-2">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-4 flex items-center text-red-400">
            <FaBriefcase className="mr-3" /> Experience
          </h2>
          {[
            {
              title: "Web Developer Intern",
              subtitle: "Tech Solutions | 2023",
              description:
                "Developed responsive websites using React, Tailwind CSS, and improved UI/UX performance.",
            },
            {
              title: "Freelance Web Designer",
              subtitle: "Self-Employed | 2022 - Present",
              description:
                "Designed multiple web applications, built custom UI components, and optimized website performance.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border-l-4 border-red-400 hover:scale-105 transform transition duration-300"
            >
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.subtitle}</p>
              <p className="text-sm mt-2">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
