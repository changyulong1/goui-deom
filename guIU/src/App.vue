<template>
  <router-view></router-view>
</template>

<script lang="ts" >
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width > 500 ? true : false);
    window.onresize = () => {
      const width = document.documentElement.clientWidth;
      if (width < 500) {
        menuVisible.value = false;
      } else {
        menuVisible.value = true;
      }
    };
    router.beforeEach(() => {
      if (width < 500) {
        menuVisible.value = false;
      } else {
        menuVisible.value = true;
      }
    });
    provide("menuVisible", menuVisible);
  },
};
</script>


