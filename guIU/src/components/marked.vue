<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>
<script>
import { ref } from 'vue'
export default {
    props:{
        content:{
            tupe:String,
            required: true
        }
    }
}
</script>
