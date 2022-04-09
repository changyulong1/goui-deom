<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>
<script>
import { ref } from 'vue'
export default {
    props:{
        path:{
            tupe:String,
            required: true
        }
    },
   setup(props){
       const content = ref(null)
       import(props.path).then((res)=>{
           content.value = res.default
       })
        return {content}
   }
}
</script>
