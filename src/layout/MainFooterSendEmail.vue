<template>
  <div>
    <div class="d-flex justify-center">
      <h2 class="grey--text">Me mande uma mensagem!</h2>
    </div>
    <v-form>
      <v-text-field
        validate-on-blur
        :rules="[inputRules.required]"
        prepend-icon="mdi-account"
        v-model="item.name"
        label="Nome"
      ></v-text-field>
      <v-text-field
        validate-on-blur
        :rules="[inputRules.required, inputRules.email]"
        prepend-icon="mdi-email"
        v-model="item.email"
        label="Email"
      ></v-text-field>
      <v-textarea
        validate-on-blur
        :rules="[inputRules.required]"
        prepend-icon="mdi-message"
        v-model="item.text"
        label="Mensagem"
      ></v-textarea>
      <div class="d-flex justify-end">
        <v-btn :loading="loading" @click="sendEmail" color="primary">
          <span> Enviar </span>
          <v-icon right> mdi-send </v-icon>
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    loading: false,
    item: {
      email: "",
      name: "",
      text: "",
    },
  }),
  methods: {
    async sendEmail() {
      this.loading = true;
      const url = "https://formsubmit.co/ajax/lukas489@gmail.com";
      const resp = await axios.post(url, {
        Email: this.item.email,
        Nome: this.item.name,
        Mensagem: this.item.text,
      });
      this.loading = false;
      if (resp.data.success === "true") {
        this.$emit("closeDialog");
        this.item = this.$options.data().item;
      }
      console.log(resp.data);
    },
  },
};
</script>

<style>
</style>