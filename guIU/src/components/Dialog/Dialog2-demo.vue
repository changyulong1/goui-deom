<demo>
一键打开 Dialog
</demo>
<template>
  <Button @click="create">create</Button>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
import Dialog from "../../lib/Dialog.vue";
import { ref, h } from "vue";
import { openDialog } from "../../lib/openDialog";
export default {
  components: { Dialog, Button },
  setup() {
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
    return { create};
  },
};
</script>
