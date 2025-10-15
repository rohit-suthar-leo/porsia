import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import Hero from "~/components/Hero";
import Features from '~/components/Features';
import HowItWorks from "~/components/HowItWorks";
import Testimonials from "~/components/Testimonials";
import GetStarted from "~/components/GetStarted";

export const meta: MetaFunction = () => {
  return [
    { title: "MyPorsia - Build Your Professional Website in 5 Minutes | Only ₹50/month" },
    { description: "Stop paying ₹50,000 to designers. AI builds your website in 5 minutes for ₹50/month. Join 2,847+ Indian professionals online. Free 7-day trial." },
    { name: "keywords", content: "website builder india, cheap website, ai website builder, ₹50 website, small business website, professional website india" },
    { property: "og:title", content: "MyPorsia - Build Your Website in 5 Minutes | ₹50/month" },
    { property: "og:description", content: "97% cheaper than competitors. AI builds professional websites in 5 minutes. Free 7-day trial." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://myporsia.com" },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  // Get the current origin (works in both dev and production)
  const url = new URL(request.url);
  const apiUrl = `${url.origin}/api/waitlist`;

  // Forward to API endpoint
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      profession: formData.get('profession'),
      timestamp: formData.get('timestamp'),
    }),
  });

  const data = await response.json();

  if (data.success) {
    // Return success data - don't redirect here, let the component handle it
    return json({ success: true, message: data.message });
  } else {
    return json({ error: data.error || 'Failed to join waitlist' }, { status: 400 });
  }
};

export default function Index() {
  return (
    <main>
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="waitlist">
        <GetStarted />
      </section>
    </main>
  );
} 