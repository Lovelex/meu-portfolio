<template>
  <section style="background-color: #e6e8f2">
    <v-container>
      <global-title h2 class="mb-6">Destaques</global-title>
      <main-home-destaques-destaque
        class="mb-12"
        :destaque="item"
        v-for="item in destaques"
        :key="item.title"
      ></main-home-destaques-destaque>
    </v-container>
  </section>
</template>

<script>
import MainHomeDestaquesDestaque from "./MainHomeDestaquesDestaque.vue";
export default {
  components: { MainHomeDestaquesDestaque },
  data: () => ({
    destaques: [
      {
        imgs: ["img-9-a.webp", "img-9-b.webp", "img-9-c.webp", "img-9-d.webp"],
        title: "Trini 7",
        paragraph:
          "Uma landing page para um time de design, um projeto onde o foco era um rosto mais moderno, imagens abstratas com as cores da marca escolhida pelo cliente.",
        subtitle: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/trini7",
        alt: "Ilustração do site trini 7, Uma landing page para um time de design."
      },
      {
        imgs: ["img-12-a.webp", "img-12-b.webp", "img-12-c.webp"],
        title: "Loud",
        paragraph:
          "Feito como uma forma de contato mais atraente, Loud precisava de uma landing page mais moderna para alavancar sua agência especializada em Marketing digital.",
        subtitle: "Vue, Vuetify, Firebase.",
        href: "",
        alt: "Ilustração do site Loud, Uma landing page para uma agência de marketing digital."
      },
      {
        imgs: ["img-7-a.webp", "img-7-b.webp", "img-7-c.webp", "img-7-d.webp"],
        title: "Udg Campeonatos",
        paragraph:
          "Site criado para organização de campeonatos, com o foco no jogo League of legends. O design do menu sugerido pelo cliente de ser alguns cães torneou-se uma experiência única e atraente.",
        subtitle: "Vue, Vuetify, Firebase.",
        href: "",
        alt: "Ilustração do site UdgCampeonatos, um site para criações de campeonatos de league of legends."
      },
    ],
  }),
};
</script>

<style>
</style>