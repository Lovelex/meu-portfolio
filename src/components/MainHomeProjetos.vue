<template>
  <section style="background-color: #f0f1f7">
    <v-container style="">
      <global-title h2 class="mb-6">Projetos</global-title>

      <v-row v-if="!$vuetify.breakpoint.smAndDown" class="d-flex">
        <v-col sm="6" v-for="item in projetos" :key="item.title">
          <main-home-projetos-projeto
            class="mx-2 my-2"
            cols="12"
            sm="6"
            :projeto="item"
          ></main-home-projetos-projeto>
        </v-col>
      </v-row>
      <div
        v-if="$vuetify.breakpoint.smAndDown"
        style="overflow-x: scroll"
        class="d-flex"
      >
        <main-home-projetos-projeto
          class="mx-2 my-2"
          v-for="item in projetos"
          :key="item.title"
          cols="12"
          sm="6"
          :projeto="item"
        ></main-home-projetos-projeto>
      </div>
    </v-container>
  </section>
</template>

<script>
import mainHomeProjetosProjeto from "./MainHomeProjetosProjeto.vue";

export default {
  components: { mainHomeProjetosProjeto },
  data: () => ({
    projetos: [
      {
        imgs: ["img-1-a.webp", "img-1-b.webp"],
        title: "Minha Cafeteria",
        subtitle: "Cálculadora de troféus, diamantes e rubys.",
        paragraph:
          "Um grupo de amigos precisavam de um cálculo para organizar seus ganhos semanais em um jogo chamado Minha Cafeteria.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/mycafe",
      },
      {
        imgs: [
          "img-2-a.webp",
          "img-2-b.webp",
          "img-2-c.webp",
          "img-2-d.webp",
          "img-2-e.webp",
        ],
        title: "Imobiliária digital",
        subtitle: "Front-end para uma imobiliária.",
        paragraph:
          "O template de uma imobiliária. Um design que remetesse a modernidade e diverssão. Escolhas de cores sugeridas pelo cliente.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },
      {
        imgs: [
          "img-3-a.webp",
          "img-3-b.webp",
          "img-3-c.webp",
          "img-3-d.webp",
          "img-3-e.webp",
        ],
        title: "Has",
        subtitle: "Divulgações de eventos, para um músico.",
        paragraph:
          "Um músico queria um lugar para mostrar seus eventos marcados, vídeos e mp3 gravados.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/projeto-has",
      },
      {
        imgs: ["img-4-a.webp", "img-4-b.webp", "img-4-c.webp"],
        title: "Bela Minas",
        subtitle: "Divulgações para peças de roupas femininas.",
        paragraph:
          "Bela minas foi um projeto para divulgações de roupas femininas com a aparência de uma loja virtual.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },
      {
        imgs: ["img-5-a.webp"],
        title: "Este Site",
        subtitle: "Meu Portfólio.",
        paragraph:
          "Landing page para mostrar alguns dos meus projetos, com o design mais animado.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/meu-portfolio",
      },
      {
        imgs: [
          "img-6-a.webp",
          "img-6-b.webp",
          "img-6-c.webp",
          "img-6-d.webp",
          "img-6-e.webp",
          "img-6-f.webp",
          "img-6-g.webp",
        ],
        title: "Udg Pages",
        subtitle: "Gerador de cenas para stream.",
        paragraph:
          "Para deixar uma live/stream mais dinâmica, um time de apresentadores precisavam de um site para consumir as informações de um jogo e convertesse para uma cena ao vivo.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },
      {
        imgs: [
          "img-8-a.webp",
          "img-8-b.webp",
          "img-8-c.webp",
          "img-8-d.webp",
          "img-8-e.webp",
          "img-8-f.webp",
        ],
        title: "Despachos",
        subtitle: "Controle de pagamento.",
        paragraph:
          "Um pequeno kanban para um time poder geriri melhor os status de seus clientes.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },

      {
        imgs: ["img-10-a.webp", "img-10-b.webp"],
        title: "Muso",
        subtitle: "Uma Prática com firebase-functions",
        paragraph:
          "Um pequeno site com a proposta em que todas as requisições seriam feitas no functions do firebase para práticar.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/muso",
      },
      {
        imgs: [
          "img-11-a.webp",
          "img-11-b.webp",
          "img-11-c.webp",
          "img-11-d.webp",
          "img-11-e.webp",
        ],
        title: "Udg Teams",
        subtitle: "Gerenciador para busca de times e jogadores.",
        paragraph:
          "Em um jogo chamado League of legends, jogadores gostam de buscar por times e ate mesmo por outros jogadores. Com essa ideia surgiu o gerenciador de times.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },
      {
        imgs: [
          "img-13-a.webp",
          "img-13-b.webp",
          "img-13-c.webp",
          "img-13-d.webp",
          "img-13-e.webp",
        ],
        title: "Fonktober",
        subtitle: "Organizador de artes.",
        paragraph:
          "Um evento chamado inktober, pessoas deveriam fazer uma arte com o tema sugerido. Com isso um cliente queria um site para mostrar e organizar suas artes.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/fonctober",
      },
    ],
  }),
};
</script>

<style>
</style>