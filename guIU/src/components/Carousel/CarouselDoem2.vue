<demo>
自动轮播
</demo>
<template>
  <div class="parent">
    <!-- 绑定switch和time,switch开启自动轮播,time设置间隔时间默认1000 -->
    <Carousel :urlList="list" :switch="true" :time="1500" />
  </div>
</template>
<script lang="ts">
import Carousel from "../../lib/Carousel.vue";
import imgUrl1 from "../../assets/imgs/1.png";
import imgUrl2 from "../../assets/imgs/2.png";
import imgUrl3 from "../../assets/imgs/3.png";
import imgUrl4 from "../../assets/imgs/4.png";
import { ref } from "Vue";
export default {
  components: { Carousel },
  setup() {
    const list = ref([
      { imgUrl: imgUrl1 },
      { imgUrl: imgUrl2 },
      { imgUrl: imgUrl3 },
      { imgUrl: imgUrl4 },
    ]);
    return { list };
  },
};
</script>
<style lang="scss" scoped>
.parent {
  height: 300px;
}
</style>
