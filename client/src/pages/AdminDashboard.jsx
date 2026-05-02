import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FiMail, FiEye, FiTrash2, FiRefreshCw } from "react-icons/fi";
import { useTheme } from '../context/ThemeContext';

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [stats, setStats] = useState({ total: 0 });
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/contacts`);
      const data = await response.json();
      if (data.success) {
        setContacts(data.data);
        setStats({ total: data.data.length });
      }
    } catch (error) {
      toast.error("Error fetching messages");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    try {
      const response = await fetch(`${API_URL}/api/contacts/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Message deleted successfully");
        fetchContacts();
      }
    } catch (error) {
      toast.error("Error deleting message");
    }
  };

  return (
    <div className="min-h-screen bg-black light:bg-gray-100 transition-colors duration-300">
      <div className="bg-[#1e1e1e] light:bg-white border-b border-yellow-400/20 light:border-gray-200 sticky top-0 z-40 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Messages
              </h1>
              <p className="text-gray-400 light:text-gray-600 text-xs sm:text-sm mt-1">View contact form submissions</p>
            </div>
            <div className="flex gap-2 sm:gap-3 items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                )}
              </button>
              <button
                onClick={fetchContacts}
                className="flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-semibold hover:bg-yellow-400/20 text-xs sm:text-sm lg:text-base"
              >
                <FiRefreshCw className="text-base sm:text-lg" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1e1e1e] light:bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50 light:border-gray-200 hover:border-yellow-400/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 light:text-gray-600 text-xs sm:text-sm mb-1">Total Messages</p>
                <p className="text-2xl sm:text-3xl font-bold text-white light:text-gray-900">{stats.total}</p>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
                <FiMail className="text-xl sm:text-2xl text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16 sm:py-20">
            <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-yellow-400"></div>
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-16 sm:py-20 bg-[#1e1e1e] light:bg-white rounded-xl sm:rounded-2xl border border-gray-700/50 light:border-gray-200">
            <p className="text-gray-400 light:text-gray-600 text-base sm:text-lg">No messages yet</p>
          </div>
        ) : (
          <div className="bg-[#1e1e1e] light:bg-white rounded-xl sm:rounded-2xl border border-gray-700/50 light:border-gray-200 overflow-hidden">
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-black/30 light:bg-gray-50 border-b border-gray-700/50 light:border-gray-200">
                  <tr>
                    <th className="text-left p-3 sm:p-4 text-xs sm:text-sm font-semibold text-gray-400 light:text-gray-600">Name</th>
                    <th className="text-left p-3 sm:p-4 text-xs sm:text-sm font-semibold text-gray-400 light:text-gray-600">Email</th>
                    <th className="text-left p-3 sm:p-4 text-xs sm:text-sm font-semibold text-gray-400 light:text-gray-600">Message</th>
                    <th className="text-right p-3 sm:p-4 text-xs sm:text-sm font-semibold text-gray-400 light:text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, index) => (
                    <motion.tr
                      key={contact._id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-gray-700/30 light:border-gray-100 hover:bg-white/5 light:hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-white light:text-gray-900">{contact.name}</td>
                      <td className="p-3 sm:p-4 text-sm text-gray-300 light:text-gray-700">{contact.email}</td>
                      <td className="p-3 sm:p-4 text-sm text-gray-400 light:text-gray-600 max-w-xs truncate">{contact.message}</td>
                      <td className="p-3 sm:p-4">
                        <div className="flex justify-end gap-1.5 sm:gap-2">
                          <button
                            onClick={() => setSelectedContact(contact)}
                            className="p-1.5 sm:p-2 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors"
                            title="View"
                          >
                            <FiEye className="text-sm sm:text-lg" />
                          </button>
                          <button
                            onClick={() => handleDelete(contact._id)}
                            className="p-1.5 sm:p-2 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                            title="Delete"
                          >
                            <FiTrash2 className="text-sm sm:text-lg" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:hidden divide-y divide-gray-700/30 light:divide-gray-100">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 sm:p-4 hover:bg-white/5 light:hover:bg-gray-50 transition-colors"
                >
                  <div className="mb-3">
                    <h3 className="font-semibold text-sm sm:text-base mb-1 text-white light:text-gray-900">{contact.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 light:text-gray-600">{contact.email}</p>
                    <p className="text-xs sm:text-sm text-gray-300 light:text-gray-700 mt-2 line-clamp-2">{contact.message}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedContact(contact)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-green-500/20 border border-green-500/50 text-green-400 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold"
                    >
                      <FiEye /> View
                    </button>
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-red-500/20 border border-red-500/50 text-red-400 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold"
                    >
                      <FiTrash2 /> Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedContact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-3 sm:p-4"
          onClick={() => setSelectedContact(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#1e1e1e] light:bg-white max-w-sm sm:max-w-lg w-full rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-yellow-400/30 light:border-gray-200 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-white light:text-gray-900">Message Details</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-400 light:text-gray-600 mb-1">Name</p>
                  <p className="text-sm sm:text-base text-white light:text-gray-900">{selectedContact.name}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400 light:text-gray-600 mb-1">Email</p>
                  <p className="text-sm sm:text-base text-white light:text-gray-900">{selectedContact.email}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400 light:text-gray-600 mb-1">Message</p>
                  <p className="text-sm sm:text-base text-gray-300 light:text-gray-700 whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>
              <button
                className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 text-sm sm:text-base"
                onClick={() => setSelectedContact(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
