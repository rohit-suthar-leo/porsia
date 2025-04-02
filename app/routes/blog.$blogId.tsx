import type { MetaFunction } from "@remix-run/node";
import { useParams, Link } from "@remix-run/react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useEffect, useState } from "react";

export const meta: MetaFunction = ({ params }) => {
  const blogPosts = {
    '1': {
      title: "Why Your Online Presence Matters",
      description: "Your portfolio isn't just a showcase — it's your silent salesperson. Learn why showing up online the right way can boost your credibility, attract clients, and grow your income.",
      tags: ["Online Presence", "Personal Branding", "Professional Growth", "Digital Marketing", "Lead Generation", "Client Trust", "Portfolio Website"]
    },
    'fitness-coach-portfolio': {
      title: "Why Fitness Coaches Need a Portfolio (Now More Than Ever)",
      description: "In today's digital-first world, building a powerful online presence isn't optional — it's essential. Learn why fitness coaches need a professional portfolio to turn followers into clients.",
      tags: ["Personal Branding", "Online Presence", "Fitness Business", "Lead Generation", "Client Trust", "Fitness Marketing", "Coach Website"]
    }
  };

  const post = blogPosts[params.blogId as keyof typeof blogPosts];

  if (!post) {
    return [
      { title: "Blog Post Not Found - Porsia" },
      { name: "description", content: "The requested blog post could not be found." }
    ];
  }

  return [
    { title: `${post.title} - Porsia Blog` },
    { name: "description", content: post.description },
    { name: "keywords", content: post.tags.join(", ") },
    
    // Open Graph
    { property: "og:type", content: "article" },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.description },
    
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: post.title },
    { name: "twitter:description", content: post.description }
  ];
};

