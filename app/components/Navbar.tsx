import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-brand-blue">
              POR<span className="text-brand-purple">SIA</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link>
            <Link to="/#vision" className="text-gray-600 hover:text-gray-900">Vision</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/#contact-form" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <a
              href="https://calendly.com/rohit-myporsia/30min"
              target="_blank"
              rel="noopener noreferrer"
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