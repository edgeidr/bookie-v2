// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	ssr: false,
	app: {
		head: {
			title: process.env.NUXT_APP_NAME,
			titleTemplate: "[Admin] %s",
		},
	},
	devServer: {
		port: 3001,
	},
	modules: ["@nuxtjs/i18n", "@nuxt/ui"],
	css: ["~/assets/css/main.css"],
	i18n: {
		locales: [{ code: "en", language: "en-US", file: "en.json" }],
		defaultLocale: "en",
		restructureDir: "",
		strategy: "no_prefix",
		langDir: "../../packages/i18n/locales",
	},
	icon: {
		mode: "svg",
		clientBundle: {
			scan: true,
			icons: [
				"hugeicons:cancel-01",
				"hugeicons:menu-01",
				"hugeicons:panel-left-open",
				"hugeicons:panel-left-close",
				"hugeicons:arrow-right-01",
				"hugeicons:arrow-down-01",
			],
		},
	},
});
