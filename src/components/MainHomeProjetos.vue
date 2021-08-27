<template>
  <div style="background-color: #f0f1f7">
    <v-container style="">
      <global-title h2 class="mb-6">Projetos</global-title>

      <v-row
        v-if="!$vuetify.breakpoint.smAndDown"
        style="overflow-x: scroll"
        class="d-flex"
      >
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
        img: "img-1.png",
        title: "Minha Cafeteria",
        subtitle: "Cálculadora de troféus, diamantes e rubys.",
        paragraph:
          "Um grupo de amigos precisavam de um cálculo para organizar seus ganhos semanais em um jogo chamado Minha Cafeteria.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/mycafe",
      },
      {
        img: "img-2.png",
        title: "Imobiliária digital",
        subtitle: "Front-end para uma imobiliária.",
        paragraph:
          "O template de uma imobiliária. Um design que remetesse a modernidade e diverssão. Escolhas de cores sugeridas pelo cliente.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/projeto-has",
      },
      {
        img: "img-3.png",
        title: "Has",
        subtitle: "Divulgações de eventos, para um músico.",
        paragraph:
          "Um músico queria um lugar para mostrar seus eventos marcados, vídeos e mp3 gravados.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },
      {
        img: "img-4.png",
        title: "Bela Minas",
        subtitle: "Divulgações para peças de roupas femininas.",
        paragraph:
          "Bela minas foi um projeto para divulgações de roupas femininas com a aparência de uma loja virtual.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },
      {
        img: "img-5.png",
        title: "Este Site",
        subtitle: "Meu Portfólio",
        paragraph:
          "Landing page para mostrar alguns dos meus projetos, com o design mais animado.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },
      {
        img: "img-6.png",
        title: "Udg Pages",
        subtitle: "Gerador de cenas para stream.",
        paragraph:
          "Para deixar uma live/stream mais dinâmica, um time de apresentadores precisavam de um site para consumir as informações de um jogo e convertesse para uma cena ao vivo.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },
      {
        img: "img-8.png",
        title: "Despachos",
        subtitle: "Controle de pagamento.",
        paragraph:
          "Um pequeno kanban para um time poder geriri melhor os status de seus clientes.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },

      {
        img: "img-10.png",
        title: "Muso",
        subtitle: "Uma Prática com firebase-functions",
        paragraph:
          "Um pequeno site com a proposta em que todas as requisições seriam feitas no functions do firebase para práticar.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "https://github.com/Lovelex/muso",
      },
      {
        img: "img-11.png",
        title: "Udg Teams",
        subtitle: "Gerenciador para busca de times e jogadores.",
        paragraph:
          "Em um jogo chamado League of legends, jogadores gostam de buscar por times e ate mesmo por outros jogadores. Com essa ideia surgiu o gerenciador de times.",
        subparagraph: "Vue, Vuetify, Firebase.",
        href: "",
      },
      {
        img: "img-13.png",
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