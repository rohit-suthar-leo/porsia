import { Link, useLocation } from '@remix-run/react';
import { useEffect } from 'react';
import { animate } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();

  const smoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition - navbarHeight;

    animate(startPosition, startPosition + distance, {
      duration: 0.6,
      onUpdate: (value) => window.scrollTo(0, value),
      ease: [0.32, 0.72, 0, 1] // More natural easing
    });
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      smoothScroll(id);
    }
  }, [location]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScroll(id);
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative flex items-center">
                <img 
                  src="/images/logo.png" 
                  alt="Porsia Logo" 
                  className="h-20 w-auto translate-y-2.5"
                />
                <div className="flex items-center -ml-7">
                  <span className="text-brand-blue text-3xl font-semibold">POR</span>
                  <span className="text-brand-purple text-3xl font-semibold">SIA</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#features"
              onClick={(e) => handleClick(e, 'features')}
              className="text-gray-600 hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleClick(e, 'how-it-works')}
              className="text-gray-600 hover:text-gray-900"
            >
              How It Works
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleClick(e, 'benefits')}
              className="text-gray-600 hover:text-gray-900"
            >
              Benefits
            </a>
            <a
              href="#vision"
              onClick={(e) => handleClick(e, 'vision')}
              className="text-gray-600 hover:text-gray-900"
            >
              Vision
            </a>
            <a
              href="#contact-form"
              onClick={(e) => handleClick(e, 'contact-form')}
              className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 