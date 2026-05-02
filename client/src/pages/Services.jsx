import SidebarHero from "../components/SidebarHero";
import { motion } from "framer-motion";

const services = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    title: "Frontend Development",
    description: "Designing and developing responsive user interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS to create modern and interactive web applications.",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    title: "Backend Development",
    description: "Building secure and scalable server-side applications using Node.js, Express.js, Java, and Spring Boot to handle business logic, APIs, and authentication.",
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    title: "Database Management",
    description: "Designing and managing databases like MongoDB and MySQL to store, retrieve, and organize application data efficiently with optimized queries.",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D4D12AQHe5RBOds0-iQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702136235215?e=2147483647&v=beta&t=8JeW9kg944D9SbIdmd0OhhHGjVfdHr7WWyuJzJPvE2w",
    title: "Full Stack Web Development",
    description: "Developing complete full stack web applications by integrating frontend and backend technologies to deliver functional, user-friendly solutions.",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    title: "Project Development",
    description: "Working on real-world MERN and Java-based projects to improve problem-solving skills, coding practices, and software development experience.",
  },
];

export default function Services() {
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Services</h2>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-4 sm:mb-6"></div>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                I provide comprehensive web development services focused on creating responsive, user-friendly, and scalable applications using modern technologies.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="bg-gray-50 dark:bg-[#111]/70 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700/50 hover:border-yellow-400/30 group"
                >
                  <img src={service.image} alt={service.title} className="w-full h-44 sm:h-48 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div className="p-3 sm:p-4 md:p-5">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
