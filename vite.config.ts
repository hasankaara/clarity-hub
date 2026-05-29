// Deploy target: Vercel.
// - `cloudflare: false` disables the Cloudflare Workers plugin that
//   @lovable.dev/vite-tanstack-config auto-injects during build.
// - `tanstackStart.target: "vercel"` makes TanStack Start emit a
//   Vercel-compatible build output (.vercel/output/...) that Vercel
//   auto-detects on deploy.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
});
