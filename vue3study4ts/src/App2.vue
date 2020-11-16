<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld msg="Hello Vue 3.0 + Vite"/>
<!--  <demo1></demo1>-->
  <button @click="btnClick">弹出消息框{{msgBoxIsOpen}}</button>
  
  <msg-box :is-open="msgBoxIsOpen" @close-mode="onCloseMode"></msg-box>
</template>

<script lang="ts">
  import { ref } from 'vue';
  
  import HelloWorld from './components/HelloWorld.vue';
  import demo1 from './study/demo1.vue';
  import MsgBox from "./study/components/MsgBox.vue";
  
  export default {
    name: 'App',
    components: {
      HelloWorld
      , demo1
      , MsgBox
    }
    , setup() {
      const msgBoxIsOpen = ref(false);
    
      const btnClick = () => {
        msgBoxIsOpen.value = true;
      }
    
      const onCloseMode = () => {
        msgBoxIsOpen.value = false;
      }
      return {msgBoxIsOpen, btnClick, onCloseMode};
    }
  }
</script>
