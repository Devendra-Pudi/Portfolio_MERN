import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Tech Solutions Ltd.",
    role: "Full Stack Intern",
    period: "Jan 2024 - May 2024",
    description: "Built and maintained web applications using React, Node.js, and MongoDB. Collaborated with designers and backend teams."
  },
  {
    company: "Open Source Contributor",
    role: "Contributor",
    period: "2023 - Present",
    description: "Contributed to open-source projects, fixed bugs, and added new features in JavaScript-based repositories."
  }
];

const Experience = () => (
  <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{exp.role} <span className="text-primary">@ {exp.company}</span></h3>
            <p className="text-gray-500">{exp.period}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
