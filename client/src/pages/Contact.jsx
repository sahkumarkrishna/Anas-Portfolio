import { useState } from "react";
import SidebarHero from "../components/SidebarHero";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/contacts/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Contact</h2>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-4 sm:mb-6"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 dark:bg-[#111]/50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700/50 mb-4 sm:mb-6"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-yellow-500 dark:text-yellow-400">Get In Touch</h2>
              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  { icon: FaEnvelope, label: "Email", value: "anas10202030@gmail.com" },
                  { icon: FaPhoneAlt, label: "Call", value: "+91 8603773960" },
                  { icon: FaMapMarkerAlt, label: "Location", value: "Sitamarhi, Bihar, India" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <item.icon className="text-yellow-500 dark:text-yellow-400 text-lg sm:text-xl flex-shrink-0" />
                    <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">{item.label} : </span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base break-all">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onSubmit={handleSubmit} 
              className="flex flex-col gap-4 sm:gap-5"
            >
              <div>
                <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-[#111]/50 text-gray-900 dark:text-white placeholder-gray-500 border border-gray-200 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base md:text-lg" required />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-[#111]/50 text-gray-900 dark:text-white placeholder-gray-500 border border-gray-200 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base md:text-lg" required />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg">Message</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-[#111]/50 text-gray-900 dark:text-white placeholder-gray-500 border border-gray-200 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none transition-all duration-300 text-sm sm:text-base md:text-lg" required />
              </div>

              <motion.button type="submit" disabled={!isFormValid || isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base md:text-lg">
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
