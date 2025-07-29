import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, FileText, Code, Briefcase, GraduationCap, Award } from 'lucide-react';
import profileImage from '../assets/MY DP.jpg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.9,
      rotate: -10
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+' },
    { icon: Briefcase, label: 'Internship Experience', value: '2+' },
    { icon: GraduationCap, label: 'Degree', value: 'B.Tech (CSE)' },
    { icon: Award, label: 'Certifications', value: '5+' }
  ];

  const skills = {
    'Frontend Development': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    'Backend Development': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    'Tools & Technologies': ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel'],
    'Other Skills': ['UI/UX Design', 'Agile', 'Testing', 'CI/CD', 'Problem Solving']
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Social Links */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div 
              className="relative w-full aspect-square max-w-xl mx-auto"
              variants={imageVariants}
            >
              {/* Background Decorative Elements */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 rounded-2xl transform rotate-6 scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.2, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-bl from-secondary to-primary opacity-20 rounded-2xl transform -rotate-6 scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.2, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
              
              {/* Profile Image */}
              <motion.div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <motion.img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary group"
              >
                <Github className="w-6 h-6 group-hover:animate-bounce" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary group"
              >
                <Linkedin className="w-6 h-6 group-hover:animate-bounce" />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary group"
              >
                <Mail className="w-6 h-6 group-hover:animate-bounce" />
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2" />
                  <div className="font-bold text-2xl text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        About Me
                </span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  Hi! I'm <span className="font-semibold text-primary">Devendra Pudi</span>, a passionate Web and Machine Learning Developer 
                  with a solid foundation in building intelligent applications and solving real-world problems.
                </p>
                <p className="leading-relaxed">
                  With a B.Tech in Computer Science (AI & Data Science), I specialize in full-stack web development using the MERN stack 
                  and also enjoy working with ML models for NLP and predictive analytics. I have strong DSA skills, which help me write efficient and scalable code.
                </p>
                <p className="leading-relaxed">
                  I'm constantly learning and pushing my limits with new technologies, whether it's deploying cloud-native apps or tuning ML models. 
                  My goal is to create impactful solutions that blend smart algorithms with seamless user experiences.
                </p>
              </div>
            </div>

            {/* Resume Download */}
            <div className="flex gap-4">
              <motion.a
                href="/path-to-resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              <motion.a
                href="/path-to-cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:text-primary dark:hover:text-primary"
              >
                <FileText className="w-5 h-5" />
                View CV
              </motion.a>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ delay: skillIndex * 0.05 }}
                          className="px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition-all duration-300 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
    </div>
      </motion.div>
  </section>
);
};

export default About;
