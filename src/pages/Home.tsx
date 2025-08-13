import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-8 space-y-8">

              {/* Profile Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-4 mb-8 mt-4 lg:mt-0">
                <div className="w-12 h-12 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold ">
                    <img className='' src="https://res.cloudinary.com/dlgkhjygr/image/upload/v1755125970/name_p8gzx0.png" alt="logo" />
                  </span>
                </div>
                <span className="text-zinc-400 font-medium">Hi I'm Yash Varma</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6">
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Bringing Ideas</span>
                  <br />
                  <span className="text-white">& Passion to Life with</span>
                  <br />
                  <span className="text-zinc-400">Refined Development</span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-2xl"
              >
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                  A passionate full-stack developer creating user-centered digital
                  solutions. From concept to code, I bring ideas to life
                  with clean design and intuitive interfaces.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link to="/projects" className="minimal-button flex items-center group">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="minimal-button-outline flex items-center"
                >
                  Download Resume
                </a>

                {/* Social Links */}
                <div
                  className="flex items-center space-x-6 pt-1"
                >
                  <a
                    href="mailto:yash.v220104@gmail.com"
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>

                  <a
                    href="https://github.com/Yash2204V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href="https://linkedin.com/in/yash-varma-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>




            </div>

            {/* Right - Profile Image */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end mb-5 mb:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  {/* Simple border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-2xl p-1">
                    <img
                      src="https://res.cloudinary.com/dlgkhjygr/image/upload/v1755125973/profile-1_ih0cu7.png"
                      alt="Yash Varma"
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills/Expertise Section */}
      <section className="py-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Front-end Development",
                desc: "Crafting responsive, user-friendly interfaces with cutting-edge frameworks and design principles.",
                delay: 0.1
              },
              {
                title: "Back-end Development",
                desc: "Designing and implementing robust, scalable, and secure server-side solutions for seamless performance.",
                delay: 0.2
              },
              {
                title: "AI/ML Enthusiast",
                desc: "Learning to make python applications that leverage AI/ML technologies for smarter solutions.",
                delay: 0.3
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="group space-y-4 border-2 border-zinc-400 rounded-2xl p-6 
                          bg-zinc-900/40 hover:bg-zinc-900/70 
                          hover:shadow-lg hover:shadow-zinc-700/20 
                          transition-all duration-300"
              >
                <h3 className="text-zinc-300 font-semibold tracking-wider text-2xl uppercase 
                              group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 italic group-hover:text-zinc-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start w-full" >
            <Quote size={65} className='-scale-x-100' />
            <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-10 mt-3">
              I’m a hypocrite, but I wanna thrive till death. Innovation isn’t everything — my keen goal is to observe within, then do it.
            </p>
          </motion.div>
            <div className="flex justify-center">
              <Link
                to="/about"
                className="minimal-button-outline text-2xl px-6 py-2 rounded-full border border-zinc-400 text-zinc-300 hover:text-white hover:border-white transition-all duration-300" >
                Who am I ?
                <ArrowRight className="ml-2 w-4 h-4 inline-block transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
