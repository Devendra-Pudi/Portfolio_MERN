import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Devendra Pudi
            </motion.h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Full Stack Developer passionate about creating impactful web applications and Machine Leaning Models
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <motion.a 
                href="#about" 
                className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                About
              </motion.a>
              <motion.a 
                href="#projects" 
                className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                Contact
              </motion.a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  title={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by Devendra Pudi
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved. Built with{' '}
            <span className="text-primary">React</span> &{' '}
            <span className="text-primary">Node.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
