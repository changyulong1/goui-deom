<template>
    <div>
        <h2>Tabs组件</h2>
        <Demo :component="Tabs1Demo"/>
    </div>
</template>
<script lang="ts">
import Demo from "./Demo.vue"
import Tabs1Demo from "./Tabs1-demo.vue"
export default{
    components:{Demo},
    setup() {
       return {
            Tabs1Demo
       }
    },
}
</script>
