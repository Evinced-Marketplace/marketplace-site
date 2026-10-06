# marketplace.evinced.com

Source for [marketplace.evinced.com](https://marketplace.evinced.com): policies, guides and tips for the products in the Evinced Marketplace.

Built with [Astro Starlight](https://starlight.astro.build) and the [starlight-blog](https://github.com/HiDeoo/starlight-blog) plugin. Every push to `main` publishes to GitHub Pages through `.github/workflows/site.yml`; every pull request must build.

## Layout

| Path | What lives there |
| --- | --- |
| `src/content/docs/policies/<product>/` | Privacy, security and terms pages, one folder per product |
| `src/content/docs/guides/<product>/` | Setup and how-to guides, one folder per product |
| `src/content/docs/blog/` | Tips and release notes. Each post needs a `date` in its frontmatter |
| `src/assets/guides/<product>/<assistant>/` | Guide screenshots, imported by the guide pages and optimised at build time |
| `src/components/Figure.astro` | Shows a guide screenshot at a set width, with an optional caption |
| `src/styles/evinced.css` | Evinced brand colours and fonts, and the guide screenshot styles |
| `astro.config.mjs` | Site settings and the sidebar. Add new policy and guide pages to the sidebar here |

## Work on it

```bash
npm ci
npm run dev       # local preview at http://localhost:4321
npm run build     # the same build CI runs
```

## Rules

The rules for changing the site live in [`CLAUDE.md`](CLAUDE.md).
