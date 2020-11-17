<template>
  <div class="name-wrapper">
    <h1>App04.vue 体会 ref reactive</h1>
    refCount 会自动展开: {{refCount}}
    <br>
    refCount 会自动展开: {{refCountOther}}
    <br>
    state: {{state}}
    <br>
    
  </div>
</template>

<script>
  import {ref, reactive} from 'vue';
  
  export default {
    name: "yourName"
    , setup() {
      const refCount = ref(10);
      const refCountOther = ref(100);
      const state = reactive({
        refCount
        , count01: refCountOther
        , count02: 2
      })
      
      
    
      console.log(refCount);
      console.log(refCountOther);
      console.log(state);
      console.log("自动拆包, 不用写 state.count01.value, 直接写 state.count01 ", state.count01);
    
      return {
        refCountOther, refCount, state
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>