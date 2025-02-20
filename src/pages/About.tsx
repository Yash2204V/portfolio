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
          I'm Yash Varma, a passionate Full-Stack Developer specializing in MERN and PERN stacks. I love building 
          scalable, maintainable applications with a strong focus on AI-driven efficiency and seamless user experiences. 
          Whether it's e-commerce, security-focused applications, or learning experiences, I thrive on bringing ideas to life.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Code className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clean & Scalable</h3>
            <p className="text-gray-600 text-center">
              Writing optimized, maintainable, and efficient code is my top priority.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
            <p className="text-gray-600 text-center">
              Always exploring new technologies, from AI-powered development to Web 3.0 innovations.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Coffee className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
            <p className="text-gray-600 text-center">
              Turning complex challenges into simple, scalable solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            My journey in software development started with a curiosity about how web applications function. 
            Over time, I mastered frontend and backend development, contributing to diverse projects ranging from 
            e-commerce platforms to AI-integrated applications.
          </p>
          <p className="text-gray-700">
            I've participated in hackathons like Vihann007 DTU and Hackfest by GFG, collaborating on innovative projects. 
            My experience spans full-stack development, cloud computing, and API integrations.
          </p>
          <p className="text-gray-700">
            Apart from coding, I contribute to open-source projects, mentor aspiring developers, and experiment with 
            emerging tech like AI-powered automation.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;