import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, GraduationCap, Award, Book, ChevronDown, Star, Trophy } from 'lucide-react';

const education = [
  {
    institution: "Kakinada Institute of Engineering and Technology, Koringa",
    degree: "B.Tech in Computer Science",
    specialization: "Artificial Intelligence & Data Science",
    location: "Kakinada, Andhra Pradesh",
    period: "2021 - 2025",
    gpa: "7.45/10.0",
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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative space-y-16 ml-16 md:ml-0"
          >
            {education.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                variants={itemVariants}
                className={`relative ${idx % 2 === 0 ? 'md:ml-8' : 'md:ml-auto md:mr-8'} md:w-1/2`}
              >
                {/* Enhanced Timeline Node - Positioned to connect with main line */}
                <motion.div
                  className={`absolute top-8 ${idx % 2 === 0 ? '-left-20 md:-right-24' : '-left-20 md:-left-24'} flex items-center z-20`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Main node - larger and more prominent */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-1.5 shadow-2xl z-30">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-inner border-2 border-gray-100 dark:border-gray-700">
                      {idx === 0 ? (
                        <Trophy className="w-7 h-7 text-primary" />
                      ) : idx === 1 ? (
                        <Star className="w-7 h-7 text-secondary" />
                      ) : (
                        <GraduationCap className="w-7 h-7 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Connecting line to card - more prominent */}
                  <motion.div
                    className={`${idx % 2 === 0 ? 'ml-3' : 'mr-3 order-first'} w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg z-20`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                  />
                </motion.div>

                {/* Year Badge - Floating */}
                <motion.div
                  className={`absolute -top-4 ${idx % 2 === 0 ? 'left-4' : 'right-4'} bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20`}
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {edu.period}
                </motion.div>

                {/* Enhanced Content Card - Lower z-index so timeline shows above */}
                <motion.div
                  className={`relative bg-gradient-to-br from-white via-white to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden group z-0 ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  whileHover={{
                    scale: 1.02,
                    y: -6,
                    rotateY: idx % 2 === 0 ? 1 : -1
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  {/* Card accent */}
                  <div className={`absolute top-0 ${idx % 2 === 0 ? 'left-0' : 'right-0'} w-2 h-full bg-gradient-to-b from-primary to-secondary rounded-r-lg`} />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className="relative p-8 cursor-pointer"
                    onClick={() => setExpandedEdu(expandedEdu === idx ? null : idx)}
                  >
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <motion.div
                          className="flex items-center gap-3 mb-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + 0.3 }}
                        >
                          <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
                            <GraduationCap className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                            {edu.degree}
                          </h3>
                        </motion.div>

                        <motion.p
                          className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + 0.4 }}
                        >
                          {edu.specialization}
                        </motion.p>
                      </div>

                      <motion.div
                        animate={{ rotate: expandedEdu === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 lg:mt-0 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>

                    {/* Info Grid */}
                    <motion.div
                      className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + 0.5 }}
                    >
                      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-primary/10 transition-colors duration-300">
                        <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-secondary/10 transition-colors duration-300">
                        <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg lg:col-span-2">
                        <Award className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 font-bold">GPA: {edu.gpa}</span>
                      </div>
                    </motion.div>

                    <motion.p
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + 0.6 }}
                    >
                      {edu.description}
                    </motion.p>

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
