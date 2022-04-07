<template>
  <div>Dialog组件</div>
  <h2>实例1</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :noclose="false" :ok="fn1" :Cancel="fn2">
    <template v-slot:content>
      <p>小明</p>
      <p>早上好</p>
    </template>
    <template v-slot:title>
      <strong>标题</strong>
    </template>
  </Dialog>
  <h2>实例2</h2>
  <Button @click="create">create</Button>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref,h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      return false;
    };
    const fn2 = () => {};
    const create = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { toggle, x, fn1, fn2, create };
  },
};
</script>
