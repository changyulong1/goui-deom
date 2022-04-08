<template>
  <div>
    <div class="topnavAndBanner">
      <Topanv />
      <div class="banner">
        <h1>vux-UI</h1>
        <h2>一个非常了厉害的ui</h2>
        <p class="actions">
          <a href="https://github.com">github</a>
          <router-link to="/Doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-deng"></use>
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import Topanv from "../components/Topanv.vue";
export default {
  components: { Topanv },
  setup() {},
};
</script>


<style lang="scss" scoped>
$border-radius: 4px;
$color: #02bcb0;
.topnavAndBanner {
  background: rgb(227, 255, 253);
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  clip-path: ellipse(100% 60% at 50% 40%);
}
.features{
    SVG{
        width: 64px;
        height: 64px;
    }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;
  > .actions {
    padding: 8px 0;
    > a {
      margin: 0 8px;
      background: #02bcb0;
      display: inline-block;
      color: white;
      border-radius: $border-radius;
      padding: 8px 24px;
    }
  }
}
</style>