import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Coffee } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <p className="text-lg text-gray-700 mb-6">
          I'm a passionate full-stack developer with a deep love for creating elegant solutions to complex problems. 
          With several years of experience in web development, I specialize in building scalable applications 
          using modern technologies and best practices.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Code className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600 text-center">
              Writing maintainable, efficient, and well-documented code is my priority
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Always Learning</h3>
            <p className="text-gray-600 text-center">
              Constantly expanding my knowledge and staying up-to-date with latest technologies
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Coffee className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
            <p className="text-gray-600 text-center">
              Turning complex problems into simple, beautiful solutions
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            My journey in software development began with a curiosity about how things work on the web. 
            This curiosity led me to dive deep into various programming languages and frameworks, 
            eventually becoming proficient in both frontend and backend development.
          </p>
          <p className="text-gray-700">
            Throughout my career, I've had the opportunity to work on diverse projects ranging from 
            e-commerce platforms to enterprise applications. Each project has added to my expertise 
            and reinforced my passion for creating exceptional digital experiences.
          </p>
          <p className="text-gray-700">
            When I'm not coding, you'll find me contributing to open-source projects, mentoring 
            aspiring developers, or exploring new technologies to expand my skill set.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;