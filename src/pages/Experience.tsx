import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'WEBXELA',
      position: 'Software Engineer Intern',
      duration: 'Feb 2025 - Present',
      description: [
        'Provided mentorship to teams, assisting with debugging and optimizing their projects.',
        'Collaborated with professionals to innovate solutions.'
      ]
    },
    {
      company: 'Geek Room',
      position: 'Organizer - The Pears Global Hackathon',
      duration: 'Dec 2024 - Present',
      description: [
        'Managed event promotion and outreach, leading to participation from 150+ teams worldwide.',
        'Facilitated team coordination, ensuring a smooth experience for developers and attendees.'
      ]
    },
    {
      company: 'Hacker World SDGI Coding Club',
      position: 'Web Development Lead',
      duration: 'May 2024 - Jan 2025',
      description: [
        'Organized coding events, hackathons, and technical seminars.',
        'Mentored junior developers and conducted code reviews to maintain high coding standards.'
      ]
    }
  ];
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Professional Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="w-6 h-6 text-indigo-600 mr-3" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{exp.position}</h2>
                <div className="text-gray-600">{exp.company}</div>
              </div>
            </div>

            <div className="flex items-center mb-4 text-gray-500">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{exp.duration}</span>
            </div>

            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="font-semibold text-indigo-600 mb-2">Technical Leadership</div>
            <p className="text-gray-700">Successfully led multiple high-impact projects and mentored junior developers</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="font-semibold text-indigo-600 mb-2">Innovation</div>
            <p className="text-gray-700">Introduced new technologies and methodologies that improved team productivity</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="font-semibold text-indigo-600 mb-2">Performance Optimization</div>
            <p className="text-gray-700">Consistently improved application performance and user experience</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="font-semibold text-indigo-600 mb-2">Team Collaboration</div>
            <p className="text-gray-700">Built strong relationships across departments and stakeholders</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;