import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],
  compatibilityDate: "2025-07-15",
  modules: ["shadcn-nuxt", "@pinia/nuxt", "@nuxtjs/i18n", "@nuxtjs/color-mode"],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "fr", file: "fr.json" },
      { code: "en", file: "en.json" },
    ],
    detectBrowserLanguage: false,
  },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
  colorMode: {
    preference: "light",
    classSuffix: "",
  },
});