export default function BlogPost() {
  const { blogId } = useParams();
  const [activeSection, setActiveSection] = useState("");

  const blogPosts = {
    '1': {
      title: "Why Your Online Presence Matters",
      date: 'March 30, 2024',
      author: 'Rohit Suthar',
      role: 'Founder',
      readTime: '5 min read',
      tags: ["Online Presence", "Personal Branding", "Professional Growth", "Digital Marketing"],
      content: {
        intro: "Your portfolio isn't just a showcase — it's your silent salesperson...",
        sections: [
          // ... existing sections for first blog ...
        ]
      }
    },
    'fitness-coach-portfolio': {
      title: "Why Fitness Coaches Need a Portfolio (Now More Than Ever)",
      date: 'March 30, 2024',
      author: 'Rohit Suthar',
      role: 'Founder',
      readTime: '4 min read',
      tags: ["Fitness Coaching", "Personal Branding", "Portfolio", "Business Growth"],
      content: {
        intro: `In today's digital-first world, building a powerful online presence isn't optional — it's essential. And if you're a fitness coach, your personal brand is your business. While social media is a great starting point, it's not enough to turn interest into trust — or followers into paying clients.`,
        sections: [
          {
            id: 'first-impressions',
            title: "First Impressions Matter — Own Yours",
            content: `You've worked hard to earn your certifications, coach transformations, and build real impact. But when someone searches for your name or checks your profile, what do they find?

            A clean, well-structured portfolio website helps:
            • Showcase your credentials and experience
            • Display client transformations and testimonials with clarity
            • Tell your story, your values, and why you're different — on your terms

            This is your online home. Not an algorithm's playground.`
          },
          {
            id: 'build-trust',
            title: "Build Trust at Scale",
            content: `People buy from coaches they trust. A portfolio adds legitimacy. It proves:
            • You're serious about your craft
            • You've delivered real results
            • You're invested in your clients' journeys — and your own

            By including before-after visuals, client feedback, and your personal journey, you instantly move from "just another coach on Instagram" to a credible professional.`
          },
          {
            id: 'capture-leads',
            title: "Capture Leads Automatically",
            content: `A portfolio isn't just for looks — it works for you 24/7. Add simple features like:
            • Contact forms
            • Consultation booking links
            • Lead magnets (like free PDFs or nutrition guides)

            And you'll turn curious visitors into real leads — even while you sleep.`
          },
          {
            id: 'stand-out',
            title: "Stand Out in a Crowded Market",
            content: `Thousands of coaches are competing for attention online. But only a few actually invest in professional presence. Your website helps you rise above the noise — with better branding, clearer messaging, and a focused client journey.`
          },
          {
            id: 'future-proof',
            title: "Future-Proof Your Business",
            content: `Instagram trends fade. Algorithms shift. But your website stays with you.

            A portfolio is your asset, not a borrowed audience. It grows with you — from solopreneur to full-fledged coaching brand. Whether you're launching products, hosting webinars, or scaling your services — it's your HQ.`
          },
          {
            id: 'conclusion',
            title: "Ready to Build Authority That Converts?",
            content: `A portfolio doesn't just make you look professional — it turns attention into action. If you're serious about growing your fitness business, it's time to step beyond just social and build your digital foundation.`
          }
        ]
      }
    }
  };

  const currentBlog = blogPosts[blogId as keyof typeof blogPosts];
  
  if (!currentBlog) {
    return <div>Blog post not found</div>;
  }

  // Update the table of contents
  const tableOfContents = [
    { id: "intro", title: "Introduction" },
    { id: "first-impressions", title: "First Impressions Matter" },
    { id: "build-trust", title: "Build Trust at Scale" },
    { id: "capture-leads", title: "Capture Leads Automatically" },
    { id: "stand-out", title: "Stand Out in the Market" },
    { id: "future-proof", title: "Future-Proof Your Business" },
    { id: "conclusion", title: "Conclusion" }
  ];

  // Update the scroll function to target correct positions
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust this value based on your header height
      let elementPosition;

      if (id === "intro") {
        // For intro, scroll to the top of the content
        const contentTop = document.querySelector('.prose')?.getBoundingClientRect().top ?? 0;
        elementPosition = contentTop;
      } else {
        // For other sections, scroll to just above their titles
        elementPosition = element.getBoundingClientRect().top - 50; // Extra offset for titles
      }

      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Update the scroll spy to match this behavior
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id || 
              (entry.target.tagName === 'SECTION' ? 'intro' : entry.target.id);
            if (currentId) {
              setActiveSection(currentId);
            }
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: "-100px 0px -50% 0px"
      }
    );

    // Observe the intro section and all headings
    const introSection = document.querySelector('.prose');
    if (introSection) observer.observe(introSection);

    tableOfContents.forEach(({ id }) => {
      if (id !== "intro") {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/blog"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <HiOutlineArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            {/* Tags */}
            <div className="flex gap-2 mb-8">
              {currentBlog.tags.map((tag, index) => (
                <span 
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm ${
                    index % 2 === 0
                      ? "bg-brand-purple/10 text-brand-purple"
                      : "bg-brand-blue/10 text-brand-blue"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/images/rohit-suthar.png"
                alt={currentBlog.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">{currentBlog.author}</span>
                  <span className="text-brand-purple">@Porsia</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{currentBlog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{currentBlog.readTime}</span>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg">
              <section id="intro">
                <h1 className="text-3xl font-medium mb-6">
                  {currentBlog.title}
                </h1>
                <p>{currentBlog.content.intro}</p>
              </section>

              {currentBlog.content.sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2 className="text-2xl font-medium mt-12 mb-6">
                    {section.title}
                  </h2>
                  <div className="whitespace-pre-line">{section.content}</div>
                </section>
              ))}

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 p-8 rounded-xl mt-12">
                <h3 className="text-xl font-medium mb-4">Ready to Build Your Presence?</h3>
                <p className="mb-6">
                  Want to be one of our early users? Let's build your presence together.
                </p>
                <a
                  href="https://calendly.com/rohit-myporsia/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Book a Free Strategy Call
                </a>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="hidden lg:block w-64">
            <div className="sticky top-24">
              <h3 className="text-sm font-medium text-gray-900 mb-4">ON THIS PAGE</h3>
              <nav className="space-y-3">
                <a
                  href="#intro"
                  onClick={(e) => scrollToSection(e, "intro")}
                  className={`block text-sm transition-colors ${
                    activeSection === "intro"
                      ? "text-brand-purple font-medium"
                      : "text-gray-600 hover:text-brand-blue"
                  }`}
                >
                  Introduction
                </a>
                {currentBlog.content.sections.map(({ id, title }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className={`block text-sm transition-colors ${
                      activeSection === id
                        ? "text-brand-purple font-medium"
                        : "text-gray-600 hover:text-brand-blue"
                    }`}
                  >
                    {title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 