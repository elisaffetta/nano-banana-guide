// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Минимальная конфигурация для тестирования
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
		}),
	],
});
