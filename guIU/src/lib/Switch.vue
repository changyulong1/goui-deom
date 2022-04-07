<template>
    <button @click="toggle" :class="{checked:value}"><span></span></button>
</template>
<script lang="ts">
export default {
    props:{
        value:{
           type:Boolean
        }
    },
    setup(props,context) {
       const  toggle = ()=>{
           console.log(666)
           context.emit('update:value',!props.value)
       }
       return {toggle}
    },
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h1: $h - 4px;
button{
    height: $h;
    width: $h * 2;
    border-radius: $h/2;
    border: none;
    background: #bfbfbf;
    position: relative;
    >span{
        position: absolute;
        top: 2px;
        left: 2px;
        width: $h1;
        height: $h1;
        background: white;
        border-radius: $h1/2;
        transition: all 250ms;
    }
}
button.checked{
     background: #1890ff;
     >span{
        left: calc(100% - #{$h1} - 2px);
    }
}
button:focus{
    outline: none;
}
  button:active{
    > span {width: $h1 + 4px;}
  }
  button.checked:active{
    > span {width: $h1 + 4px; margin-left: -4px;}
  }
</style>