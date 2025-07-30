import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, Award, Code, Brain, Zap } from 'lucide-react';
import profileImage from '../assets/MY DP.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Software Developer', 'Full Stack Developer', 'Problem Solver', 'AI & ML Engineer', 'Prompt Engineer'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setText(currentRole.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const GOOGLE_DRIVE_FILE_ID = "176daCN5yZiECDPsCTOdEYG_VU6ykZJ97";
  const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

  function handleDownload() {
    const link = document.createElement("a");
    link.href = DOWNLOAD_URL;
    link.download = "Pudi-Devendra-prasad-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Devendra-Pudi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/devendra-prasad-pudi', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pudidevendraprasad@gmail.com', label: 'Email' }
  ];

  const achievements = [
    {
      icon: Code,
      title: "Technical Versatility",
      points: [
        "Unique blend of Web Development & ML expertise",
        "Full-stack & algorithmic problem-solving skills",
        "40% performance boost in web applications",
        "95% accuracy in ML model implementations"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Modern Tech Mastery",
      points: [
        "MERN Stack proficiency",
        "Advanced ML/AI implementations",
        "Cloud-native architecture expertise",
        "CI/CD pipeline optimization"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Innovation Focus",
      points: [
        "Real-world problem solving",
        "User-centric design approach",
        "Scalable architecture design",
        "Data-driven decision making"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Award,
      title: "Professional Excellence",
      points: [
        "Clean, maintainable code practices",
        "Cross-functional team collaboration",
        "Agile methodology expertise",
        "Open-source contributions"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

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
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/10 rounded-full"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <motion.div 
              className="w-32 h-32 mx-auto mb-8 relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 rounded-full transform rotate-6" />
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-full relative z-10 shadow-xl"
              />
            </motion.div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Hi, I'm Devendra Prasad Pudi
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12"
          >
            I'm a <span className="text-primary font-semibold">{text}</span>
            <span className="animate-pulse">|</span>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions and building amazing web applications. 
            Ready to contribute to cutting-edge projects and make a meaningful impact in the tech industry.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="btn-primary flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg transform transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 transform"
            >
              <ExternalLink size={20} />
              View My Work
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* New Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Why Choose Me?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} text-white`}>
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {achievement.title}
                    </h4>
                    <ul className="space-y-2">
                      {achievement.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: pointIndex * 0.1 }}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mr-2" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
