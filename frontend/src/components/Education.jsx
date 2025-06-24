import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    institution: "Kakinada Institute of Engineering and Technology, Koringa",
    degree: "B.Tech in Computer Science Speacialized in AI & DS",
    period: "2021 - 2025",
    description: "Graduated with distinction. Specialized in software engineering and web technologies."
  },
  {
    institution: "Chanakya Junior College, Ganapavaram",
    degree: "10 + 2 (MPC)",
    period: "2019 - 2021",
    description: "Graduated with distinction. Specialized in software engineering and web technologies."
  },
  {
    institution: "P.R.Z.P.P. High School, Adavikolanu",
    degree: "Matriculation",
    period: "2018 - 2019",
    description: "Graduated with distinction. Specialized in software engineering and web technologies."
  }
];

const Education = () => (
  <section id="education" className="section-padding bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Education
      </motion.h2>
      <div className="space-y-8">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-primary">{edu.institution}</p>
            <p className="text-gray-500">{edu.period}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
