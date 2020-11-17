<template>
  <div class="name-wrapper">
    <h1>App03.vue CompositionApiSetup4 使用 emit </h1>
    <hr>
    <aTag :count="count" @plus="plus"/>
  </div>
</template>

<script>
  import aTag from '/@/components/vue03test.vue';
  import { ref } from 'vue'
  export default {
    name: "yourName"
    , components: {
      aTag
    }
    , setup () {
      const count = ref(0);
      
      const plus = (num) => {
        count.value += num;
      }
      
      
      return {count, plus};
    }
  };
</script>

<style lang="scss" scoped>

</style>
