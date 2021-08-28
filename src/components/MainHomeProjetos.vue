<template>
  <div style="background-color: #f0f1f7">
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
  </div>
</template>

<script>
import mainHomeProjetosProjeto from "./MainHomeProjetosProjeto.vue";

export default {
  components: { mainHomeProjetosProjeto },
  data: () => ({
    projetos: [
      {
        imgs: ["img-1-a.png", "img-1-b.png"],
        title: "Minha Cafeteria",
        subtitle: "Cálculadora de troféus, diamantes e rubys.",
        paragraph:
          "Um grupo de amigos precisavam de um cálculo para organizar seus ganhos semanais em um jogo chamado Minha Cafeteria.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/mycafe",
      },
      {
        imgs: [
          "img-2-a.png",
          "img-2-b.png",
          "img-2-c.png",
          "img-2-d.png",
          "img-2-e.png",
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
          "img-3-a.png",
          "img-3-b.png",
          "img-3-c.png",
          "img-3-d.png",
          "img-3-e.png",
        ],
        title: "Has",
        subtitle: "Divulgações de eventos, para um músico.",
        paragraph:
          "Um músico queria um lugar para mostrar seus eventos marcados, vídeos e mp3 gravados.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/projeto-has",
      },
      {
        imgs: ["img-4-a.png", "img-4-b.png", "img-4-c.png"],
        title: "Bela Minas",
        subtitle: "Divulgações para peças de roupas femininas.",
        paragraph:
          "Bela minas foi um projeto para divulgações de roupas femininas com a aparência de uma loja virtual.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },
      {
        imgs: ["img-5-a.png"],
        title: "Este Site",
        subtitle: "Meu Portfólio.",
        paragraph:
          "Landing page para mostrar alguns dos meus projetos, com o design mais animado.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/meu-portfolio",
      },
      {
        imgs: [
          "img-6-a.png",
          "img-6-b.png",
          "img-6-c.png",
          "img-6-d.png",
          "img-6-e.png",
          "img-6-f.png",
          "img-6-g.png",
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
          "img-8-a.png",
          "img-8-b.png",
          "img-8-c.png",
          "img-8-d.png",
          "img-8-e.png",
          "img-8-f.png",
        ],
        title: "Despachos",
        subtitle: "Controle de pagamento.",
        paragraph:
          "Um pequeno kanban para um time poder geriri melhor os status de seus clientes.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },

      {
        imgs: ["img-10-a.png", "img-10-b.png"],
        title: "Muso",
        subtitle: "Uma Prática com firebase-functions",
        paragraph:
          "Um pequeno site com a proposta em que todas as requisições seriam feitas no functions do firebase para práticar.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/muso",
      },
      {
        imgs: [
          "img-11-a.png",
          "img-11-b.png",
          "img-11-c.png",
          "img-11-d.png",
          "img-11-e.png",
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
          "img-13-a.png",
          "img-13-b.png",
          "img-13-c.png",
          "img-13-d.png",
          "img-13-e.png",
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