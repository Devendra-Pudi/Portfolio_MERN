import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ExternalLink, ChevronDown } from 'lucide-react';

const experiences = [
  {
    company: "Tech Solutions Ltd.",
    role: "Full Stack Intern",
    location: "Hyderabad, India",
    type: "Internship",
    period: "Jan 2024 - May 2024",
    description: "Built and maintained web applications using React, Node.js, and MongoDB. Collaborated with designers and backend teams.",
    highlights: [
      "Developed responsive web applications using React.js and Tailwind CSS",
      "Implemented RESTful APIs using Node.js and Express.js",
      "Worked with MongoDB for database management and queries",
      "Participated in code reviews and team meetings",
      "Improved application performance by 30% through optimization"
    ],
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Git"],
    link: "https://techsolutions.com"
  },
  {
    company: "Open Source Contributor",
    role: "Developer",
    location: "Remote",
    type: "Part-time",
    period: "2023 - Present",
    description: "Contributed to open-source projects, fixed bugs, and added new features in JavaScript-based repositories.",
    highlights: [
      "Contributed to popular open-source projects on GitHub",
      "Fixed critical bugs and implemented new features",
      "Collaborated with developers worldwide",
      "Improved documentation and test coverage",
      "Participated in code reviews and discussions"
    ],
    skills: ["JavaScript", "React", "Git", "Open Source", "Documentation", "Testing"],
    link: "https://github.com/Devendra-Pudi"
  }
];

const Experience = () => {
  const [expandedExp, setExpandedExp] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional journey and contributions in the tech industry
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded-full opacity-20" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className={`relative mb-12 md:clear-both ${
                idx % 2 === 0 ? 'md:float-left md:pr-8 md:w-1/2' : 'md:float-right md:pl-8 md:w-1/2'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full transform -translate-x-1/2 md:translate-x-1/2 shadow-lg" />

              <motion.div
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedExp(expandedExp === idx ? null : idx)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedExp === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>

                  <AnimatePresence>
                    {expandedExp === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-4"
                      >
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Key Achievements
                          </h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            {exp.highlights.map((highlight, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <motion.a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:underline mt-4"
                          whileHover={{ x: 5 }}
                        >
                          Learn more
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
