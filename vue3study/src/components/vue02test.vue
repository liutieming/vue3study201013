<template>
  <div class="name-wrapper">
    <h2>vue02-test.vue</h2>
    <p>{{ title }}</p>
  </div>
</template>

<script>
  import {watchEffect, watch} from 'vue'
  
  export default {
    name: "test"
    , props: {
      title: String
    }
    , setup(props/*, ctx*/) {
      console.log('setup -> props.title: ' + props.title);
      // console.log('setup -> ctx: ', ctx);
      watchEffect(() => {
        // 主件渲染时, 和变更时, 都会触发
        console.log('watchEffect -> props.title: ' + props.title);
      })
      
      watch(() => {
        // 第一个回调函数, 返回你要监听的东西
        return props.title;
      }, (newValue) => {
        // 第二个回调函数, 接收监听值的变化 newValue
        // props初始化后, 发生变化时, 才触发
        console.log('watch -> props.title: ' + newValue);
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>