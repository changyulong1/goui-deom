<template>
  <div class="topanv">
    <div class="logo">
      <router-link to="/">
        <svg class="icon">
          <use xlink:href="#icon-wang"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/Doc">文档</router-link>
      </li>
    </ul>
      <svg v-if="toggleMenuButtonVisible" class=" toggleAside icon" @click="toggleMenu">
        <use xlink:href="#icon-toc"></use>
      </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  props:{
    toggleMenuButtonVisible:{
        type:Boolean,
        default:false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
$color: #02bcb0;
.topanv {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
