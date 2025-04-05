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
          Web Developer | Data Analyst
        </p>

        <div className="border-t my-4"></div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">
            Contact Information
          </h2>
          <ul className="mt-2 text-gray-600">
            <li>📍 Jharkhand, India</li>
            <li>📧 alokranjankolaalok@gmail.com</li>
            <li>📞 6202585952</li>
            <li>🌐 https://my-portfolio-puce-two-14.vercel.app/</li>
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

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Education
          </h2>
          <div className="text-gray-600 space-y-4">
            <div>
              <p className="text-lg font-medium">
                📚 B.Sc (Hons) Computer Science & Data Analytics |{" "}
                <span className="text-gray-800">IIT Patna</span>
              </p>
              <p>
                📅 <strong>2025 - Present</strong>
              </p>
              <p>
                📊 <strong>CPI:</strong> 9.26 (Semester 3)
              </p>
            </div>

            <div>
              <p className="text-lg font-medium">
                🎓 Class 12th (CBSE) |{" "}
                <span className="text-gray-800">DAV PUBLIC SCHOOL</span>
              </p>
              <p>
                📅 <strong>Passed: 2022</strong>
              </p>
              <p>
                📈 <strong>Percentage:</strong> 84.2%
              </p>
            </div>
          </div>
        </section>

        <div className="border-t my-4"></div>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 className="font-medium text-gray-800 mb-1">
                💻 Programming & Web Technologies
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>JavaScript, ReactJS, Tailwind CSS</li>
                <li>Python, SQL</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-1">
                📊 Data Analysis & Visualization
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Power BI, Excel</li>
                <li>Pandas, Matplotlib, Seaborn</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="border-t my-4"></div>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Projects
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li>
              <a
                href="https://alook-imageenhancer.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                <strong className="text-lg">
                  ALook – Image Enhancer Website
                </strong>
              </a>
              <p className="mt-1">
                An AI-powered image enhancement tool that upgrades low-quality
                photos into HD images instantly. Just upload and let AI work its
                magic! 🚀
              </p>
            </li>

            <li>
              <a
                href="https://moko-ai-agent.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                <strong className="text-lg">Moko – AI Virtual Agent</strong>
              </a>
              <p className="mt-1">
                A voice-controlled assistant built using React and Google Gemini
                AI. Listens to your commands, processes them with AI, and
                responds through speech—like your own smart buddy.
              </p>
            </li>

            <li>
              <a
                href="https://kbc-quiz-using-react.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                <strong className="text-lg">KBC Quiz Game</strong>
              </a>
              <p className="mt-1">
                A fun, interactive quiz game inspired by Kaun Banega Crorepati
                (KBC). Use lifelines, answer MCQs, and test your knowledge to
                become a crorepati! 💰🔥
              </p>
            </li>

            <li>
              <a
                href="https://todolist-taupe-theta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                <strong className="text-lg">
                  Yadi ToDo – Task Manager App
                </strong>
              </a>
              <p className="mt-1">
                A lightweight and intuitive ToDo app to manage tasks with ease.
                Add, track, and complete tasks effortlessly to stay productive.
                ✅
              </p>
            </li>

            <li>
              <a
                href="https://sastagptbro.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                <strong className="text-lg">
                  SastaGPT – Budget AI Assistant
                </strong>
              </a>
              <p className="mt-1">
                A quirky and cost-effective AI tool that chats, generates images
                from text, and provides insights from images. Smart, sassy, and
                creative! 🤖🔥
              </p>
            </li>
          </ul>
        </section>

        <div className="border-t my-4"></div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">
            Achievements & Leadership
          </h2>
          <ul className="mt-2 text-gray-600">
            <li>🏆 Elected *Member* of the Technology Club, IITP.</li>
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
