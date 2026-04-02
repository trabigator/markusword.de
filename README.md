# [markusword.de](https://www.markusword.de)

This is the source code for my personal website.

Built with Astro and deployed on Vercel.

## Tech Stack

- **Astro** — static site framework
- **Vercel** — hosting + CI/CD (automatic deployments on git push)
- **Content Collections** — type-safe content management for blog posts

## Project Structure

```
.
├── src/
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── about.astro         # About page
│   │   ├── imprint.astro       # Legal imprint
│   │   ├── posts.astro         # Full post archive
│   │   ├── search.astro        # Search page
│   │   ├── rss.xml.ts          # RSS feed (generated at build)
│   │   ├── sitemap.xml.ts      # Sitemap (generated at build)
│   │   └── post/
│   │       └── [...slug].astro # Dynamic post route
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── content/
│       └── posts/              # Blog posts (Markdown + frontmatter)
├── public/
│   └── ...
├── astro.config.mjs
└── package.json
```

## Writing Posts

1. Create a new `.md` file inside `src/content/posts/YYYY/` (create the year directory if it doesn't exist).
2. Copy an existing post for the frontmatter format.

**Required frontmatter:**
```yaml
---
headline: "Your Post Title"
date: "2026-03-18"
datetime: "2026-03-18T12:00:00Z"
readTime: "5 min read"
teaser: "A short description shown in post lists."
tags: ["tag1", "tag2"]
---
```

3. Commit and push — `rss.xml` and `sitemap.xml` are auto-generated at build time.

## Build Scripts

```bash
npm install          # Install dependencies
npm run dev          # Start local dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

## Deploying

Push to `main` — Vercel automatically builds and deploys. RSS and sitemap are generated during the build process.

## License

MIT — see [LICENSE](LICENSE).
