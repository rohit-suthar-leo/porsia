import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="relative flex items-center">
                <img 
                  src="/images/logo.png" 
                  alt="Porsia Logo" 
                  className="h-16 md:h-20 w-auto translate-y-2.5"
                />
                <div className="flex items-center -ml-7">
                  <span className="text-2xl md:text-3xl font-semibold text-brand-blue">POR</span>
                  <span className="text-2xl md:text-3xl font-semibold text-brand-purple">SIA</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              AI-powered portfolio creation —<br />
              currently in early access
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-sm md:text-base font-medium mb-2 md:mb-4">Product</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <span className="text-gray-400">Features</span>
              </li>
              <li>
                <span className="text-gray-400">Pricing</span>
              </li>
              <li>
                <span className="text-gray-400">Roadmap</span>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-sm md:text-base font-medium mb-2 md:mb-4">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <span className="text-gray-400">About</span>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-600 hover:text-brand-purple transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-gray-400">Careers</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-sm md:text-base font-medium mb-2 md:mb-4">Legal</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <span className="text-gray-400">Privacy</span>
              </li>
              <li>
                <span className="text-gray-400">Terms</span>
              </li>
              <li>
                <span className="text-gray-400">Security</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs md:text-sm">
            Copyright © 2025 porsia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 