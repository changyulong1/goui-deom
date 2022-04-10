<demo>
支持size
</demo>
<template>
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
</template>
<script lang="ts">
import Button from "../../lib/Button.vue"
export default {
   components:{Button}
}
</script>

