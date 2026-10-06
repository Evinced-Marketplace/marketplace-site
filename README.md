# marketplace.evinced.com

Source for [marketplace.evinced.com](https://marketplace.evinced.com): policies, guides and tips for the products in the Evinced Marketplace.

Built with [Astro Starlight](https://starlight.astro.build) and the [starlight-blog](https://github.com/HiDeoo/starlight-blog) plugin. Every push to `main` publishes to GitHub Pages through `.github/workflows/site.yml`; every pull request must build.

## Layout

| Path | What lives there |
| --- | --- |
| `src/content/docs/policies/<product>/` | Privacy, security and terms pages, one folder per product |
| `src/content/docs/guides/<product>/` | Setup and how-to guides, one folder per product |
| `src/content/docs/blog/` | Tips and release notes. Each post needs a `date` in its frontmatter |
| `src/styles/evinced.css` | Evinced brand colours and fonts |
| `astro.config.mjs` | Site settings and the sidebar. Add new policy and guide pages to the sidebar here |

## Work on it

```bash
npm ci
npm run dev       # local preview at http://localhost:4321
npm run build     # the same build CI runs
```

## Rules

- Every change goes through a pull request. Merging to `main` publishes it.
- Policy pages are legal text: change them only with sign-off from the policy owner, and update the "Last updated" date.
- The site must stay accessible. Check contrast and headings for new pages, and scan the site with Evinced Site Scanner after big changes.
