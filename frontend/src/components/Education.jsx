import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Award, Book, ChevronDown } from 'lucide-react';

const education = [
  {
    institution: "Kakinada Institute of Engineering and Technology, Koringa",
    degree: "B.Tech in Computer Science",
    specialization: "Artificial Intelligence & Data Science",
    location: "Kakinada, Andhra Pradesh",
    period: "2021 - 2025",
    gpa: "7.8/10.0",
    description: "Currently pursuing B.Tech with a focus on AI, ML, and Data Science. Actively involved in various technical projects and research activities.",
    achievements: [
      "Secured top 3% in the class",
      "Published research paper on ML applications",
      "Led the college coding club",
      "Won second prize in Machine Learning Hackathon"
    ],
    courses: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Deep Learning",
      "Database Management",
      "Web Development",
      "Cloud Computing"
    ]
  },
  {
    institution: "Chanakya Junior College, Ganapavaram",
    degree: "Intermediate Education (10+2)",
    specialization: "Mathematics, Physics & Chemistry",
    location: "Ganapavaram, Andhra Pradesh",
    period: "2019 - 2021",
    gpa: "9.5/10.0",
    description: "Completed intermediate education with focus on sciences and mathematics. Participated in various academic competitions and workshops.",
    achievements: [
      "College topper in mathematics",
      "Runner up in the college quiz competition",
      "Class topper in the college",
      "Perfect attendance in the college"
    ],
    courses: [
      "Advanced Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science Basics",
      "English"
    ]
  },
  {
    institution: "P.R.Z.P.P. High School, Adavikolanu",
    degree: "Secondary School Education",
    specialization: "General Studies",
    location: "Adavikolanu, Andhra Pradesh",
    period: "2018 - 2019",
    gpa: "9.8/10.0",
    description: "Completed secondary education with distinction. Active participant in extracurricular activities and sports.",
    achievements: [
      "School topper in final examinations",
      "Best student award",
      "Captain of school Kho-Kho team",
      "Winner of school Quiz competition"
    ],
    courses: [
      "Mathematics",
      "Science",
      "Social Studies",
      "English",
      "Telugu"
    ]
  }
];

const Education = () => {
  const [expandedEdu, setExpandedEdu] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Education Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and achievements in the field of computer science and technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Curved Timeline Path */}
          <svg
            className="absolute left-1/2 transform -translate-x-1/2"
            width="4"
            height="100%"
            viewBox="0 0 4 800"
            style={{ minHeight: '400px' }}
          >
            <motion.path
              d="M2 0 C50 200, -50 400, 2 600, C50 700, -50 750, 2 800"
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              variants={pathVariants}
              className="dark:opacity-50"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative space-y-12 ml-8 md:ml-32"
          >
            {education.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute -left-10 md:-left-36 top-0 flex items-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  {/* Year Badge */}
                  <motion.div
                    className="ml-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium hidden md:block"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {edu.period}
                  </motion.div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, translateX: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedEdu(expandedEdu === idx ? null : idx)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium">
                          {edu.specialization}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedEdu === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 md:mt-0"
                      >
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>

                    <AnimatePresence>
                      {expandedEdu === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 space-y-6"
                        >
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <Award className="w-5 h-5 text-primary" />
                              Key Achievements
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {edu.achievements.map((achievement, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2" />
                                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
          </motion.div>
        ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <Book className="w-5 h-5 text-primary" />
                              Key Courses
                            </h4>
                            <motion.div 
                              className="flex flex-wrap gap-2"
                              initial="hidden"
                              animate="visible"
                              variants={{
                                visible: {
                                  transition: {
                                    staggerChildren: 0.05
                                  }
                                }
                              }}
                            >
                              {edu.courses.map((course, i) => (
                                <motion.span
                                  key={i}
                                  variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 }
                                  }}
                                  className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm text-gray-700 dark:text-gray-300"
                                >
                                  {course}
                                </motion.span>
                              ))}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
      </div>
    </div>
  </section>
);
};

export default Education;
