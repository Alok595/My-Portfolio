import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_lpj3pcl",
        "template_mureb15",
        formData,
        "aljLL4SV0HD9g3Fdj"
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden px-6 py-12"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-96 h-96 bg-blue-500 opacity-30 blur-[120px] rounded-full top-20 left-10 animate-pulse"
      ></motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute w-96 h-96 bg-purple-500 opacity-30 blur-[120px] rounded-full bottom-20 right-10 animate-pulse"
      ></motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-900 p-10 rounded-xl shadow-2xl max-w-lg w-full relative border border-blue-500 futuristic-card"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-400 text-center"
        >
          Contact Me
        </motion.h2>

        <p className="text-gray-300 text-lg text-center mt-4">
          Have any questions? Call us on{" "}
          <span className="text-blue-400">6202585952</span>
        </p>

        <p className="text-gray-300 text-lg text-center mt-2">
          Email us at{" "}
          <span className="text-blue-400">alokranjankolaalok@gmail.com</span>
        </p>

        <p className="text-gray-400 text-sm text-center mt-4">
          Send me an email. I am very responsive to messages!
        </p>

        <form onSubmit={sendEmail} className="flex flex-col space-y-4 mt-6">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-blue-500 focus:ring-2 focus:ring-blue-400"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-blue-500 focus:ring-2 focus:ring-blue-400"
          />
          <motion.textarea
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-blue-500 focus:ring-2 focus:ring-blue-400"
          ></motion.textarea>
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:from-purple-500 hover:to-blue-500 transition duration-300 futuristic-button shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            Send Message
          </motion.button>
        </form>
        {status && <p className="text-center text-gray-300 mt-4">{status}</p>}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
