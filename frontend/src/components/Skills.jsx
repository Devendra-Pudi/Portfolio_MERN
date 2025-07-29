import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      description: 'Building responsive and interactive user interfaces with modern web technologies.',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️', description: 'Building scalable web applications with React ecosystem' },
        { name: 'JavaScript', level: 85, icon: '🟨', description: 'ES6+, DOM manipulation, async programming' },
        { name: 'TypeScript', level: 60, icon: '🔷', description: 'Type-safe development with interfaces and generics' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨', description: 'Rapid UI development with utility-first CSS' },
        { name: 'HTML5/CSS3', level: 95, icon: '🌐', description: 'Semantic markup and modern CSS features' },
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      description: 'Creating robust server-side applications and APIs.',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢', description: 'Server-side JavaScript with Express and Node.js' },
        { name: 'Express.js', level: 80, icon: '🚀', description: 'RESTful API development with middleware' },
        { name: 'MongoDB', level: 75, icon: '🗄️', description: 'NoSQL database design and operations' },
        { name: 'REST APIs', level: 85, icon: '🔌', description: 'API design, documentation, and integration' },
        { name: 'JWT Auth', level: 80, icon: '🔐', description: 'Secure authentication and authorization' },
      ]
    },
    {
      title: 'Software Development',
      icon: '💻',
      description: 'Core programming concepts and best practices.',
      skills: [
        { name: 'Python', level: 90, icon: '🐍', description: 'General-purpose programming and scripting' },
        { name: 'Data Structures', level: 75, icon: '📊', description: 'Efficient data organization and algorithms' },
        { name: 'Algorithms', level: 70, icon: '⚙️', description: 'Problem-solving and optimization techniques' },
        { name: 'OOPS Concept', level: 80, icon: '🤖', description: 'Object-oriented design patterns' },
        { name: 'DevOps', level: 50, icon: '♾️', description: 'CI/CD pipelines and deployment automation' },
      ]
    },
    {
      title: 'Machine Learning & AI',
      icon: '🧠',
      description: 'Developing intelligent systems and models.',
      skills: [
        { name: 'TensorFlow', level: 85, icon: '🧠', description: 'Deep learning model development and training' },
        { name: 'PyTorch', level: 80, icon: '🔥', description: 'Neural network implementation and research' },
        { name: 'Scikit-learn', level: 85, icon: '📊', description: 'Machine learning algorithms and pipelines' },
        { name: 'Deep Learning', level: 80, icon: '🤖', description: 'CNN, RNN, and transformer architectures' },
        { name: 'NLP', level: 75, icon: '📝', description: 'Text processing and language understanding' },
        { name: 'Computer Vision', level: 70, icon: '👁️', description: 'Image processing and object detection' },
        { name: 'Data Analysis', level: 85, icon: '📈', description: 'Statistical analysis and visualization' },
        { name: 'Neural Networks', level: 75, icon: '🔮', description: 'Architecture design and optimization' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      description: 'Essential development tools and platforms.',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: '📚', description: 'Version control and collaboration' },
        { name: 'AWS Services', level: 75, icon: '☁️', description: 'Cloud infrastructure and services' },
        { name: 'PowerBI', level: 80, icon: '📊', description: 'Data visualization and reporting' },
        { name: 'Prompt Engineering', level: 85, icon: '🤔', description: 'AI model interaction optimization' },
        { name: 'Generative AI', level: 80, icon: '🎨', description: 'Text and image generation with AI' },
        { name: 'VS Code', level: 95, icon: '💻', description: 'Advanced IDE usage and extensions' },
        { name: 'Linux', level: 70, icon: '🐧', description: 'Command line and system administration' },
        { name: 'Postman', level: 80, icon: '📮', description: 'API testing and documentation' },
      ]
    },
    {
      title: 'Soft Skills',
      icon: '🎖️',
      description: 'Experienced in leading as a class representative.',
      skills: [
        { name: 'Communication', level: 90, icon: '🗣️', description: 'Key to Communicate with everyone efficiently' },
        { name: 'Problem Solving', level: 75, icon: '🧩', description: 'Efficient in quickly solving Patterns and Complex Problems' },
        { name: 'Adaptability', level: 70, icon: '🔄', description: 'Quickly adapt to new situations and environments' },
        { name: 'Teamwork', level: 80, icon: '�', description: 'Work well in a team and lead the team when needed' },
        { name: 'Leadership', level: 80, icon: '👑', description: 'Lead the team when needed' },
        { name: 'Time Management', level: 80, icon: '⏰', description: 'Manage time effectively and prioritize tasks' },
        { name: 'Critical Thinking', level: 80, icon: '�', description: 'Think critically and solve problems effectively' },
        { name: 'Creativity', level: 80, icon: '🎨', description: 'Think creatively and come up with new ideas' },
        { name: 'Self Discipline', level: 80, icon: '💪', description: 'Stay focused and disciplined in achieving goals' },
      ]
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                expandedCategory === categoryIndex ? 'row-span-2' : ''
              }`}
            >
              <motion.div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {category.title}
              </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCategory === categoryIndex ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {category.description}
                </p>

                <AnimatePresence>
                  {(expandedCategory === categoryIndex || expandedCategory === null) && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        hidden: { opacity: 0, height: 0 },
                        visible: { opacity: 1, height: 'auto' }
                      }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {category.skills.slice(0, expandedCategory === categoryIndex ? undefined : 3).map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          variants={skillVariants}
                          className="relative"
                          onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                              <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                            </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>

                          <AnimatePresence>
                            {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute z-10 left-0 right-0 mt-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-sm text-gray-600 dark:text-gray-300"
                              >
                                {skill.description}
                              </motion.div>
                            )}
                          </AnimatePresence>
                  </motion.div>
                ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {expandedCategory !== categoryIndex && category.skills.length > 3 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCategory(categoryIndex);
                    }}
                    className="mt-4 text-primary text-sm font-medium flex items-center gap-1 hover:underline"
                  >
                    Show all {category.skills.length} skills
                    <ChevronDown className="w-4 h-4" />
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
