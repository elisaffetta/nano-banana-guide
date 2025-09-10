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
					icon: 'telegram', 
					label: 'Канал Елисаветы', 
					href: 'https://t.me/elisaffettaai' 
				},
			],
			sidebar: [
				{ label: 'Главная', slug: '' },
				{
					label: 'Введение',
					items: [
						{ label: 'Что такое Nano Banana', slug: 'introduction' },
						{ label: 'Доступ из России', slug: 'access' },
						{ label: 'Правила промптинга', slug: 'prompting-rules' },
						{ label: 'Обзор возможностей', slug: 'overview' },
					],
				},
				{
					label: 'База промптов',
					items: [
						{ label: 'Работа с фоном', slug: 'prompts/background' },
						{ label: 'Работа с объектами', slug: 'prompts/objects' },
						{ label: 'Изменение внешности', slug: 'prompts/appearance' },
						{ label: 'Улучшение качества', slug: 'prompts/quality' },
						{ label: 'Креативная стилизация', slug: 'prompts/creative' },
						{ label: 'Реставрация фото', slug: 'prompts/restoration' },
						{ label: 'Бизнес и коммерция', slug: 'prompts/business' },
						{ label: 'Специальные эффекты', slug: 'prompts/effects' },
						{ label: 'Создание контента', slug: 'prompts/content' },
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				Head: './src/components/Head.astro',
			},
		}),
		sitemap(),
	],
});
