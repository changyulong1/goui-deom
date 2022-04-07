<template>
   <div>
       <Topanv/>
       <div class="banner">
            <h1>vux-UI</h1>
            <h2>一个非常了厉害的ui</h2>
            <p class="actions">
                <a href="https://github.com">github</a>
                <router-link to="/Doc">开始</router-link>
            </p>
       </div>

   </div>
</template>
<script lang="ts">
import Topanv from '../components/Topanv.vue'
export default{
  components: { Topanv },
    setup() {
        
    },
}
</script>


<style lang="scss" scoped>
   .banner{
       padding: 100px 0;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       background: lightgreen;
       > .actions{
           padding: 8px 0;
           > a{
               margin: 0 8px;
               background: #fff;
               display: inline-block;
               $h:20px;
               height: $h;
               line-height: $h;
               border-radius: $h/2;
               padding: 0 8px;

           }
       }

   }
</style>