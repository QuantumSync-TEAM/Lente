// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase"],
  supabase: { redirect: false },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js",
          body: true,
        },
      ],
    },
  },
});
