import { Link } from "@remix-run/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const sections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { text: "Features", href: "/#features" },
      { text: "Overview", href: "/#how-it-works" },
      { text: "Benefits", href: "/#benefits" },
      // { text: "Roadmap", href: "/#roadmap" }
    ]
  },
  {
    title: "Company",
    links: [
      // { text: "About", href: "/about" },
      { text: "Blog", href: "/blog" },
      // { text: "Careers", href: "/careers" }
    ]
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy", href: "/privacy" },
      { text: "Terms", href: "/terms" },
      { text: "Security", href: "/security" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                  PORSIA
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 mb-6">
              {/* <p className="text-gray-600">
                AI-powered portfolio creation
              </p> */}
              <div className="inline-block px-3 py-1 bg-purple-600 rounded-full">
                <p className="text-sm text-white font-medium">
                  Currently in early access
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/porsiaofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:text-brand-purple hover:bg-brand-purple/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/porsia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:text-brand-blue hover:bg-brand-blue/20 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-gray-900 font-medium">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link 
                      to={link.href}
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-sm">
              © {new Date().getFullYear()} Porsia. All rights reserved.
            </p>
            <p className="text-gray-700 text-sm">
              Made with ❤️ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 