<template>
  <div>
    <topanv/>
    <div class="content">
        <aside>侧标栏</aside>
        <main>内容区</main>
    </div>
  </div>
</template>
<script lang="ts">
import topanv from '../components/topanv.vue'

export default{
  components: { topanv },

  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
    
</style>