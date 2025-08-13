import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Brain, Lightbulb } from 'lucide-react';

const ForCurious = () => {
  const posts = [
    {
      id: 1,
      title: "Ignite the Vision",
      excerpt: "Unlock Potential Within",
      link: "https://yash-v22.notion.site/Establish-MERN-App-134cbe14f3cc801ca570d07352a28b8d?pvs=4",
      category: "MERN Stack Guide",
      imageUrl: "/images/L.webp",
      themeColor: "#FF5733",
      subtitle: "Establish MERN App with best practices and optimal workflow.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Envision Beyond",
      excerpt: "Step into Possibilities",
      link: "https://yash-v22.notion.site/Git-GitHub-commands-134cbe14f3cc8088af5fcbf072ee63bf?pvs=4",
      category: "Version Control",
      imageUrl: "/images/O.webp",
      themeColor: "#33C9FF",
      subtitle: "Master Git/GitHub Commands for seamless collaboration.",
      icon: "⭐"
    },
    {
      id: 3,
      title: "Awaken Insight",
      excerpt: "Embark on a Journey Beyond",
      link: "https://yash-v22.notion.site/Web-Dev-Styling-Roadmap-134cbe14f3cc80d49ba9f0128cf4687b?pvs=4",
      category: "Frontend Roadmap",
      imageUrl: "/images/V.webp",
      themeColor: "#FFD700",
      subtitle: "Styling Mastery through modern web design principles.",
      icon: "🛣️"
    },
    {
      id: 4,
      title: "Emerge Stronger",
      excerpt: "Rise to New Heights",
      link: "https://yash-v22.notion.site/",
      category: "Backend Architecture",
      imageUrl: "/images/E.webp",
      themeColor: "#c376ff",
      subtitle: "Backend Structure optimization for scalable applications.",
      icon: "📂"
    }
  ];

  const categories = [
    { name: 'All', count: posts.length, active: true },
    { name: 'Frontend', count: 1, active: false },
    { name: 'Backend', count: 2, active: false },
    { name: 'DevOps', count: 1, active: false }
  ];

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16 flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center mb-6"
          >
            <h1 className="page-title mb-0">For the Curious</h1>
          </motion.div>
          <p className="page-subtitle">
            Dive deep into web development, explore cutting-edge technologies, and discover insights 
            that fuel innovation. A collection of guides, tutorials, and thoughts for curious minds.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="cyber-card group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span 
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold text-white shadow-lg"
                      style={{ backgroundColor: post.themeColor }}
                    >
                      {post.icon} {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 space-y-4">

                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group/link"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover/link:text-glow transition-all">
                      {post.title}
                    </h2>
                    <p className="text-purple-300 font-medium mb-3">{post.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed mb-4">{post.excerpt}</p>
                  </a>

                  <div className="flex items-center justify-between">
                    <a
                      href={post.link}
                      className="inline-flex items-center text-purple-300 hover:text-purple-100 font-semibold transition-colors group/cta"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Full Article
                      <ChevronRight className="w-4 h-4 ml-1 group-hover/cta:translate-x-1 transition-transform" />
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: post.themeColor }}
                      ></div>
                      <span className="text-gray-400 text-sm">Featured</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="cyber-card max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold cyber-text-primary mb-6">
              Stay Curious, Keep Learning
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              These articles represent my journey of continuous learning and sharing knowledge. 
              Whether you're a beginner or an experienced developer, there's always something new to discover.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Web Development', 'Best Practices', 'Modern Tech', 'Industry Insights'].map((tag, index) => (
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

export default ForCurious;
