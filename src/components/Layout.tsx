import { Link, Outlet } from 'react-router-dom';
import DockNavigation from './DockNavigation';

const Layout = () => {

  return (
    <div className="min-h-screen bg-zinc-900 text-white relative">
      {/* Minimal Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <span className="text-white font-semibold text-lg">Yash Varma</span>
              <span className="text-zinc-500 text-sm hidden sm:block">Full-Stack Developer</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Dock Navigation for Mobile */}
      <DockNavigation />

      {/* Minimal Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="text-center text-zinc-500 text-sm">
            © {new Date().getFullYear()} Yash Varma. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
