// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: 'https://marketplace.evinced.com',
	integrations: [
		starlight({
			title: 'Evinced Marketplace',
			description:
				'Policies, guides and tips for Evinced accessibility tools that work inside AI assistants.',
			logo: {
				light: './src/assets/evinced-logo-on-light.svg',
				dark: './src/assets/evinced-logo-on-dark.svg',
				alt: 'Evinced Marketplace',
				replacesTitle: true,
			},
			favicon: '/favicon.svg',
			customCss: ['./src/styles/evinced.css'],
			// No header link until the blog has posts: switch navigation to 'header-end' with the first one.
			plugins: [starlightBlog({ title: 'Tips & blog', navigation: 'none' })],
			sidebar: [
				{
					label: 'Policies',
					items: [
						{ label: 'Overview', slug: 'policies' },
						{
							label: 'Site Scanner MCP Server',
							items: [{ label: 'Privacy policy', slug: 'policies/site-scanner-mcp/privacy' }],
						},
					],
				},
				{
					label: 'Guides',
					items: [{ label: 'Overview', slug: 'guides' }],
				},
			],
		}),
	],
});
