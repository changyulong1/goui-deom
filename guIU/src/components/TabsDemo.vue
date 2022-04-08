<template>
    <div>Tabs组件</div>
    <h1>实例1</h1>
    <tabs>
        <tab title="nei1">内容1</tab>
        <tab title="nei2">内容1</tab>
    </tabs>
</template>
<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default{
    components:{Tabs,Tab},
    setup() {
        
    },
}
</script>
