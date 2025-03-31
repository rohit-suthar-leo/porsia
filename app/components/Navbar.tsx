import { Link, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = [
      { id: 'how-it-works', threshold: 0.3 },
      { id: 'benefits', threshold: 0.3 },
      { id: 'vision', threshold: 0.3 }
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection('#' + entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.3,
      rootMargin: '-20% 0px -30% 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' && !activeSection;
    }
    if (path.startsWith('/#')) {
      return activeSection === path.substring(1);
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-brand-blue">POR</span>
              <span className="text-brand-purple">SIA</span>
            </span>
          </Link>

          {/* Center Navigation - Pill Container */}
          <div className="bg-gray-100 rounded-full px-2 py-1 shadow-sm">
            <div className="flex items-center relative">
              {[
                { path: '/', label: 'Home' },
                { path: '/#how-it-works', label: 'Overview' },
                { path: '/#benefits', label: 'Benefits' },
                { path: '/#vision', label: 'Vision' },
                { path: '/blog', label: 'Blog' }
              ].map(({ path, label }) => (
                <Link 
                  key={path}
                  to={path} 
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all ${
                    isActive(path)
                      ? 'text-gray-900 bg-white rounded-full shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <Link 
            to="/#contact-form" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 