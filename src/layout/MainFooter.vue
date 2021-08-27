<template>
  <v-footer class="py-8" dark color="#0a0a0a">
    <v-dialog width="640" v-model="dialog">
      <v-card class="pa-2">
      <div class="d-flex justify-end">
        <v-btn small fab @click="dialog = false">
          <v-icon> mdi-close </v-icon>
        </v-btn>
      </div>
        <main-footer-send-email @closeDialog="dialog = false"></main-footer-send-email>
      </v-card>
    </v-dialog>
    <div style="width: 100%" class="d-flex flex-column align-center">
      <div>
        <v-btn
          color="primary"
          target="_blank"
          small
          class="mx-2"
          fab
          :href="item.href"
          v-for="item in mediaSocials"
          :key="item.icon"
        >
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </div>
      <v-divider style="width: 100%" class="my-4"></v-divider>
      <div>
        <span>Criado por </span>
        <span
          @click="dialog = true"
          style="cursor: pointer"
          class="font-weight-bold"
          >Lucas Humberto</span
        >
      </div>
    </div>
  </v-footer>
</template>

<script>
import MainFooterSendEmail from "./MainFooterSendEmail.vue";
export default {
  components: { MainFooterSendEmail },
  data: () => ({
    dialog: false,

  }),
};
</script>

<style>
</style>