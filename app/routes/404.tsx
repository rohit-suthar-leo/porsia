import { Link } from "@remix-run/react";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function NotFound() {
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
            to="/#features" 
            className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-xl hover:bg-blue-700 transition-all w-full justify-center"
          >
            Features
            <HiOutlineArrowRight className="ml-2 w-5 h-5" />
          </Link>
          
          <Link 
            to="/#contact-form" 
            className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-xl hover:bg-blue-700 transition-all w-full justify-center"
          >
            Contact Us
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