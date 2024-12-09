// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'My Nuxt App',
      meta: [{ name: 'description', content: 'A Nuxt.js project' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
        },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/swiper@8.4.5/swiper-bundle.min.css' }

      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js', // Import Bootstrap JS
          crossorigin: 'anonymous'
        },
        { src: 'https://unpkg.com/swiper@8.4.5/swiper-bundle.min.js', defer: true }

      ]
    },
  },
  css: ['./assets/css/main.css',],
  build: { transpile: ['bootstrap'] },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
