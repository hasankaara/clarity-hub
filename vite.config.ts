// @lovable.dev/vite-tanstack-config injects target-appropriate plugins.
// Setting target: "vercel" makes TanStack Start emit a Vercel-compatible
// build output (.vercel/output/...) that Vercel auto-detects on deploy.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    target: "vercel",
  },
});
