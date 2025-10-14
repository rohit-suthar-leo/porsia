import { useFetcher, useNavigate } from "@remix-run/react";
import { useEffect } from "react";

export default function GetStarted() {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const isSubmitting = fetcher.state === "submitting";

  useEffect(() => {
    if (fetcher.data?.success) {
      alert('🎉 You\'re on the waitlist!\n\nWe\'ll notify you as soon as we launch. Get ready to build your professional website in just 5 minutes.\n\nThank you for joining us!');
      // Redirect to home page after user clicks OK on the alert
      navigate('/');
    } else if (fetcher.data?.error) {
      alert('Error: ' + fetcher.data.error + '\n\nPlease try again or contact us at hello@myporsia.com');
    }
  }, [fetcher.data, navigate]);

  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 py-24" id="waitlist">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-block mb-6 px-4 py-2 bg-orange-50 rounded-full border border-orange-200">
              <span className="text-orange-700 font-semibold text-sm">⚡ Limited Early Access</span>
            </div>

            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Build Your Website <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">FREE</span>
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Join 2,847 professionals who stopped losing clients
            </p>
            <p className="text-gray-500">
              Get instant access • No credit card • Live in 5 minutes
            </p>
          </div>

          <fetcher.Form
            method="post"
            className="max-w-lg mx-auto space-y-5"
          >
            <input type="hidden" name="timestamp" value={new Date().toISOString()} />
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Your Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Rajesh Kumar"
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 text-lg focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Your Profession *</label>
              <input
                type="text"
                name="profession"
                placeholder="Yoga Instructor"
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 text-lg focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="rajesh@example.com"
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 text-lg focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-xl hover:opacity-90 transition-all shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? '⏳ Joining...' : '✨ Get FREE Access Now'}
            </button>

            <p className="text-center text-sm text-gray-500">
              Free 7-day trial • No credit card • ₹50/month after trial
            </p>
          </fetcher.Form>

          <div className="mt-10 pt-10 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">2,847+</div>
                <div className="text-sm text-gray-600">Professionals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">5 min</div>
                <div className="text-sm text-gray-600">Setup Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">₹50</div>
                <div className="text-sm text-gray-600">Per Month</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-white">
          <p className="mb-4">Questions? We're here to help</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a href="mailto:hello@myporsia.com" className="hover:underline">hello@myporsia.com</a>
            <a href="https://www.instagram.com/porsiaofficial/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            <a href="https://www.linkedin.com/company/porsia" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}
