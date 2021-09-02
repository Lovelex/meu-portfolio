<template>
  <div>
    <main-drawer @clickDrawerIcon="toggleDialog" :drawer="drawer"></main-drawer>
    <v-app-bar color="#fff" app>
      <v-app-bar-nav-icon
        @click="toggleDialog"
        class="mr-4 d-block d-sm-none"
      ></v-app-bar-nav-icon>
      <nav>
        <v-list v-model="nav" color="#00000000" class="d-sm-flex d-none">
          <v-list-item
            exact-active-class="app-nav-item"
            :to="item.to"
            v-for="item in navItems"
            :key="item.label"
          >
            <v-list-item-title>
              <span class="ma-2 px-4">{{ item.label }}</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </nav>
    </v-app-bar>
  </div>
</template>

<script>
import MainDrawer from "./MainDrawer.vue";
export default {
  components: { MainDrawer },
  data: () => ({
    nav: 0,
    drawer: {
      isActive: false,
    },
  }),
  methods: {
    toggleDialog() {
      this.drawer.isActive = !this.drawer.isActive;
    },
  },
};
</script>

<style>
.app-nav-item {
  border-radius: 30px;
  background-color: #3a4ba7;
  color: white !important;
}
</style>