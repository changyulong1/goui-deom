<demo>
常规使用
</demo>
<template>
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
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
import Dialog from "../../lib/Dialog.vue";
import { ref, h } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      return true;
    };
    const fn2 = () => {};
    return { toggle, x, fn1, fn2 };
  },
};
</script>
