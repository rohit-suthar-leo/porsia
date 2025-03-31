import { Link } from "@remix-run/react";

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
      { text: "Roadmap", href: "/#roadmap" }
    ]
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "/about" },
      { text: "Blog", href: "/blog" },
      { text: "Careers", href: "/careers" }
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
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                <span className="text-brand-blue">POR</span>
                <span className="text-brand-purple">SIA</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              AI-powered portfolio creation —<br />
              currently in early access
            </p>
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
                      className="text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500">
            © 2024 Porsia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 