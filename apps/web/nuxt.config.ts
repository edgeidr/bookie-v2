// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	ssr: false,
	modules: ["@nuxtjs/i18n"],
	i18n: {
		locales: [{ code: "en", language: "en-US", file: "en.json" }],
		defaultLocale: "en",
		restructureDir: "",
		strategy: "no_prefix",
		langDir: "../../packages/i18n/locales",
	},
});
