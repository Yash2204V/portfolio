import { motion } from 'framer-motion';
import { Github, Globe, Tag } from 'lucide-react';
import type { Project } from '../types';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Lavendish",
      description: "Sell Stylish Bags",
      technologies: ["EJS", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      videoUrl: "/LavenDish.mp4",
      color: "#8c47af",
      liveUrl: "https://lavendish.onrender.com/",
      githubUrl: "https://github.com/YASH2204V/lavendish"
    },
    {
      id: 2,
      title: "FoodSavR",
      description: "Food Recovery System",
      technologies: ["React", "Node.js", "Firebase", "TailwindCSS"],
      videoUrl: "/foodsavR.mp4",
      color: "#776be1",
      liveUrl: "https://foodsavr.onrender.com/",
      githubUrl: "https://github.com/Yash2204V/foodsavr"
    },
    {
      id: 3,
      title: "Pay Safe",
      description: "Pay Safer & Better",
      technologies: ["React", "TypeScript", "Node.js", "REST API"],
      videoUrl: "/pay-safe.mp4",
      color: "#14a398",
      githubUrl: "https://github.com/Yash2204V/paysafe"
    },
    {
      id: 4,
      title: "TripWithEase",
      description: "Travel With Ease",
      technologies: ["React", "Node.js", "MongoDB", "Mapbox"],
      videoUrl: "/trip-with-ease.mp4",
      color: "#f97316", // orange-400 equivalent
      liveUrl: "https://trip-with-ease.onrender.com/",
      githubUrl: "https://github.com/Yash2204V/trip-with-ease"
    },
    {
      id: 5,
      title: "Mini-Docs",
      description: "Listing To-Dos",
      technologies: ["React", "Local Storage", "CSS Modules"],
      videoUrl: "/mini-docs.mp4",
      color: "#15803c",
      githubUrl: "https://github.com/Yash2204V/mini-docs-react"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <video
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src={project.videoUrl} type="video/mp4" />
              </video>
            </div>
            
            <div className="p-6">
              <h2 
                className="text-xl font-semibold mb-2"
                style={{ color: project.color }}
              >
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500"
                  >
                    <Globe className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-500"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;