// Shared Vite/TanStack config already includes:
//   - TanStack Start, React, Tailwind, tsconfig paths
//   - Nitro (build), VITE_* env injection, @ path alias
//   - React/TanStack dedupe and error logger plugins
// Pass additional options via defineConfig({ vite: { ... } }) when needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (SSR error wrapper).
    server: { entry: "server" },
  },
});
