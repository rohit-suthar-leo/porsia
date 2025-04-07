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
import ProductHuntBadge from "./components/ProductHuntBadge";
import { image } from "framer-motion/client";
import { HiOutlineArrowRight } from "react-icons/hi";
import NotFound from "./routes/404";

export const meta = () => {
  const title = "Porsia - Building Your Online Presence with AI Power";
  const description = "Build an online presence that attracts clients. AI-powered website builder for coaches, freelancers, and professionals. Create a personal brand website that converts visitors into leads.";
  const image = "https://myporsia.com/images/porsia-thumbnail.png";
  const logo = "https://myporsia.com/images/logo.png";

  return [
    // Primary SEO Title & Description
    { title },
    { name: "description", content: description },

    // Indexing Directives
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { name: "googlebot", content: "index, follow, max-image-preview:large" },
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
    { property: "og:logo", content: logo },

    // Twitter Cards
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:domain", content: "myporsia.com" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },

    // Image Meta Tags
    { name: "image", content: image },
    { itemProp: "image", content: image },

    // Keywords
    { 
      name: "keywords", 
      content: "website builder, non-technical website creation, platform for coaches, platform for consultants, small business online presence, personal brand building, drag-and-drop website editor, built-in marketing tools, automated SEO practices, lead generation platform, content management system, user-friendly website design, online credibility tools, code-free website design, integrated online marketing, online presence development, branding for small businesses, DIY website design, website creation for non-techies, online brand growth" 
    },

    // Additional Meta Tags
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#ffffff" },
    { name: "msapplication-TileColor", content: "#ffffff" },
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
  // Apple Touch Icon
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  // Standard favicons
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  // Microsoft Tiles
  { rel: "msapplication-TileImage", href: "/android-chrome-192x192.png" }
];

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <Meta />
            <Links />
          </head>
          <body className="bg-gray-50">
            <Navbar />
            <NotFound />
            <Footer />
            <ProductHuntBadge />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </body>
        </html>
      );
    }
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-50">
        <Navbar />
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
        <Footer />
        <ProductHuntBadge />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
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
      "logo": {
        "@type": "ImageObject",
        "url": "https://myporsia.com/images/logo.png",
        "width": "512",
        "height": "512",
        "caption": "Porsia Logo"
      },
      "image": [
        "https://myporsia.com/images/porsia-thumbnail.png",
        "https://myporsia.com/images/logo.png"
      ],
      "sameAs": [
        "https://www.instagram.com/porsiaofficial/",
        "https://www.linkedin.com/company/porsia"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Porsia AI Website Builder",
      "description": "AI-powered website builder for professionals to create high-converting online presence",
      "image": [
        "https://myporsia.com/images/porsia-thumbnail.png",
        "https://myporsia.com/images/logo.png"
      ],
      "brand": {
        "@type": "Brand",
        "name": "Porsia",
        "logo": {
          "@type": "ImageObject",
          "url": "https://myporsia.com/images/logo.png",
          "width": "512",
          "height": "512"
        }
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
      },
      "publisher": {
        "@type": "Organization",
        "name": "Porsia",
        "logo": {
          "@type": "ImageObject",
          "url": "https://myporsia.com/images/logo.png",
          "width": "512",
          "height": "512"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": "https://myporsia.com/images/logo.png",
      "name": "Porsia Logo",
      "description": "Official logo of Porsia - AI-powered website builder",
      "encodingFormat": "image/png",
      "height": "512",
      "width": "512"
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup[0])
          }}
        />
      </head>
      <body className="bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Outlet />
        </main>
        <Footer />
        <ProductHuntBadge />
        {/* <Link to="/blog">Blog</Link> */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script async src="//embed.typeform.com/next/embed.js"></script>
      </body>
    </html>
  );
}
