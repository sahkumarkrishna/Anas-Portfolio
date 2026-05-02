import { useState } from "react";
import SidebarHero from "../components/SidebarHero";
import { motion } from "framer-motion";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    title: "Library Management System",
    duration: "2–3 months",
    description: "Developed a full-stack Library Management System to manage books, student records, issue/return tracking, and availability status. Implemented role-based login for Admin and Students with secure CRUD operations and responsive UI.",
    tech: ["MongoDB", "Java", "JavaScript", "HTML", "CSS", "Spring Boot", "JWT Auth", "Tailwind CSS"],
  },
  {
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
    title: "Hospital Management System",
    duration: "3–4 months",
    description: "Built a Hospital Management System in Java to manage patient registration, doctor scheduling, appointments, billing, and medical records. Designed modular architecture with database connectivity and efficient workflow automation.",
    tech: ["Java", "JDBC", "MySQL", "JavaScript", "HTML", "CSS", "Spring Boot", "JWT Auth"],
  },
  {
    image: "https://programiz.com/online-compiler/assets/logos/compiler_logo.png",
    title: "Online Code Compiler Platform",
    duration: "2–3 months",
    description: "Created an Online Code Compiler web platform supporting multiple programming languages with real-time execution. Integrated secure backend APIs for compiling and running code, along with user-friendly editor interface.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Code Execution API", "Tailwind CSS"],
  },
  {
    image: "https://workdo.io/wp-content/themes/storefront-child/assets-v2/images/add-ons/dash-saas/resume-builder-dash/resume-builder-dash-banner.webp",
    title: "Resume Builder Web Application",
    duration: "1–2 months",
    description: "Developed a Resume Builder application that allows users to create, edit, and download professional resumes with customizable templates. Implemented form validation, live preview, and PDF export functionality.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "PDF Export", "Tailwind CSS"],
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-black dark:bg-black bg-white w-full mt-14 sm:mt-16 lg:mt-20 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-6 xl:gap-8 w-full max-w-[1600px] mx-auto">
        <div className="hidden lg:block lg:w-[320px] xl:w-[360px] 2xl:w-[400px] flex-shrink-0">
          <div className="sticky top-20 lg:top-24 p-3 sm:p-4">
            <SidebarHero />
          </div>
        </div>

        <div className="flex-1 w-full px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8">
          <div className="w-full bg-white dark:bg-[#1e1e1e] p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-yellow-400/20 transition-colors duration-300">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Projects</h2>
              <div className="w-14 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-4 sm:mb-6"></div>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                I've worked on many projects over the years, but these are the ones that I'm most proud of.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="bg-gray-50 dark:bg-[#111]/70 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700/50 hover:border-yellow-400/30 group"
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-44 sm:h-48 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div className="p-3 sm:p-4 md:p-5">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">{project.duration}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="bg-yellow-400 text-black text-[10px] sm:text-xs md:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-3 sm:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-[#1e1e1e] max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-yellow-400/30 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-44 sm:h-56 md:h-64 lg:h-72 object-cover flex-shrink-0" loading="lazy" />
              <div className="p-4 sm:p-5 md:p-6 overflow-y-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-gray-900 dark:text-white">{selectedProject.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">{selectedProject.duration}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="bg-yellow-400 text-black text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all text-sm sm:text-base" onClick={() => setSelectedProject(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
