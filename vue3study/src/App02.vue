<template>
  <div class="name-wrapper">
    <h1>composition-Api-setup-2</h1>
    <h2>1. 体会 watchEffect watch (与 watch 有关的代码写在 vue02-test.vue)</h2>
    <h2>2. 体会 setup 函数 形参 ctx (代码写在 vue02-test.vue)</h2>
    <test :title="title"></test>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import test from '/@/components/vue03test.vue';
  
  export default {
    name: "yourName"
    , components: {
      test
    }
    , setup (props, ctx) {
      const title = ref('我是VUE!');
      
    
      return {title}
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
