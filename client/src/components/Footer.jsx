import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white py-5 w-full border-t border-gray-200 dark:border-gray-700/50 transition-colors duration-300">
      <div className="text-center text-sm px-4">
        &copy; {new Date().getFullYear()} Md Anas. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
