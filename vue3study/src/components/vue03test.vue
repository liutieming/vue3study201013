<template>
  <div class="name-wrapper">
    <h2>vue03test.vue</h2>
    <p>{{ count }}</p>
    <button @click="plus">增加</button>
  </div>
</template>

<script>
  export default {
    name: "test3"
    , props: {
      count: Number
    }
    // , emits: ['plus']
    , setup (props, ctx) {
      const plus = () => {
        ctx.emit('plus', 100)
      }
      
      return {plus};
    }
  }
</script>

<style lang="scss" scoped>

</style>