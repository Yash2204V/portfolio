import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['HTML5/CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'React.js', 'TypeScript', 'Next.js'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Node.js', 'MongoDB', 'Express', 'MySQL', 'PostgreSQL', 'RESTful APIs'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['JavaScript', 'TypeScript', 'C++', 'Python', 'SQL'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Tools & DevOps',
      icon: Settings,
      skills: ['Github & Git', 'Docker', 'Postman', 'Vercel, Railway, Render, Netlify'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['API Integration', 'OAuth'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      skills: ['AI/ML Integration'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const proficiencyLevels = [
    { name: 'Advanced', percentage: 80, skills: ['JavaScript', 'React.js', 'Node.js','Express', 'MongoDB'] },
    { name: 'Intermediate', percentage: 60, skills: ['TypeScript', 'PostgreSQL', 'Next.js'] },
    { name: 'Learning', percentage: 50, skills: ['AI/ML', 'Python', 'Docker'] }
  ];

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Skills & Expertise</h1>
        <p className="page-subtitle">
          A comprehensive overview of my technical skills, tools, and technologies I work with to create amazing digital experiences.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 mt-10">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cyber-card group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center group/item hover:translate-x-2 transition-transform"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover/item:scale-125 transition-transform"></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="cyber-card"
        >
          <h2 className="text-3xl font-bold cyber-text-primary text-center mb-12">
            Proficiency Levels
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {proficiencyLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{level.name}</h3>
                  <span className="text-purple-300 font-medium">{level.percentage}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${level.percentage}%` }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                  />
                </div>
                
                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {level.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center">
          <div className="cyber-card max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">My Learning Philosophy</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              "Learn to think critically, learn to question everything, learn to stay curious, learn to be able to avoid non-sense, learn to tackle falseness strategically."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Tech Enthusiast', 'Problem Solver', 'Innovation Seeker', 'Automation Freak'].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
