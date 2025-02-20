import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                {/* <span className="text-2xl font-bold text-gray-900">Portfolio</span>
                 */}
                 <img width="50" className="text-2xl font-bold bg-gray-900 rounded-full" src="./name.png" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block pl-3 pr-4 py-2 text-base font-medium ${
                    isActive(item.path)
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center space-x-6">
            <a target='_blank' href="https://linkedin.com/in/yash-varma-/" className="text-gray-400 hover:text-gray-500">
              <Linkedin size={24} />
            </a>
            <a target='_blank' href="https://github.com/YASH2204V/" className="text-gray-400 hover:text-gray-500">
              <Github size={24} />
            </a>
            <a target='_blank' href="mailto:yash.v220104@gmail.com" className="text-gray-400 hover:text-gray-500">
              <Mail size={24} />
            </a>
          </div>
          <p className="mt-4 text-center text-gray-400">
            ©{new Date().getFullYear()} Yash Varma | All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;