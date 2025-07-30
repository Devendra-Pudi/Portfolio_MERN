import React, { useState, useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Lazy load components
const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/Projects'));
const Education = React.lazy(() => import('./components/Education'));
const Internships = React.lazy(() => import('./components/Internships'));
const Skills = React.lazy(() => import('./components/Skills'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));



// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-gray-900 dark:to-gray-800">
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="relative w-16 h-16"
      >
        <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 dark:text-gray-400 font-medium"
      >
        Loading amazing content...
      </motion.p>
    </motion.div>
  </div>
);

// Layout component
const MainLayout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <div className="relative">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        {children}
      </main>
      <Footer />


    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Main Route */}
                <Route
                  path="/"
                  element={
                    <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
                      <Hero />
                      <About />
                      <Internships />
                      <Skills />
                      <Projects />
                      <Education />
                      <Certifications />
                      <Contact />
                    </MainLayout>
                  }
                />

                {/* 404 Route */}
                <Route
                  path="*"
                  element={
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-6xl font-bold mb-4">404</h1>
                        <p className="text-xl mb-4">Page not found</p>
                        <Link to="/" className="text-blue-500 hover:text-blue-600">
                          Go back home
                        </Link>
                      </div>
                    </div>
                  }
                />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}

export default App;
