import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const links = [
    { name: 'IntelliView AI', url: 'https://intelliviewai.myprod.in/' },
    { name: 'Axoryn', url: 'https://axoryn.myprod.in/' },
    { name: 'Glorious Tales', url: 'https://glorioustales.myprod.in/' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 z-[100] w-80 sm:w-96 p-6 rounded-xl bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 shadow-2xl animate-flash-glow"
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-5 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close popup"
          >
            <X size={20} />
          </button>
          
          <div className="mb-5 pr-6">
            <h3 className="text-lg font-semibold text-white tracking-tight mb-1.5">
              Explore My Projects
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Discover the latest cutting-edge applications and creative projects.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-lg bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800/80 hover:border-zinc-500 transition-all duration-300"
              >
                <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {link.name}
                </span>
                <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;
