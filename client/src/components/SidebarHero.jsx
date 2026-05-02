import React from "react";
import {
  FaEnvelope,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export default function SidebarHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white dark:bg-[#1e1e1e] border border-yellow-400/20 rounded-2xl shadow-2xl p-4 sm:p-5 text-center flex flex-col items-center relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400/10 rounded-full -translate-y-8 sm:-translate-y-10 translate-x-8 sm:translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/5 rounded-full translate-y-6 sm:translate-y-8 -translate-x-6 sm:-translate-x-8"></div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center mt-3 sm:mt-4 mb-3 sm:mb-4"
      >
        <img
          src="/Anas.jpeg"
          alt="Profile"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg sm:text-xl lg:text-2xl font-medium italic mb-1 sm:mb-2 text-gray-900 dark:text-white"
        style={{ fontFamily: '"Poppins", "Segoe UI", sans-serif' }}
      >
        Md Anas
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 shadow-lg"
      >
        Java Full Stack Developer
      </motion.div>

      <div className="flex flex-col gap-2 w-full mb-3 sm:mb-4">
        {[
          { icon: FaEnvelope, label: "EMAIL", value: "anas10202030@gmail.com" },
          { icon: FaBirthdayCake, label: "BIRTHDAY", value: "Oct 22, 2005" },
          {
            icon: FaMapMarkerAlt,
            label: "LOCATION",
            value: "Sitamarhi, Bihar, India",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center bg-gray-100 dark:bg-[#111]/50 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 border border-gray-200 dark:border-gray-700/50 transition-all duration-300"
          >
            <item.icon className="text-yellow-400 text-xs sm:text-sm mr-2 flex-shrink-0" />
            <div className="text-left flex-1 min-w-0">
              <p className="text-[9px] sm:text-[10px] text-gray-600 dark:text-gray-400 font-medium">
                {item.label}
              </p>
              <p className="text-[10px] sm:text-xs font-medium text-gray-900 dark:text-white truncate">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center gap-2 w-full"
      >
        {[
          {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/md-anas-b83107290/",
            color: "hover:text-blue-400",
          },
          {
            icon: FaGithub,
            href: "https://github.com/AnasGitZone",
            color: "hover:text-gray-300",
          },
          {
            icon: SiLeetcode,
            href: "https://leetcode.com/",
            color: "hover:text-orange-400",
          },
          {
            icon: FaDownload,
            href: "/Anas Resume.pdf",
            color: "hover:text-green-400",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 dark:bg-[#111]/70 backdrop-blur-sm rounded-lg flex items-center justify-center text-yellow-400 ${social.color} transition-all duration-300 border border-gray-200 dark:border-gray-700/50 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20`}
          >
            <social.icon className="text-xs sm:text-sm" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
