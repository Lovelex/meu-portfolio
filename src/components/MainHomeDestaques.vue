<template>
  <div style="background-color: #e6e8f2">
    <v-container>
      <global-title h2 class="mb-6">Destaques</global-title>
      <main-home-destaques-destaque
        class="mb-12"
        :destaque="item"
        v-for="item in destaques"
        :key="item.title"
      ></main-home-destaques-destaque>
    </v-container>
  </div>
</template>

<script>
import MainHomeDestaquesDestaque from "./MainHomeDestaquesDestaque.vue";
export default {
  components: { MainHomeDestaquesDestaque },
  data: () => ({
    destaques: [
      {
        imgs: ["img-9-a.png", "img-9-b.png", "img-9-c.png", "img-9-d.png"],
        title: "Trini 7",
        paragraph:
          "Uma landing page para um time de design, um projeto onde o foco era um rosto mais moderno, imagens abstratas com as cores da marca escolhida pelo cliente.",
        subtitle: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/trini7",
      },
      {
        imgs: ["img-12-a.png", "img-12-b.png", "img-12-c.png"],
        title: "Loud",
        paragraph:
          "Feito como uma forma de contato mais atraente, Loud precisava de uma landing page mais moderna para alavancar sua agência especializada em Marketing digital.",
        subtitle: "Vue, Vuetify, Firebase.",
        href: "",
      },
      {
        imgs: ["img-7-a.png", "img-7-b.png", "img-7-c.png", "img-7-d.png"],
        title: "Udg Campeonatos",
        paragraph:
          "Site criado para organização de campeonatos, com o foco no jogo League of legends. O design do menu sugerido pelo cliente de ser alguns cães torneou-se uma experiência única e atraente.",
        subtitle: "Vue, Vuetify, Firebase.",
        href: "",
        link: "",
      },
    ],
  }),
};
</script>

<style>
</style>