// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import mermaid from 'astro-mermaid';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Your live site root on GitHub Pages
	site: 'https://aleksejslusar.github.io',
	integrations: [
		// mermaid must come before mdx
		mermaid({
			theme: 'default',
			autoTheme: true, // follow light/dark site theme
		}),
		mdx(),
		sitemap(),
	],
	markdown: {
		// VS Code-like syntax highlighting in code blocks
		//shikiConfig: { theme: 'github-dark' },
		shikiConfig: { theme: 'dark-plus' }
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});