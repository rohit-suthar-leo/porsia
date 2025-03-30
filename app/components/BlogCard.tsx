import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    image: string;
    handle: string;
  };
}

export default function BlogCard({ id, title, excerpt, date, readTime, image, author }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
    >
      <Link to={`/blog/${id}`} className="block">
        <h2 className="text-3xl font-medium text-brand-purple mb-4">
          {title}
        </h2>
        
        <p className="text-gray-600 mb-6">
          {excerpt}
        </p>

        <div className="flex items-center gap-3 mb-6">
          <Link to="/blog" className="text-brand-blue hover:text-brand-purple transition-colors">
            Read More →
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <img 
            src={author.image} 
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">{author.name}</span>
              <span className="text-brand-purple">@{author.handle}</span>
            </div>
            <div className="text-sm text-gray-500">
              {date}
            </div>
          </div>
        </div>

        <div className="relative mt-8 rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </Link>
    </motion.div>
  );
} 