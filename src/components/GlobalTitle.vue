<template>
  <div>
    <h1 v-if="h1" :style="textGradient" class="text-h2 font-weight-bold">
      <slot></slot>
    </h1>
    <h2 v-if="h2" :style="textGradient" class="text-h3 font-weight-bold">
      <slot></slot>
    </h2>
    <h3 v-if="h3" :style="textGradient" class="text-h4 font-weight-bold">
      <slot></slot>
    </h3>
    <h4 v-if="h4" :style="textGradient" class="text-h5 font-weight-bold">
      <slot></slot>
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    h1: Boolean,
    h2: Boolean,
    h3: Boolean,
    h4: Boolean,
  },
  computed: {
    textGradient() {
      return {
        background: `-webkit-linear-gradient(top right, #3F51B5, #000)`,
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        display: 'inline'
      };
    },
  },
};
</script>

<style>
</style>