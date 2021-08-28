<template>
  <v-row>
    <v-col sm="12" md="6">
      <slider ref="slider">
        <slideritem v-for="(img, i) in destaque.imgs" :key="i">
          <v-card elevation="0" color="#00000000">
            <v-img :src="require(`@/assets/img/${img}`)">
              <div style="height: 100%" class="d-flex align-center px-2">
                <div style="width: 100%" class="d-flex justify-space-between">
                  <v-icon @click="$refs.slider.$emit('slidePre')" large color="white">mdi-chevron-left</v-icon>
                  <v-icon @click="$refs.slider.$emit('slideNext')" large color="white">mdi-chevron-right</v-icon>
                </div>
              </div>
            </v-img>
          </v-card>
        </slideritem>
      </slider>
    </v-col>
    <v-col style="height: 100%" sm="12" md="6">
      <div style="height: 300px" class="d-flex flex-column">
        <div>
          <global-title h3>{{ destaque.title }}</global-title>
          <h3 class="text-h3 font-weight-bold mb-2"></h3>
          <p>{{ destaque.paragraph }}</p>
        </div>
        <v-spacer v-if="!$vuetify.breakpoint.xs"></v-spacer>
        <div>
          <div class="d-flex flex-md-column mb-4">
            <span class="font-weight-bold mr-2">Tecnologias:</span>
            <span>{{ destaque.subtitle }}</span>
          </div>
          <div class="d-inline-flex flex-column">
            <v-btn
              target="_blank"
              :href="destaque.href"
              v-if="destaque.href"
              height="52"
              dark
              color="black"
            >
              <div class="d-flex">
                <v-icon size="32" class="mr-2">mdi-github</v-icon>
                <div class="d-flex flex-column">
                  <span class="text-caption">Disponível no</span>
                  <span>Github</span>
                </div>
              </div>
            </v-btn>
            <v-btn
              v-if="destaque.link"
              :href="destaque.link"
              target="_blank"
              text
            >
              <span>Ver Site</span>
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";

export default {
  components: { slider, slideritem },
  props: {
    destaque: Object,
  },
};
</script>

<style>
.slider-touch {
  /* background-color: #fff !important; */
}
</style>