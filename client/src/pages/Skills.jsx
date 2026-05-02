import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaDatabase, FaNodeJs, FaReact, FaBootstrap, FaGitAlt, FaCode, FaTools } from "react-icons/fa";
import { SiMongodb, SiSpringboot, SiExpress, SiPostman, SiIntellijidea, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-gray-50 dark:bg-[#111]/50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700/50"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-yellow-500 dark:text-yellow-400">Skills</h2>
      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-6 sm:mb-10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        <SkillCard
          title="Frontend Technologies"
          skills={[
            { name: "HTML", level: 85, icon: <FaHtml5 /> },
            { name: "CSS", level: 85, icon: <FaCss3Alt /> },
            { name: "JavaScript", level: 80, icon: <FaJsSquare /> },
            { name: "React.js", level: 75, icon: <FaReact /> },
            { name: "Bootstrap", level: 80, icon: <FaBootstrap /> },
          ]}
        />

        <SkillCard
          title="Backend Technologies"
          skills={[
            { name: "Java", level: 85, icon: <FaJava /> },
            { name: "Spring Boot", level: 75, icon: <SiSpringboot /> },
            { name: "Node.js", level: 70, icon: <FaNodeJs /> },
            { name: "Express.js", level: 70, icon: <SiExpress /> },
            { name: "RESTful API", level: 80, icon: <FaDatabase /> },
          ]}
        />

        <SkillCard
          title="Database Management"
          skills={[
            { name: "MySQL", level: 85, icon: <SiMysql /> },
            { name: "MongoDB", level: 75, icon: <SiMongodb /> },
            { name: "SQL", level: 85, icon: <FaDatabase /> },
            { name: "JDBC", level: 80, icon: <FaJava /> },
          ]}
        />

        <SkillCard
          title="Tools & IDEs"
          skills={[
            { name: "VS Code", level: 90, icon: <FaCode /> },
            { name: "IntelliJ IDEA", level: 85, icon: <SiIntellijidea /> },
            { name: "Eclipse", level: 80, icon: <FaTools /> },
            { name: "Postman", level: 85, icon: <SiPostman /> },
            { name: "Git & GitHub", level: 80, icon: <FaGitAlt /> },
          ]}
        />

        <SkillCard
          title="Core Concepts"
          skills={[
            { name: "OOP", level: 85, icon: <FaJava /> },
            { name: "DBMS", level: 80, icon: <FaDatabase /> },
            { name: "DSA (Basic)", level: 70, icon: <FaJava /> },
            { name: "MVC Architecture", level: 75, icon: <FaJava /> },
          ]}
        />
      </div>
    </motion.div>
  );
};

const SkillCard = ({ title, skills }) => {
  return (
    <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg w-full bg-white dark:bg-[#2a2a2a]/70 border border-gray-200 dark:border-gray-700/50">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5 text-left text-yellow-500 dark:text-yellow-400">{title}</h3>
      <div className="space-y-3 sm:space-y-3.5 lg:space-y-4">
        {skills.map((skill, index) => (
          <div className="flex items-center gap-2 sm:gap-3" key={index}>
            <div className="flex items-center gap-1.5 sm:gap-2 w-32 sm:w-36 lg:w-40 min-w-0">
              {skill.icon && <span className="text-lg sm:text-xl md:text-2xl text-yellow-500 dark:text-yellow-400 flex-shrink-0">{skill.icon}</span>}
              <span className="text-xs sm:text-sm md:text-base font-medium text-left truncate text-gray-900 dark:text-white">{skill.name}</span>
            </div>

            <div className="flex-grow bg-gray-200 dark:bg-gray-700/50 rounded-full h-2 sm:h-2.5 lg:h-3 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${skill.level}%`,
                  backgroundImage: "linear-gradient(to right, #facc15, #eab308)"
                }}
              ></div>
            </div>

            <span className="text-xs sm:text-sm md:text-base font-bold text-yellow-500 dark:text-yellow-400 w-9 sm:w-10 lg:w-12 text-right">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
