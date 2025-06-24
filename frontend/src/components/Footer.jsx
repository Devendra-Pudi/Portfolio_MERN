import React from 'react';

const Footer = () => (
  <footer className="py-6 text-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
    <p>
      &copy; {new Date().getFullYear()} Devendra Pudi. Built with <span className="text-primary">React</span> &amp; <span className="text-primary">Node.js</span>.
    </p>
  </footer>
);

export default Footer;
