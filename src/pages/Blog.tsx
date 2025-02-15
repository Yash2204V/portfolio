import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Blog = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
      <p className="text-lg text-gray-600 mb-6">
        Explore insightful articles on web development, version control, and software architecture. Each post offers a deep dive into industry practices, best approaches, and expert tips.
      </p>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            style={{ borderLeft: `8px solid ${post.themeColor}` }}
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={post.imageUrl}
                  alt={post.title}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xl font-medium text-white" style={{ backgroundColor: post.themeColor }}>
                    {post.icon} {post.category}
                  </span>

                </div>
                <a href={post.link} className="block mt-2" target="_blank" rel="noopener noreferrer">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-gray-700">{post.subtitle}</p>
                  <p className="mt-2 text-gray-600">{post.excerpt}</p>
                </a>
                <div className="mt-4">
                  <a
                    href={post.link}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;