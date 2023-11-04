// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
		['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
	],
	css: ['~/assets/css/main.css'],
	imports: { dirs: ['./stores'] },
	ui: {
		icons: ['mdi'],
	},
})
