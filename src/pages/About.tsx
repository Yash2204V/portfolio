import { motion } from 'framer-motion';
import { BookOpen, Code, Coffee, Zap, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          Arrey, sabr kro yaar 😄 Itni curiosity! Chalo, thoda professionally introduce kar hi deta hoon – but with angrezi...
          <br /><br />
          I'm Yash Varma, a passionate Full-Stack Developer specializing in MERN and PERN stacks. 
          I love building scalable, maintainable applications with a focus on AI-driven efficiency 
          and seamless user experiences.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 mt-10">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="cyber-card"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Heart className="w-8 h-8 text-pink-400 mr-3" />
              My Journey
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                My journey in software development started with a curiosity about how web applications function. 
                Over time, I gain enough experience in frontend and backend development, contributing to diverse projects ranging from 
                e-commerce platforms, management systems to AI-driven Code Reviewers.
              </p>
              <p>
                I've participated in hackathons like Vihann007 DTU, Hackfest by GFG, collaborating on innovative projects. 
                My experience spans full-stack development, API integrations, with a keen interest in AI/ML applications.
              </p>
              <p>
                Apart from coding, I like to play football, badminton, and cricket.
                I also enjoy reading books and novels on various topics, including technology, philosophy, and fiction.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="cyber-card"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Target className="w-8 h-8 text-cyan-400 mr-3" />
              Core Values
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Is it actually needed?",
                  description: "Questioning the necessity of every idea that come up in my mind to ensure value-driven development"
                },
                {
                  title: "How it can be scalable in future?",
                  description: "Writing clean, maintainable, and scalable solutions"
                },
                {
                  title: "What about user pov?",
                  description: "Prioritizing exceptional user experiences in every project"
                },
                {
                  title: "Let's dive in another one...",
                  description: "Constantly learning and adapting to new challenges"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="border-l-4 border-purple-500 pl-4"
                >
                  <h3 className="text-white font-semibold mb-1">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* What I Bring */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold cyber-text-primary text-center mb-12">
            What I Bring to the Table
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Clean & Scalable',
                description: 'Writing optimized, maintainable, and efficient code is my top priority.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: BookOpen,
                title: 'Continuous Learning',
                description: 'Always exploring new technologies, from AI-powered development to Web 3.0 innovations.',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Coffee,
                title: 'Problem Solver',
                description: 'Turning complex challenges into simple, scalable solutions.',
                color: 'from-emerald-500 to-teal-500'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="cyber-card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-20"
        >
          <div className="cyber-card">
            <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              Quick Facts
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Languages', value: 'JavaScript, Python, C++' },
                { label: 'Favorite Stack', value: 'React + Node.js + MongoDB + Express.js' },
                { label: 'Code Editor', value: 'VS Code, Windsurf, Cursor' },
                { label: 'Learning', value: 'AI/ML integrations & Python'}
              ].map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20"
                >
                  <div className="text-purple-300 font-semibold text-sm mb-1">{fact.label}</div>
                  <div className="text-white text-sm">{fact.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
