<template>
  <div class="demo1">
    (1) ref bind, Number is: {{ cnt }}, it's double is {{ double }}
    <button @click="increase">点我加1</button>
    <hr>
    (2) reactive bind, Number is: {{ data.count }}, it's double is {{ data.double }}
    <button @click="data.increase">点我加1, 并添加到数组,及对象;这是vue3的优点</button>
    <br>
    person is {{ data.person }}
    <ul>
      <li v-for="item in data.arrNum" :key="item"> {{item}}</li>
    </ul>
    <hr>
    <h1> {{ greetings }} </h1>
    <button @click="sayHello">点我 say hello </button>

  </div>
</template>

<script lang="ts">
  import {
    ref                 // 包装成 ref 对象
    , reactive          // 包装成 reactive 对象
    , computed          // 包装成 computed. 返回 ComputedRef<T>
    , toRefs            // 将对象拆解, 并将拆解的零件再包装成 ref 对象
    , onMounted         // vue 生命周期 --- 加载
    , onUpdated         // vue 生命周期 --- 更新
    , onRenderTracked   // 用于调式的钩子函数
    , onRenderTriggered // 用于调式的钩子函数
  } from 'vue';
  
  interface IDate {
    count: number;
    double: number;
    increase: () => void;
    arrNum: number[];
    person: { name?: string };
  }
  
  export default {
    name: ""
    , setup() {
      const cnt = ref(0);
      const increase = () => {
        console.log(cnt.value++);
      }
      const double = computed(() => {
        return cnt.value * 2;
      })
      
      const data: IDate = reactive({              // 用接口框住 data 成员的类型, 不然TS类型推断会报错.
        count: 0
        , increase: () => {
          data.count++;
          data.arrNum.push(data.count);
          data.person.age = data.count;                    // 因为 age 没有在 接口(IData) 中定义, 所以报红. 但可用.
        }
        , double: computed(() => data.count * 2)
        , arrNum: [1, 2, 3, 4, 5]
        , person: {
          name: "张哥"
        }
      })
      
      onMounted(() => {
        console.log("onMounted");
      })
      
      onUpdated(() => {
        console.log("onUpdated");
      })
      
      onRenderTriggered((event) => {
        // 通过这个钩子函数可以看到, 页面 rerander 之后, 那些值发生了变化.
        console.log(event);
      })
      
      ////// watch 的使用
      const greetings = ref('');
      
      const sayHello = () => {
        document.title = 'Hello! ';
        greetings.value += document.title;
      }
      
      return {
        cnt
        , double
        , increase
        , data
        // ... refData    // data不能直接 拆解使用, 需要使用 refData 包装 const refData = toRefs(data);
        , greetings
        , sayHello
      }
    }
  }
</script>

<style lang="" scoped>

</style>