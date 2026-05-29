## Goal

Make the site deployable on Vercel. The project is currently configured for Cloudflare Workers (via `@cloudflare/vite-plugin` and a custom `src/server.ts` wrapper), which is why Vercel deploys are failing — Vercel doesn't know how to run a Cloudflare Worker bundle.

## Plan

### 1. Switch the build target to Vercel

- Update `vite.config.ts` to set the TanStack Start target to `"vercel"` instead of relying on the default Cloudflare build. With `@lovable.dev/vite-tanstack-config`, pass `tanstackStart: { target: "vercel" }` and drop the custom `server.entry` override (Vercel uses its own serverless entry, not our Cloudflare wrapper).
- This makes TanStack Start emit a Vercel-compatible build output (`.vercel/output/...`) that Vercel's build pipeline auto-detects.

### 2. Remove Cloudflare-only pieces from the build

- Remove `@cloudflare/vite-plugin` from `package.json` dependencies (the Lovable preset auto-injects it only when targeting Cloudflare).
- Delete `wrangler.jsonc` if present (Cloudflare-only config).
- Keep `src/server.ts`, `src/lib/error-capture.ts`, and `src/lib/error-page.ts` for local reference but stop wiring them as the SSR entry — Vercel's adapter handles its own SSR error path.

### 3. Add minimal Vercel config

- Add a `vercel.json` with `{ "framework": null }` (or omit entirely) so Vercel uses the build output directory produced by TanStack Start without trying to guess a framework.
- No environment variables are required for this site (no Cloud / Supabase usage yet).

### 4. Verify

- Run `bun run build` locally after the changes to confirm it produces a `.vercel/output/` directory.
- On Vercel, the project should auto-detect the output and serve all 5 routes (`/`, `/about`, `/programs`, `/pricing`, `/contact`) with SSR.

## Out of scope

- No design or content changes.
- No backend / Lovable Cloud changes.
- Keeping a parallel Cloudflare deploy working — this plan moves the project entirely to Vercel. If you also want to keep Cloudflare as an option, let me know and I'll make the target configurable.

## Note

If you already tried deploying to Vercel and saw a specific error in the Vercel build log, paste it here — it'll help me confirm this is the right fix vs. something more specific (e.g., a missing env var or a Node-version mismatch).
