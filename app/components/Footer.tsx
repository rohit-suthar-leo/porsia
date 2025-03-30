import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
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
            </div>
            <p className="text-gray-600 text-sm">
              AI-powered portfolio creation —<br />
              currently in early access
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-3">
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
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400">About</span>
              </li>
              <li>
                <span className="text-gray-400">Blog</span>
              </li>
              <li>
                <span className="text-gray-400">Careers</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
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
      </div>
    </footer>
  );
} 