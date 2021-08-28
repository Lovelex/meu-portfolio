<template>
  <div style="min-width: 360px" class="white rounded-lg pa-4 elevation-2">
    <v-row no-gutters class="d-flex mb-4">
      <v-col
        cols="12"
        sm="4"
        class="d-flex d-sm-block justify-center mr-4 rounded"
      >
        <div style="cursor: pointer" class="mb-6">
          <v-dialog>
            <template v-slot:activator="{ on }">
              <v-img
                v-on="on"
                width="200"
                contain
                :src="require(`@/assets/img/${projeto.imgs[0]}`)"
              ></v-img>
            </template>
            <v-card class="pa-2">
              <slider ref="slider">
                <slideritem v-for="(img, i) in projeto.imgs" :key="i">
                  <div
                    style="width: 100%"
                    class="d-flex flex-column align-center"
                  >
                    <v-img
                      width="1080"
                      contain
                      :src="require(`@/assets/img/${img}`)"
                    >
                      <div
                        style="height: 100%"
                        class="d-flex align-center px-2"
                      >
                        <div
                          style="width: 100%"
                          class="d-flex justify-space-between"
                        >
                          <v-btn
                            color="primary"
                            :style="`opacity:${i === 0 ? 0 : 1}`"
                            small
                            fab
                          >
                            <v-icon
                              @click="$refs.slider.$emit('slidePre')"
                              large
                              >mdi-chevron-left</v-icon
                            >
                          </v-btn>
                          <v-btn
                            color="primary"
                            :style="`opacity:${
                              projeto.imgs.length - 1 !== i ? 1 : 0
                            }`"
                            small
                            fab
                          >
                            <v-icon
                              @click="$refs.slider.$emit('slideNext')"
                              large
                              >mdi-chevron-right</v-icon
                            >
                          </v-btn>
                        </div>
                      </div>
                    </v-img>
                  </div>
                </slideritem>
              </slider>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <global-title class="mb-2" h4>{{ projeto.title }}</global-title>
        <span>{{ projeto.subtitle }}</span>
      </v-col>
    </v-row>
    <div>
      <p>{{ projeto.paragraph }}</p>
      <div class="d-flex mb-6">
        <span class="mr-2 font-weight-medium">Tecnologias:</span>
        <span class="d-block">{{ projeto.subparagraph }}</span>
      </div>
      <v-btn
        target="_blank"
        :href="projeto.href"
        v-if="projeto.href"
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
    </div>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
export default {
  components: { slider, slideritem },
  props: {
    projeto: Object,
  },
};
</script>

<style>
</style>