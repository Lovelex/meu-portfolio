<template>
  <v-app >
    <v-main >
      <app-nav></app-nav>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppNav from "./layout/MainNav.vue";
import MainHome from "./components/MainHome.vue";
export default {
  components: { AppNav, MainHome, MainHome },
  
};
</script>

<style>
p::-moz-selection, span::-moz-selection{ /* Code for Firefox */
  color: white !important;
  background: #3A4BA7;
}

p::selection, span::selection {
  color: white !important;
  background: #3A4BA7;
}
a {
  text-decoration: none;
}
</style>