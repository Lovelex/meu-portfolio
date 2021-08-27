<template>
  <v-row>
    <v-col sm="12" md="6">
      <div v-if="destaque.img">
        <v-img :src="require(`@/assets/img/${destaque.img}`)"></v-img>
      </div>
    </v-col>
    <v-col style="height: 100%" sm="12" md="6">
      <div style="height: 300px" class="d-flex flex-column">
        <div>
          <global-title h3>{{ destaque.title }}</global-title>
          <h3 class="text-h3 font-weight-bold mb-2"></h3>
          <p>{{ destaque.paragraph }}</p>
        </div>
        <v-spacer></v-spacer>
        <div>
          <div class="d-flex flex-md-column mb-4">
            <span class="font-weight-bold mr-2 ">Tecnologias:</span>
            <span>{{ destaque.subtitle }}</span>
          </div>
          <v-btn target="_blank" :href="destaque.href" v-if="destaque.href" height="52" dark color="black">
            <div class="d-flex">
              <v-icon size="32" class="mr-2">mdi-github</v-icon>
              <div class="d-flex flex-column">
                <span class="text-caption">Disponível no</span>
                <span>Github</span>
              </div>
            </div>
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    destaque: Object,
  },
};
</script>

<style>
</style>