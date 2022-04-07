<template>
  <div>Button实例</div>
  <h2>实例1</h2>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h2>实例2</h2>
  <div>
    <Button size="big">大大大</Button>
    <Button>正常</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">正常</Button>
    <Button theme="link" size="small">小小小</Button>
  </div>
  <div>
    <Button theme="text" size="big">大大大</Button>
    <Button theme="text">正常</Button>
    <Button theme="text" size="small">小小小</Button>
  </div>
  <h2>实例3</h2>
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要按钮</Button>
    <Button theme="link">普通按钮</Button>
    <Button theme="link" level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要按钮</Button>
    <Button theme="text">普通按钮</Button>
    <Button theme="text" level="danger">危险按钮</Button>
  </div>
  <h2>实例4</h2>
  <div>
    <Button theme="button" disabled>禁止按钮</Button>
    <Button theme="link">禁止按钮</Button>
    <Button theme="text">禁止按钮</Button>
  </div>
    <h2>实例5</h2>
  <div>
    <Button theme="button" loading>加载按钮</Button>
    <Button theme="button">普通按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {},
};
</script>
