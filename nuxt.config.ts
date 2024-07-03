// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@invictus.codes/nuxt-vuetify"],
  css: ["assets/style/main.css"],

  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {},
  },
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "SMB Matric. School - Dindigul",
      meta: [
        {
          name: "description",
          content: "Welcome to our SMB Matric. School.",
        },
      ],
    },
  },
});
