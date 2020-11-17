<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld msg="Hello Vue 3.0 + Vite"/>
  <h1>测试 axios ps 请打开 控制台观察输出 !!!</h1>
  <h2>大家好
    <span> 我是刘铁明 </span>
  </h2>
</template>

<script>
  import HelloWorld from '/@/components/HelloWorld.vue'
  import { getData } from '/@/services/index.js';
  import { onMounted } from 'vue'
  
  export default {
    name: 'App',
    components: {
      HelloWorld
    }
    , setup () {
      onMounted(async () => {
        const data = await getData();
        console.log(data);
      })
    }
  }
</script>


<style lang="scss" scoped>
  @import "../public/css/main.scss";  // 导入主样式
  h2 {
    font-size: 20px;
    span {
      font-size: 10px;
      background-color: green;
      color: yellow;
    }
  }
</style>