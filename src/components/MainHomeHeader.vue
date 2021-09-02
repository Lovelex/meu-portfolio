<template>
  <div style="background-color: #f0f1f7">
    <v-container class="d-flex flex-column justify-center">
      <v-row>
        <v-col sm="12" md="6">
          <div  class="d-flex justify-center justify-md-start">
            <div style="max-width: 80%" class="elevation-8 rounded-circle" >
              <v-img
                :src="require('@/assets/img/webp/me.webp')"
              ></v-img>
            </div>
          </div>
        </v-col>
        <v-col sm="12" md="6">
          <div>
            <global-title h1 class="mb-6 text-center text-md-left">Olá</global-title>
            <p v-for="item in paragraphs" :key="item">
              {{ item }}
            </p>
            <div>
              <v-tooltip v-for="item in mediaSocials" :key="item.icon" top>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" :href="item.href" v-on="on" target="_blank" class="mx-2" fab>
                    <v-icon size="42">
                      {{ item.icon }}
                    </v-icon>
                  </v-btn>
                </template>
                <span>{{ item.label }}</span>
              </v-tooltip>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    paragraphs: [
      'Se você está visitando esta página, provavelmente está pensando "Quem é Lucas Humberto?. E sendo honesto, essa é uma pergunta que muda de tempo em tempo.',
      "Gosto muito de vídeo-games, conhecer pessoas novas e fazer elas rirem. Gosto de aprender tecnologias novas mesmo que eu não use no dia a dia.",
      "Estudo programação por conta própria desde o final de 2018, passei por Python e Php.  Hoje em dia minha linguagem favorita é sem dúvidas JavaScript junto com o framwork VueJs.",
      "Fique a vontade para ver meus projetos reais e de práticas e se quiser me mandar uma mensagem para mim, clique no meu nome no rodapé da página.",
    ],
  }),
};
</script>

<style>

</style>