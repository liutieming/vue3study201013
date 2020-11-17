<template>
  <div class="name-wrapper">
    <h1>App05.vue 体会 ref isRef unref</h1>
  </div>
</template>

<script>
  import { ref, isRef, unref} from 'vue';
  export default {
    name: "yourName"
    , setup () {
      const refStudent = ref({
        name: '张三丰'
        , info: {
          age: 100
          , gender: '男'
          , hobby: '打坐'
        }
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>