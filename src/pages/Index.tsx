
import { useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ui/ParticleBackground";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Achievements from "../components/sections/Achievements";
import Contact from "../components/sections/Contact";

const Index = () => {
  useEffect(() => {
    // Update title
    document.title = "Salman Qureshi - Full Stack Developer";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background particles */}
      <ParticleBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Achievements Section */}
        <Achievements />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Salman Qureshi. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
