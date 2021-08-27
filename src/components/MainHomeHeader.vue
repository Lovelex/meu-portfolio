<template>
  <div style="background-color: #f0f1f7">
    <v-container class="d-flex flex-column justify-center">
      <v-row>
        <v-col sm="12" md="6">
          <div class="d-flex justify-center justify-md-start">
            <v-avatar size="420px">
              <v-img
                :src="require('@/assets/img/me.png')"
              ></v-img>
            </v-avatar>
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
      'Se você está visitando esta página, provavelmente está pensando "Quem é Pedro Farina?. E sendo honesto, essa é uma pergunta que muda de tempo em tempo.',
      "Bom, por enquanto o que eu sei dizer é que eu amo pessoas, video-games e programação. Eu adoro conhecer novas pessoas, e estou sempre ansioso pra conhecer novas tecnologias e aprender a usá-las para agir no nosso cotidiano.",
      "Eu tento ser sempre uma pessoa positiva e aproveitar meu tempo com aqueles ao meu redor. Eu sou muito brincalhão e vivo fazendo piadas.",
      "E se você está interessado em mim, bom, atualmente estou comprometido, mas pode ficar a vontade, ver meus projetos e me enviar uma mensagem.",
    ],
  }),
};
</script>

<style>
</style>