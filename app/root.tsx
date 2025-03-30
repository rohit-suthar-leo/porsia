import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const meta = () => {
  return [
    { title: "Porsia - Create Your Portfolio with AI Power" },
    { name: "description", content: "Create your portfolio with AI power" },
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

export default function App() {
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
        <div className="pt-16">
          <Outlet />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script async src="//embed.typeform.com/next/embed.js"></script>
      </body>
    </html>
  );
}
