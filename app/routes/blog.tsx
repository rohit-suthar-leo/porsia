import { Link } from "@remix-run/react";
import { HiOutlineSparkles, HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

export default function Blog() {
  const posts = [
    {
      id: '1',
      title: "How it started vs. how it's going",
      excerpt: "A short personal history as it relates to design and development, and how I've found value in the cross-section between both disciplines.",
      date: 'May 5, 2023',
      category: 'Design',
      image: '/images/blog/post-1.jpg'
    },
    // Add more blog posts here
  ];

  return (
    <div className="relative bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <HiOutlineArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header Card */}
        <div className="mb-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100">
              <HiOutlineSparkles className="w-6 h-6 text-brand-blue" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">Blog</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            Thoughts on design, development, and building in public.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              {post.image && (
                <div className="mb-6 rounded-2xl overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-brand-purple">{post.category}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="flex items-center text-brand-blue">
                  Read more
                  <HiOutlineArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 