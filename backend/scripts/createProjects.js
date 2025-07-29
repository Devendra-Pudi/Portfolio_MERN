require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('../models/Project');

const projects = [
  {
    title: "Weather App",
    description: "A real-time weather application that provides current weather conditions, forecasts, and weather alerts for any location worldwide. Built with React and OpenWeather API.",
    image: "/projects/weather.jpg",
    technologies: ["React", "JavaScript", "OpenWeather API", "CSS", "HTML"],
    category: "Frontend",
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather-app-demo.netlify.app",
    featured: true,
    status: "published",
    order: 1,
    tags: ["Weather", "API Integration", "React", "Frontend"],
    teamSize: 1,
    role: "Full Stack Developer",
    highlights: [
      "Real-time weather data integration",
      "Responsive design for all devices",
      "Location-based weather detection",
      "5-day weather forecast"
    ]
  },
  {
    title: "Task Manager",
    description: "A comprehensive task management system with features like task creation, assignment, due dates, priority levels, and status tracking. Built with MERN stack.",
    image: "/projects/task-manager.jpg",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
    category: "Full Stack",
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager-demo.herokuapp.com",
    featured: true,
    status: "published",
    order: 2,
    tags: ["Task Management", "MERN Stack", "Full Stack"],
    teamSize: 1,
    role: "Full Stack Developer",
    highlights: [
      "User authentication and authorization",
      "Real-time updates with Socket.io",
      "Task filtering and sorting",
      "Email notifications"
    ]
  },
  {
    title: "Blog API",
    description: "A RESTful API for a blogging platform with features like post creation, comments, user authentication, and category management. Built with Node.js and MongoDB.",
    image: "/projects/blog-api.jpg",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    category: "Backend",
    github: "https://github.com/yourusername/blog-api",
    live: "https://blog-api-demo.herokuapp.com",
    featured: false,
    status: "published",
    order: 3,
    tags: ["API", "Backend", "Blog", "Node.js"],
    teamSize: 1,
    role: "Backend Developer",
    highlights: [
      "RESTful API architecture",
      "JWT authentication",
      "Comment system",
      "Image upload functionality"
    ]
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, order processing, and payment integration. Built with MERN stack and Stripe.",
    image: "/projects/ecommerce.jpg",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "Redux"],
    category: "Full Stack",
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce-demo.netlify.app",
    featured: true,
    status: "published",
    order: 4,
    tags: ["E-commerce", "MERN Stack", "Payment Integration"],
    teamSize: 1,
    role: "Full Stack Developer",
    highlights: [
      "Secure payment processing",
      "Product inventory management",
      "User authentication",
      "Order tracking system"
    ]
  }
];

const createProjects = async () => {
  try {
    // Connect to MongoDB
    console.log('\x1b[36mConnecting to MongoDB...\x1b[0m');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('\x1b[32mConnected to MongoDB successfully!\x1b[0m');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('\x1b[33mCleared existing projects\x1b[0m');

    // Create new projects
    const createdProjects = await Project.create(projects);
    console.log('\x1b[32m\nProjects created successfully!\x1b[0m');
    console.log('\nCreated projects:');
    createdProjects.forEach(project => {
      console.log('\x1b[36m-', project.title, '\x1b[0m');
    });

  } catch (error) {
    console.error('\x1b[31mError creating projects:\x1b[0m', error.message);
    if (error.message.includes('ECONNREFUSED')) {
      console.log('\n\x1b[33mMake sure your MongoDB cluster is accessible!\x1b[0m');
    }
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

createProjects(); 