<template>
  <div>
    轮播图组件
    <h3>基本用法</h3>
    <CarouselDoem1 :array="list" />
  </div>
</template>
<script lang="ts">
import CarouselDoem1 from "./CarouselDoem1.vue";
import tu1 from "../../assets/imgs/1.png";
import tu2 from "../../assets/imgs/2.png";
import tu3 from "../../assets/imgs/3.png";
import tu4 from "../../assets/imgs/4.png";
import { onMounted, ref } from "vue";
export default {
  components: { CarouselDoem1 },
  setup() {
    const list = ref([tu1, tu2, tu3, tu4]);
    return { list };
  },
};
</script>
