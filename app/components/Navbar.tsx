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

          {/* Desktop menu */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link>
            <Link to="/#vision" className="text-gray-600 hover:text-gray-900">Vision</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/#contact-form" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 