<template>
  <v-navigation-drawer app v-model="drawer.isActive">
    <div class="pa-4">
      <div class="d-flex justify-end mb-4">
        <v-btn @click="$emit('clickDrawerIcon')" elevation="0" color="#00000000">
          <v-icon> mdi-arrow-right</v-icon>
        </v-btn>
      </div>
      <v-list>
        <v-list-item class="my-2" :to="item.to" v-for="item in navItems" :key="item.label">
          <v-list-item-title> {{ item.label }} </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: Object,
  },
};
</script>

<style>
</style>