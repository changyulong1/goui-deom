<template>
  <div class="guIu-Carousel" ref="parnter">
    <ul>
      <li v-for="(time, i) in array" :class="{ show: index === i }" :key="i">
        <img :src="time" />
      </li>
    </ul>
    <div class="btn">
      <span @click="left">
        <svg class="icon">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </span>
      <span @click="right">
        <svg class="icon">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  props: {
    array: {
      type: Array,
      default: [],
    },
    x: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const index = ref(0);
    let time = ref(null);
    const left = () => {
      time.value = null;
      if (index.value === 0) {
        return;
      }
      index.value -= 1;
    };
    const right = () => {
      time.value = null;
      if (index.value === props.array.length - 1) {
        return;
      }
      index.value += 1;
    };
    onMounted(() => {
      if (props.x) {
        time.value = setInterval(() => {
          if (index.value === 0) {
            index.value + props.array.length - 1;
          }
          if (index.value === props.array.length - 1) {
            index.value = 0;
          }
          index.value += 1;
        }, 1500);
      }
    });
    return { index, left, right };
  },
};
</script>

<style lang="scss" scoped>
.guIu-Carousel {
  height: 300px;
  overflow: hidden;
  position: relative;
  > ul {
    width: 100%;
    height: 100%;
    &::after {
      content: "";
      display: inline-block;
      clear: both;
    }
    > li {
      display: none;
      width: 100%;
      height: 100%;
      background: red;
      > img {
        width: 100%;
        height: 100%;
      }
      &.show {
        display: block;
      }
    }
  }
  > .btn {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    > span {
      padding: 10px;
      border-radius: 100%;
      border: 1px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      > .icon {
        font-size: 20px;
      }
    }
  }
}
</style>
