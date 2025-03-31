import { 
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlineMail
} from "react-icons/hi";

export default function GetStarted() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      });

      if (response.ok) {
        form.reset(); // Clear all fields after successful submission
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="relative bg-white pt-6 pb-12" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="mb-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100">
              <HiOutlineSparkles className="w-6 h-6 text-brand-blue" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Ready to Get Started?</h2>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            Join our early access program and start building your professional presence today.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <form 
              action="https://getform.io/f/bxowgkwa"
              method="POST"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Tell us about your needs..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-brand-blue text-white rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center"
              >
                Send Message
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100">
                <HiOutlineMail className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Have questions? We're here to help. Send us a message and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@myporsia.com" className="flex items-center text-brand-blue hover:text-blue-700 transition-colors">
                <span>hello@myporsia.com</span>
                <HiOutlineArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 