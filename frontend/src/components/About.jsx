import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="section-padding bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hi! I’m John Doe, a passionate B.Tech graduate with a knack for building full-stack web applications. 
        I love working with modern JavaScript frameworks and am always eager to learn new technologies. 
        My goal is to create impactful digital experiences and contribute to the tech community.
      </motion.p>
    </div>
  </section>
);

export default About;
