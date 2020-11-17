<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
<!--  <HelloWorld msg="Hello Vue 3.0 + Vite"/>-->
  <demo1></demo1>
</template>

<script lang="ts">
  import HelloWorld from './components/HelloWorld.vue';
  import demo1 from './study/demo1.vue';
  
  export default {
    name: 'App',
    components: {
      HelloWorld
      , demo1
    }
  }
</script>
