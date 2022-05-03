<template>
  <div>
    <h3>carousel组件</h3>
    <Demo :component="carouselDeom1" />
    <Demo :component="carouselDeom2" />
  </div>
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import carouselDeom1 from "./CarouselDoem1.vue";
import carouselDeom2 from "./CarouselDoem2.vue";
export default {
  components: { Demo },
  setup() {
    return {
      carouselDeom1,
      carouselDeom2,
    };
  },
};
</script>
