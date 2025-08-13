import { motion } from 'framer-motion';
import { Github, Globe, Tag, Play } from 'lucide-react';
import type { Project } from '../types';

const Projects = () => {

  const projects: Project[] = [
    {
      id: 1,
      title: "Axoryn",
      description: "Next-Gen Multimedia Website",
      longDescription:
        "A multimedia-rich platform currently under development, aiming to deliver interactive and engaging user experiences.",
      technologies: ["React.js", "TailwindCSS", "MongoDB", "Express.js", "Cloudinary", "Node.js"],
      videoUrl: "",
      imgUrl: "https://res.cloudinary.com/dlgkhjygr/image/upload/v1755125968/axoryn_pe8wdb.jpg",
      color: "#9333ea",
      githubUrl: "https://github.com/Yash2204V/Axoryn",
    },
    {
      id: 2,
      title: "Glorious Tales",
      description: "Tribute Platform for India's Forgotten Heroes",
      longDescription:
        "An open-source contribution platform dedicated to freedom fighters, saints, sages, and revolutionaries of India. Built for immersive storytelling and historical preservation.",
      technologies: [
        "Express.js",
        "MongoDB",
        "React 18",
        "TailwindCSS"
      ],
      videoUrl: "https://res.cloudinary.com/dlgkhjygr/video/upload/v1755125958/glorious-tales_e1bc4k.mp4",
      color: "#dc2626",
      liveUrl: "https://glorious-tales.vercel.app/",
      githubUrl: "https://github.com/Yash2204V/GloriousTales",
    },
    {
      id: 3,
      title: "Duniya Mausam",
      description: "Global Weather Forecasting Platform",
      longDescription:
        "A weather application providing real-time forecasts, using Python backend with Flask and a modern React-based frontend.",
      technologies: [
        "Flask",
        "Python",
        "React 18",
        "TailwindCSS",
        "API"
      ],
      videoUrl: "https://res.cloudinary.com/dlgkhjygr/video/upload/v1755125941/duniya-mausam_se4lej.mp4",
      color: "#2563eb",
      liveUrl: "https://duniya-mausam.vercel.app/",
      githubUrl: "https://github.com/YASH2204V/duniya-mausam",
    },
    {
      id: 4,
      title: "Lavendish",
      description: "Stylish E-commerce Platform for Premium Bags",
      longDescription:
        "A modern e-commerce platform featuring secure payments, user authentication, and responsive design.",
      technologies: ["EJS", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      videoUrl: "https://res.cloudinary.com/dlgkhjygr/video/upload/v1755125954/LavenDish_tf21kf.mp4",
      color: "#8c47af",
      liveUrl: "https://lavendish.onrender.com/",
      githubUrl: "https://github.com/YASH2204V/lavendish",
    },
    {
      id: 5,
      title: "FoodSavR",
      description: "Food Recovery & Donation System",
      longDescription:
        "Platform connecting food donors with recipients to reduce waste and help communities.",
      technologies: ["HTML", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
      videoUrl: "https://res.cloudinary.com/dlgkhjygr/video/upload/v1755125960/foodsavR_x4xkwg.mp4",
      color: "#776be1",
      liveUrl: "https://foodsavr.onrender.com/",
      githubUrl: "https://github.com/Yash2204V/foodsavr",
    },
    {
      id: 6,
      title: "Pay Safe",
      description: "Secure Digital Payment Solution",
      longDescription:
        "Advanced payment system with enhanced security features and seamless user experience.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      videoUrl: "https://res.cloudinary.com/dlgkhjygr/video/upload/v1755125951/pay-safe_kzuapw.mp4",
      color: "#14a398",
      githubUrl: "https://github.com/Yash2204V/paysafe",
    },
    {
      id: 7,
      title: "TripWithEase",
      description: "Smart Travel Planning Platform",
      longDescription:
        "Comprehensive travel platform with booking, itinerary planning, and local recommendations.",
      technologies: ["EJS", "Tailwindcss", "Node.js", "MongoDB"],
      videoUrl: "https://res.cloudinary.com/dlgkhjygr/video/upload/v1755125954/trip-with-ease_bi6u31.mp4",
      color: "#f97316",
      liveUrl: "https://trip-with-ease.onrender.com/",
      githubUrl: "https://github.com/Yash2204V/trip-with-ease",
    },
    {
      id: 8,
      title: "Mini-Docs",
      description: "Interactive Document Management",
      longDescription:
        "Dynamic document creation tool with real-time editing and beautiful animations.",
      technologies: ["React", "Framer Motion"],
      videoUrl: "https://res.cloudinary.com/dlgkhjygr/video/upload/v1755125949/mini-docs_xuauu4.mp4",
      color: "#15803c",
      githubUrl: "https://github.com/Yash2204V/mini-docs-react",
    }
  ];

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Featured Projects</h1>
        <p className="page-subtitle">
          A showcase of my recent work, featuring web applications built with modern technologies 
          and best practices. Each project demonstrates different aspects of full-stack development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cyber-card group hover:scale-105 transition-all duration-300"
            >
              {/* Video Preview */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gray-800">
                {project.imgUrl && (
                  <img className="w-full h-full object-cover" src={project.imgUrl} alt="" />
                )}
                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              
              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h2 
                    className="text-2xl font-bold mb-2 group-hover:text-glow transition-all"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-2">
                    {project.description}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-colors"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex space-x-4 pt-4 border-t border-gray-700">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-purple-300 hover:text-purple-100 transition-colors group/link"
                    >
                      <Globe className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-400 hover:text-gray-200 transition-colors group/link"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <div className="cyber-card">
            <h2 className="text-3xl font-bold cyber-text-primary text-center mb-12">
              Project Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { number: '21+', label: 'Projects', color: 'from-purple-400 to-pink-400' },
                { number: '10+', label: 'Live Deployments', color: 'from-cyan-400 to-blue-400' },
                { number: '20+', label: 'Technologies Used', color: 'from-emerald-400 to-teal-400' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
