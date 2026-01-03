import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TECHPOTLI - Matoshi Infotech',
      position: 'Software Engineer',
      duration: 'Sept 2025 - Present',
      status: 'Ongoing',
      description: [
        'Built and customized 120+ templates and edited multiple client applications, improving usability and overall design consistency.',
        'Strengthened technical workflows by improving MERN stack components and refining Git/GitHub version control processes.',
        'Optimized SEO, metadata, and performance metrics, achieving faster load times and enhanced project discoverability.'
      ],
      technologies: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'SEO', 'Git', 'GitHub'],
      color: 'from-orange-500 to-red-500'
    },
    {
      company: 'WEBXELA',
      position: 'Software Engineer Intern',
      duration: 'Feb 2025 - Aug 2025',
      status: 'Completed',
      description: [
        'Provided mentorship to teams, assisting with debugging and optimizing their projects.',
        'Collaborated with professionals to innovate solutions.',
        'Implemented modern development practices and code review processes.'
      ],
      technologies: ['React', 'Node.js', 'Javascript', 'MongoDB'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'Geek Room',
      position: 'Organizer - The Pears Global Hackathon',
      duration: 'Dec 2024 - Mar 2025',
      status: 'Completed',
      description: [
        'Managed event promotion and outreach, leading to participation from 150+ teams worldwide.',
        'Facilitated team coordination, ensuring a smooth experience for developers and attendees.',
        'Designed and implemented event management systems and processes.'
      ],
      technologies: ['Event Management', 'Community Building', 'Marketing', 'Coordination'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      company: 'Hacker World SDGI Coding Club',
      position: 'Web Development Lead',
      duration: 'May 2024 - Jan 2025',
      status: 'Completed',
      description: [
        'Organized coding events, hackathons, and technical seminars.',
        'Mentored junior developers and conducted code reviews to maintain high coding standards.',
        'Led technical workshops and training sessions for 50+ students.'
      ],
      technologies: ['Leadership', 'Mentoring', 'Event Planning', 'Technical Training'],
      color: 'from-emerald-500 to-teal-500'
    }
  ];


  const getStatusColor = (status: string) => {
    return status === 'Current'
      ? 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30'
      : 'text-purple-400 bg-purple-500/20 border-purple-500/30';
  };

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Professional Experience</h1>
        <p className="page-subtitle">
          My journey through various roles, leading teams, mentoring developers, and building
          innovative solutions. Each experience has shaped my skills and leadership capabilities.
        </p>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-20 mt-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cyber-card group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="grid md:grid-cols-4 gap-6">
                {/* Company Badge */}
                <div className="flex justify-center md:justify-start">
                  <div className={`w-20 h-20 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 space-y-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <h2 className="text-2xl font-bold text-white group-hover:text-glow transition-all">
                      {exp.position}
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(exp.status)}`}>
                      {exp.status}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-400 space-x-4">
                    <span className="text-lg font-medium text-purple-300">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                        className="flex items-start group/item"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-4 group-hover/item:scale-125 transition-transform"></div>
                        <span className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default Experience;
