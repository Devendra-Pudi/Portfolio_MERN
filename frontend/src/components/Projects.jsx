import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

// Import project images
import weatherImg from '../assets/projects/weather.jpg';
import taskManagerImg from '../assets/projects/task-manager.jpg';
import aiChatbotImg from '../assets/projects/ai-chatbot1.jpg';
import faceDetectionImg from '../assets/projects/face-detection.jpg';
import fakeNewsImg from '../assets/projects/fake-news.jpg';
import spamDetectionImg from '../assets/projects/spam-detection.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "A real-time weather application that provides current weather conditions, forecasts, and weather alerts for any location worldwide. Built with React and OpenWeather API.",
      image: weatherImg,
      technologies: ["React", "JavaScript", "OpenWeather API", "CSS", "HTML"],
      category: "Frontend",
      github: "https://github.com/Devendra-Pudi/Weather-App",
      live: "https://weather-app-by-devendra.netlify.app/",
      featured: true,
      highlights: [
        "Real-time weather data integration",
        "Responsive design for all devices",
        "Location-based weather detection",
        "5-day weather forecast"
      ]
    },
    {
      id: 2,
      title: "Task Magic (Task Management System)",
      description: "A comprehensive task management system with features like task creation, assignment, due dates, priority levels, and status tracking. Built with MERN stack.",
      image: taskManagerImg,
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      category: "Full Stack",
      github: "https://github.com/Devendra-Pudi/Task_Magic_App",
      live: "https://taskmagic-app-devendra-pudi.netlify.app/",
      featured: true,
      highlights: [
        "User authentication and authorization",
        "Real-time updates with Socket.io",
        "Task filtering and sorting",
        "Email notifications"
      ]
    },
    {
      id: 3,
      title: "AI Chatbot Web Application",
      description: "An interactive AI-powered chatbot web application that can answer user queries, provide information, and engage in natural language conversations. Built with React for the frontend and integrated with OpenAI's GPT API.",
      image: aiChatbotImg,
      technologies: ["React", "Node.js", "Express.js", "AI LLM API", "Socket.io"],
      category: "Full Stack",
      github: "https://github.com/yourusername/ai-chatbot-webapp",
      live: "https://ai-chatbot-demo.netlify.app",
      featured: false,
      highlights: [
        "Real-time conversational AI",
        "Integration with OpenAI GPT API",
        "User-friendly chat interface",
        "Persistent chat history"
      ]
    },
    {
      id: 4,
      title: "Face Detection System",
      description: "An advanced face detection system using deep learning that can identify and track faces in real-time from images and video streams. Built with Python and OpenCV.",
      image: faceDetectionImg,
      technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning", "Computer Vision", "YOLO"],
      category: "Machine Learning",
      github: "https://github.com/Devendra-Pudi/Face-Detection-Project",
      live: null,
      featured: true,
      highlights: [
        "Real-time face detection and tracking",
        "Multi-face detection capability",
        "High accuracy using deep learning models",
        "Support for both image and video input"
      ]
    },
    {
      id: 5,
      title: "Fake News Detection",
      description: "An intelligent system that uses Natural Language Processing and Machine Learning to identify and classify fake news articles with high accuracy.",
      image: fakeNewsImg,
      technologies: ["Python", "Scikit-learn", "NLTK", "TensorFlow", "NLP"],
      category: "Machine Learning",
      github: "https://github.com/Devendra-Pudi/fake-news-detection-using-NLP",
      live: null,
      featured: true,
      highlights: [
        "Advanced text preprocessing",
        "Multiple ML model comparison",
        "High classification accuracy",
        "Real-time news analysis"
      ]
    },
    {
      id: 6,
      title: "Spam Mail Classification",
      description: "An email classification system that uses machine learning to automatically detect and filter spam emails with high precision and recall rates.",
      image: spamDetectionImg,
      technologies: ["Python", "Scikit-learn", "Pandas", "Natural Language Processing", "Machine Learning"],
      category: "Machine Learning",
      github: "https://github.com/Devendra-Pudi/Spam-Mail-Classification-using-NLP-and-ML",
      live: "https://spam-mail-classifier-project-by-devendra.streamlit.app/",
      featured: false,
      highlights: [
        "Email content analysis",
        "Feature engineering for emails",
        "Multiple classification algorithms",
        "High accuracy spam detection"
      ]
    }
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Machine Learning'];

  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest work and personal projects that showcase my skills and passion for development and machine learning.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => filterProjects(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === category
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary/10'
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
