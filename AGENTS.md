## Architecture
- All site copy and image IDs live in src/lib/content.ts; pages read from it so content stays in one source of truth.
- Service pages use one dynamic route (products.$slug) with per-service layout variants, avoiding duplicated page files.
