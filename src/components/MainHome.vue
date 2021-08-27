<template>
  <div id="main-wrapper">
    <main-home-header class="py-16" id="home"></main-home-header>
    <main-home-destaques class="py-16" id="destaques"></main-home-destaques>
    <main-home-projetos class="py-16" id="projetos"></main-home-projetos>
    <main-footer></main-footer>
  </div>
</template>

<script>
import AppNav from "../layout/MainNav.vue";
import MainFooter from "../layout/MainFooter.vue";
import MainHomeDestaques from "./MainHomeDestaques.vue";
import MainHomeHeader from "./MainHomeHeader.vue";
import MainHomeProjetos from "./MainHomeProjetos.vue";
export default {
  components: {
    AppNav,
    MainHomeHeader,
    MainHomeDestaques,
    MainHomeProjetos,
    MainFooter,
  },
  
};
</script>

<style>
</style>