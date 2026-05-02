import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) =>
    location.pathname === path
      ? "text-yellow-400 font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-yellow-400";

  return (
    <nav className="bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-700/50 transition-colors duration-300">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        <Link to="/hero" className="text-xl sm:text-2xl font-bold hover:text-yellow-400 transition-colors z-50 text-gray-900 dark:text-white">
          Md Anas
        </Link>

        <div className="hidden sm:flex flex-1 justify-end mr-6 lg:mr-10 items-center gap-4">
          <ul className="flex space-x-4 lg:space-x-6 text-base lg:text-lg">
            <li>
              <Link to="/about" className={`${isActive("/about")} transition-colors`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className={`${isActive("/projects")} transition-colors`}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/services" className={`${isActive("/services")} transition-colors`}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${isActive("/contact")} transition-colors`}>
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-gray-700 dark:text-gray-300 hover:text-yellow-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`sm:hidden fixed top-0 left-0 h-full w-64 max-w-[80vw] bg-white dark:bg-[#1e1e1e] shadow-lg transform transition-transform duration-300 border-r border-gray-200 dark:border-gray-700/50 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700/50">
          <h2 className="text-lg font-bold text-yellow-400">Menu</h2>
          <button 
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-yellow-400 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col text-base px-4 py-2">
          <li>
            <Link
              to="/hero"
              className={`${isActive("/hero")} py-3 block transition-colors border-b border-gray-200 dark:border-gray-700/30`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${isActive("/about")} py-3 block transition-colors border-b border-gray-200 dark:border-gray-700/30`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`${isActive("/projects")} py-3 block transition-colors border-b border-gray-200 dark:border-gray-700/30`}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`${isActive("/services")} py-3 block transition-colors border-b border-gray-200 dark:border-gray-700/30`}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${isActive("/contact")} py-3 block transition-colors border-b border-gray-200 dark:border-gray-700/30`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="py-3 border-t border-gray-200 dark:border-gray-700/30">
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 text-yellow-400 hover:opacity-75 transition-opacity"
            >
              {theme === 'dark' ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
            </button>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div 
          className="sm:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
