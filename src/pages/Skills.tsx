import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['HTML5/CSS3', 'JavaScript (ES6+)','Tailwind CSS', 'TypeScript', 'React.js', 'Next.js']
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Node.js', 'Express', 'MySQL', 'PostgreSQL', 'MongoDB', 'RESTful APIs']
    },
    {
      title: 'Tools',
      icon: Settings,
      skills: ['Github & Git', 'Docker']
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['WebSockets', 'Progressive Web Apps']
    },
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['JavaScript', 'TypeScript', 'C++']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Skills & Expertise</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <Icon className="w-8 h-8 text-indigo-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;