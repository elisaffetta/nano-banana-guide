// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://nano-banana-guide.com',
	integrations: [
		starlight({
			title: 'Nano Banana Guide',
			description: 'Полное руководство по Google Nano Banana с 541 готовым промптом',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Русский',
					lang: 'ru',
				},
			},
			social: [
				{ 
					icon: 'telegram', 
					label: 'Telegram Bot', 
					href: 'https://t.me/nanobananas_bot' 
				},
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/elisaffetta/nano-banana-guide' 
				},
			],
			sidebar: [
				{
					label: 'Введение',
					items: [
						{ label: 'Что такое Nano Banana', slug: 'introduction' },
						{ label: 'Правила промптинга', slug: 'prompting-rules' },
					],
				},
				{
					label: 'База промптов',
					items: [
						{ label: 'Работа с фоном', slug: 'prompts/background' },
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
		sitemap(),
	],
});
