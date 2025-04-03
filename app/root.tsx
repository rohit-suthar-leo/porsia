import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import styles from "./styles/global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { image } from "framer-motion/client";
import { HiOutlineArrowRight } from "react-icons/hi";

export const meta = () => {
  const title = "Porsia - Building Your Online Presence with AI Power";
  const description = "Build an online presence that attracts clients. AI-powered website builder for coaches, freelancers, and professionals. Create a personal brand website that converts visitors into leads.";
  const image = "https://myporsia.com/images/porsia-thumbnail.png"; // Use absolute URL

  return [
    // Primary SEO Title & Description
    { title },
    { name: "description", content: description },

    // Indexing Directives
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "google", content: "notranslate" },

    // Open Graph Tags
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://myporsia.com" },
    { property: "og:site_name", content: "Porsia" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:type", content: "image/png" },

    // Twitter Cards
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:domain", content: "myporsia.com" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },

    // Keywords
    { 
      name: "keywords", 
      content: "build online presence to get clients, personal website for lead generation, AI portfolio website for sales, create website to attract clients, convert visitors into leads, get coaching clients through website, professional website that sells, digital presence for personal brand" 
    },

    // Additional Meta Tags
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#ffffff" },
    { name: "format-detection", content: "telephone=no" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { name: "apple-mobile-web-app-title", content: "Porsia" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  // Primary large favicon
  { 
    rel: "icon",
    type: "image/png",
    href: "/android-chrome-512x512.png",
    sizes: "512x512"
  },
  // Web app manifest for PWA support
  { rel: "manifest", href: "/site.webmanifest" },
  // Remove smaller sizes to force browser to use large one
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
];

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="max-w-lg w-full text-center">
            <h1 className="text-9xl font-bold text-brand-blue mb-4">404</h1>
            <h2 className="text-3xl font-medium text-gray-900 mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="space-y-4">
              <Link 
                to="/features" 
                className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-xl hover:bg-blue-700 transition-all w-full justify-center"
              >
                Features
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-xl hover:bg-blue-700 transition-all w-full justify-center"
              >
                Contact Us
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link 
                to="/privacy" 
                className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-xl hover:bg-blue-700 transition-all w-full justify-center"
              >
                Privacy Policy
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-all w-full justify-center"
              >
                Back to Home
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-3xl font-medium text-gray-900 mb-6">Something went wrong</h1>
        <p className="text-gray-600 mb-8">
          We're sorry, but something went wrong. Please try again later.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-xl hover:bg-blue-700 transition-all"
        >
          Back to Home
          <HiOutlineArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Porsia",
      "url": "https://myporsia.com",
      "description": "AI-powered platform to build personal portfolio websites that convert visitors into clients.",
      "logo": "https://myporsia.com/images/porsia-thumbnail.png"
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Porsia AI Website Builder",
      "description": "AI-powered website builder for professionals to create high-converting online presence",
      "image": "https://myporsia.com/images/porsia-thumbnail.png",
      "brand": {
        "@type": "Brand",
        "name": "Porsia"
      },
      "offers": {
        "@type": "Offer",
        "price": "20000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://myporsia.com",
      "potentialAction": {
        "@type": "ReadAction",
        "target": "https://myporsia.com/#benefits"
      }
    }
  ];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
       />
        
      </head>
      <body className="bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Outlet />
        </main>
        <Footer />
        {/* <Link to="/blog">Blog</Link> */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script async src="//embed.typeform.com/next/embed.js"></script>
      </body>
    </html>
  );
}
