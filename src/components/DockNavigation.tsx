import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Code, 
  Briefcase, 
  BookOpen, 
  Award,
  Brain
} from 'lucide-react';

const DockNavigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Skills', path: '/skills', icon: Code },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Experience', path: '/experience', icon: BookOpen },
    { name: 'Certifications', path: '/certifications', icon: Award },
    { name: 'For Curious', path: '/for-curious', icon: Brain },
    { name: 'About', path: '/about', icon: User }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
  <motion.div
    initial={{ y: 100, opacity: 0, x: '-50%' }}
    animate={{ y: 0, opacity: 1, x: '-50%' }}
    transition={{ delay: 1, duration: 0.8 }}
    className="fixed bottom-6 lg:bottom-12 left-1/2 z-50">
      <div className="dock-nav rounded-2xl px-4 py-3">
        <div className="flex items-center space-x-2">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`dock-item flex items-center justify-center w-10 h-10 ${
                  active ? 'active' : ''
                }`}
              >
                <IconComponent 
                  size={18} 
                  className={`transition-colors ${
                    active ? 'text-white' : 'text-zinc-400'
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default DockNavigation;
