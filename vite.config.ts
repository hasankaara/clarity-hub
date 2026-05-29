// Deploy target: Vercel as a static SPA.
// - `cloudflare: false` disables the Cloudflare Workers plugin auto-injected
//   by @lovable.dev/vite-tanstack-config.
// - `tanstackStart.spa.enabled` makes TanStack Start build a static client
//   bundle with an index.html shell — no Node/Worker SSR runtime required.
// - `tanstackStart.prerender.enabled` statically renders all routes at
//   build time so each URL has its own HTML (good for SEO).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: { enabled: true },
    prerender: { enabled: true, crawlLinks: true },
  },
});
