import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ChevronRight, Award, TrendingUp } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      id: 1,
      role: "Machine Learning Intern",
      company: "Bluestock Fintech",
      location: "Remote",
      duration: "May 2025 - Aug 2025",
      description: [
"Developed and implemented REST API for IPO data processing, handling 500+ daily requests",
        "Optimized mobile view compatibility achieving 95% cross-device compatibility across platforms",
        "Improved API response times from 2.1s to 0.8s through efficient data caching and query optimization",
        "Accelerated user onboarding process by 40% through streamlined API integration and documentation",
        "Collaborated with 5 team members to deliver measurable performance improvements and reduce system latency",
        "Created comprehensive API documentation resulting in 60% reduction in developer integration time"
      ]
    },
    {
      id: 2,
      role: "Machine Learning Intern",
      company: "Edunet Foundation ",
      location: "Remote",
      duration: "Nov 2024 - Jan 2025",
      description: [
"Built a fake news detection system using NLP and machine learning techniques achieving 92% accuracy",
        "Implemented text preprocessing and feature engineering improving model accuracy by 15%",
        "Developed a spam mail classification system with 94% precision and 91% recall rates",
        "Created detailed reports and presentations on project findings reaching 200+ stakeholders"
      ]
    },{
    id: 3,
      role: "Web Development Intern",
      company: "Eduskills Foundation ",
      location: "Remote",
      duration: "May 2024 - Sep 2024",
      description: [
"Developed responsive web applications using HTML5, CSS3, and JavaScript with focus on user experience and accessibility",
        "Built dynamic frontend interfaces using React.js and modern JavaScript frameworks, improving user engagement by 35%",
        "Implemented RESTful API integrations connecting frontend applications with backend services and databases",
        "Created mobile-first responsive designs ensuring 98% cross-browser compatibility across all major platforms",
        "Optimized website performance achieving 40% faster load times through code splitting and image optimization",
        "Gained expertise in modern web technologies including React, Node.js, Express, and MongoDB for full-stack development",
        "Learned version control with Git and collaborative development workflows using GitHub and Agile methodologies",
        "Developed 5+ complete web projects from concept to deployment, showcasing proficiency in full development lifecycle",
        "Collaborated with design and development team of 6 members to deliver pixel-perfect implementations within deadlines"
      ]
    }
  ];

  return (
    <section id="internships" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Internships
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional experience and contributions in various organizations.
          </p>
        </motion.div>

        {/* Internships Grid */}
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-gradient-to-br from-white via-white to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-primary to-secondary" />
              
              <div className="relative p-8">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="flex items-center gap-3 mb-3"
                    >
                      <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                        {internship.role}
                      </h3>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2"
                    >
                      <Building2 className="w-5 h-5 text-primary" />
                      <span className="text-lg font-medium">{internship.company}</span>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="mt-4 lg:mt-0 lg:text-right"
                  >
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span className="font-medium">{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span className="font-medium">{internship.location}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Achievements Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Achievements</h4>
                  </div>
                  
                  <div className="grid gap-3">
                    {internship.description.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 0.7 + i * 0.1 }}
                        whileHover={{ x: 8, transition: { duration: 0.2 } }}
                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <ChevronRight className="w-4 h-4 text-primary group-hover/item:text-secondary transition-colors duration-300" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Bottom decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships; 