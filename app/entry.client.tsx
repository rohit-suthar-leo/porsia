import { RemixBrowser } from "@remix-run/react";
import { startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { LazyMotion, domAnimation } from "framer-motion";

startTransition(() => {
  hydrateRoot(
    document,
    <LazyMotion features={domAnimation}>
      <RemixBrowser />
    </LazyMotion>
  );
}); 