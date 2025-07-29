import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Python Programming (Intro & Advanced)",
      issuer: "Edyst",
      date: "December 2023",
      credentialId: "EDYST-PY-2023",
      url: "https://edyst.com/certificates/EDYST-PY-2023",
      skills: ["Python", "OOP", "Data Structures", "Algorithms", "Advanced Python Concepts"]
    },
    {
      id: 2,
      title: "Machine Learning with GO",
      issuer: "Infosys Springboard",
      date: "January 2024",
      credentialId: "ISB-ML-GO-2024",
      url: "https://springboard.infosys.com/certificates/ISB-ML-GO-2024",
      skills: ["Go Programming", "Machine Learning", "Data Analysis", "Model Development"]
    },
    {
      id: 3,
      title: "Prompt Engineering for Generative AI",
      issuer: "Google Cloud",
      date: "February 2024",
      credentialId: "GC-PE-2024",
      url: "https://cloud.google.com/certificates/GC-PE-2024",
      skills: ["Prompt Engineering", "Generative AI", "LLMs", "AI Applications"]
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-gray-800">
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
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements in various technologies and domains.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Award className="w-4 h-4" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Credential ID: {cert.credentialId}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 