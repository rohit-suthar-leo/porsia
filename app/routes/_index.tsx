import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import Features from '~/components/Features';
import HowItWorks from "~/components/HowItWorks";
import Benefits from "~/components/Benefits";
import Testimonials from "~/components/Testimonials";
import Vision from "~/components/Vision";
import GetStarted from "~/components/GetStarted";

export const meta: MetaFunction = () => {
  return [
    { title: "Porsia - Building Your Online Presence with AI Power" },
    { description: "Building Your Online Presence with AI Power" },
  ];
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
      <section id="benefits">
        <Benefits />
      </section>
      <section id="vision">
        <Vision />
      </section>
      <section id="contact-form">
        <GetStarted />
      </section>
    </main>
  );
} 