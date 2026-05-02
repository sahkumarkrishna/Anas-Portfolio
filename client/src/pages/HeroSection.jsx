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

export default function HeroSection() {
  return (
    <div className="w-full h-[100dvh] flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 pt-14 sm:pt-16 md:pt-18 lg:pt-20 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white dark:bg-[#1e1e1e] border border-yellow-400/20 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 lg:p-10 text-center flex flex-col items-center relative overflow-hidden transition-colors duration-300"
      >
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-yellow-400/10 rounded-full -translate-y-10 sm:-translate-y-14 md:-translate-y-18 translate-x-10 sm:translate-x-14 md:translate-x-18"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-yellow-400/5 rounded-full translate-y-8 sm:translate-y-10 md:translate-y-14 -translate-x-8 sm:-translate-x-10 md:-translate-x-14"></div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 rounded-full overflow-hidden flex items-center justify-center mt-3 sm:mt-4 md:mt-5 mb-3 sm:mb-4 md:mb-5"
        >
          <img src="/Anas.jpeg" alt="Profile" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium italic mb-1.5 sm:mb-2 md:mb-3 text-gray-900 dark:text-white"
          style={{ fontFamily: '"Poppins", "Segoe UI", sans-serif' }}
        >
          Md Anas
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-4 sm:mb-5 md:mb-6 shadow-lg"
        >
          Java Full Stack Developer
        </motion.div>

        <div className="flex flex-col gap-2 sm:gap-3 w-full mb-4 sm:mb-5 md:mb-6">
          {[
            { icon: FaEnvelope, label: "EMAIL", value: "anas10202030@gmail.com" },
            { icon: FaBirthdayCake, label: "BIRTHDAY", value: "Oct 22, 2005" },
            { icon: FaMapMarkerAlt, label: "LOCATION", value: "Sitamarhi, Bihar, India" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center bg-gray-100 dark:bg-[#111]/50 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-gray-200 dark:border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300"
            >
              <item.icon className="text-yellow-500 dark:text-yellow-400 text-base sm:text-lg md:text-xl mr-2 sm:mr-3 flex-shrink-0" />
              <div className="text-left flex-1 min-w-0">
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium">{item.label}</p>
                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-900 dark:text-white truncate">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-2 sm:gap-3 md:gap-4 w-full"
        >
          {[
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-anas-b83107290/", color: "hover:text-blue-400" },
            { icon: FaGithub, href: "https://github.com/AnasGitZone", color: "hover:text-gray-300" },
            { icon: SiLeetcode, href: "https://leetcode.com/", color: "hover:text-orange-400" },
            { icon: FaDownload, href: "/Anas Resume.pdf", color: "hover:text-green-400" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-100 dark:bg-[#111]/70 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center text-yellow-500 dark:text-yellow-400 ${social.color} transition-all duration-300 border border-gray-200 dark:border-gray-700/50 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20`}
            >
              <social.icon className="text-sm sm:text-base md:text-xl" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
