import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      id: 1,
      role: "Machine Learning Intern",
      company: "Exposys Data Labs",
      location: "Remote",
      duration: "Aug 2023 - Sep 2023",
      description: [
        "Developed and implemented machine learning models for face detection and recognition",
        "Utilized OpenCV and deep learning techniques to achieve high accuracy in facial detection",
        "Collaborated with team members to improve model performance and reduce false positives",
        "Created comprehensive documentation for model deployment and usage"
      ]
    },
    {
      id: 2,
      role: "Data Science Intern",
      company: "CodeClause",
      location: "Remote",
      duration: "Sep 2023 - Oct 2023",
      description: [
        "Built a fake news detection system using NLP and machine learning techniques",
        "Implemented text preprocessing and feature engineering for improved accuracy",
        "Developed a spam mail classification system with high precision and recall rates",
        "Created detailed reports and presentations on project findings and methodologies"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {internship.role}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Building2 className="w-4 h-4" />
                      <span>{internship.company}</span>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{internship.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {internship.description.map((item, i) => (
                    <li key={i} className="text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships; 