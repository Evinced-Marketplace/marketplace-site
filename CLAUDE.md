# CLAUDE.md

Source for marketplace.evinced.com, an Astro Starlight site with the starlight-blog plugin. See `README.md` for the layout.

## Rules

- **Every change is a pull request.** Merging to `main` publishes to GitHub Pages; never push to `main`.
- **`npm run build` must pass** before you open a pull request. CI runs the same build.
- **Policy pages are legal text.** Change wording only when the owner asks, and update the "Last updated" line.
- **New pages go in the sidebar.** Policies and guides are listed by hand in `astro.config.mjs`. Blog posts are listed by the plugin.
- **Accessible by default.** Keep one `h1` per page (the frontmatter `title`), ordered headings, and the brand colours in `src/styles/evinced.css`, which meet WCAG AA contrast.

## Development

- `npm run dev` starts the local server; `astro dev --background` runs it in the background (`astro dev stop` to stop).
- Astro docs: https://docs.astro.build · Starlight docs: https://starlight.astro.build
