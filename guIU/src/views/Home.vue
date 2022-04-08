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
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-deng"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
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
.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-auto-columns: 80px auto;
      grid-auto-rows: 1fr auto;
      >svg{
          grid-area: icon;
          width: 64px;
          height: 64px;
      }
      >h3{
          grid-area: title;
          font-size: 28px;
      }
      >p{
          grid-area:text;
      }
    }
  }
}
</style>