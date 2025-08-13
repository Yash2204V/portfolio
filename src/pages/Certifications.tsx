import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {

  const certifications = [
    {
      id: 1,
      title: "JavaScript (Basic) Certificate",
      issuer: "HackerRank",
      date: "Jul 2025",
      description: "Verified understanding of JavaScript fundamentals, including syntax, functions, and basic problem-solving.",
      skills: ["JavaScript"],
      credentialUrl: "", // add your actual link
      badgeColor: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      title: "Organizer of Pears Global Hackathon",
      issuer: "Geek Room",
      date: "Mar 2025",
      description: "Served as organizer and moderator, managing teams, coordinating sessions, and ensuring smooth event execution.",
      skills: ["Event Management", "Organizing", "Moderation"],
      credentialUrl: "#", // optional image link
      badgeColor: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Speak Stream Certification",
      issuer: "IPEM Ghaziabad",
      date: "Nov 2024",
      description: "Gained experience in public speaking and impromptu speaking, overcoming stage fear in a competitive environment.",
      skills: ["Public Speaking", "Impromptu Speaking"],
      credentialUrl: "#",
      badgeColor: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "AI For Students: Build Your Own Generative AI Model",
      issuer: "NxtWave",
      date: "Apr 2024",
      description: "Learned concepts of Generative AI, prompt engineering, and building simple AI-powered applications.",
      skills: ["Artificial Intelligence", "Generative AI"],
      credentialUrl: "#",
      badgeColor: "from-blue-500 to-cyan-500",
    },
    {
      id: 5,
      title: "HTML and CSS for Beginners from Basic to Advance",
      issuer: "Udemy",
      date: "Dec 2023",
      description: "Covered fundamentals of HTML5 and CSS3 for creating responsive, accessible, and visually appealing web pages.",
      skills: ["HTML5", "CSS3"],
      credentialUrl: "#",
      badgeColor: "from-green-500 to-teal-500",
    },
    {
      id: 6,
      title: "CLOUD SKILL CHALLENGE: Azure AI Fundamentals",
      issuer: "Microsoft Learn Student Ambassadors",
      date: "2023",
      description: "Introduction to Azure AI services, cloud concepts, and machine learning basics on Microsoft Azure platform.",
      skills: ["Azure AI", "Cloud Fundamentals"],
      credentialUrl: "#",
      badgeColor: "from-indigo-500 to-sky-500",
    }
  ];

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16 flex flex-col justify-start ">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center mb-6"
          >
            <h1 className="page-title mb-0">Certifications</h1>
          </motion.div>
          <p className="page-subtitle">
            My journey of continuous learning and professional development through industry-recognized 
            certifications and courses. Each certification represents a commitment to excellence and expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="cyber-card group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="grid md:grid-cols-4 gap-6 items-start">
                {/* Badge */}
                <div className="flex justify-center md:justify-start">
                  <div className={`w-24 h-24 bg-gradient-to-br ${cert.badgeColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <Award className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 space-y-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex items-center text-gray-400 space-x-4">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20"
        >
          <div className="cyber-card max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold cyber-text-primary mb-6">
              Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Each certification represents not just knowledge gained, but a commitment to staying current 
              with industry best practices and emerging technologies. I believe in continuous learning 
              as the foundation of professional growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Recognition",
                  description: "Certifications are like proof of practice & hard work."
                },
                {
                  title: "Practical Application",
                  description: "Applying learned concepts in real-world projects and professional work"
                },
                {
                  title: "Knowledge Sharing",
                  description: "Sharing insights and helping others on their learning journey"
                }
              ].map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20"
                >
                  <h3 className="text-white font-semibold mb-2">{principle.title}</h3>
                  <p className="text-gray-400 text-sm">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Certifications;
