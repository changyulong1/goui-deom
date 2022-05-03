<template>
  <div class="goIu-Carousel" ref="parnter">
    <ul>
      <li v-for="(time, i) in urlList" :class="{ show: index === i }" :key="i">
        <img :src="time.imgUrl" alt="time.imgUrl" />
      </li>
    </ul>
    <div class="btn">
      <span @click="left" @mouseenter="clear" @mouseleave="Rotation">
        <svg class="icon">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </span>
      <span @click="right" @mouseenter="clear" @mouseleave="Rotation">
        <svg class="icon">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </span>
    </div>
    <div class="ball">
      <span
        v-for="(time, i) in urlList"
        :key="i"
        :class="{ selector: index === i }"
        @mouseenter="MoveIn(i)"
        @mouseleave="Rotation"
      ></span>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  props: {
    urlList: {
      type: Array,
      default: [],
    },
    switch: {
      type: Boolean,
      default: false,
    },
    time: {
      type: Number,
      default: 1000,
    },
  },
  setup(props) {
    const index = ref(0);
    let time = null;
    onMounted(() => {
      Rotation();
    });
    const Rotation = () => {
      if (props.switch) {
        time = setInterval(() => {
          if (index.value === props.urlList.length - 1) {
            index.value = 0;
          }
          index.value += 1;
        }, props.time);
      }
    };
    const left = () => {
      if (index.value === 0) {
        return;
      }
      index.value -= 1;
    };
    const right = () => {
      if (index.value === props.urlList.length - 1) {
        return;
      }
      index.value += 1;
    };
    const MoveIn = (value) => {
      clearInterval(time);
      index.value = value;
    };
    const clear = () => {
      if (props.switch) {
        clearInterval(time);
      }
    };

    return { index, left, right, MoveIn, clear, Rotation };
  },
};
</script>

<style lang="scss" scoped>
.goIu-Carousel {
  width: 100%;
  height: 100%;
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
      padding: 10px 20px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      > .icon {
        font-size: 20px;
      }
    }
  }
  > .ball {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 4px;
    > span {
      display: inline-block;
      width: 6px;
      height: 6px;
      border: 1px solid #ccc;
      border-radius: 100%;
      margin: 0 10px;
      &.selector {
        background: yellowgreen;
      }
    }
  }
}
</style>
