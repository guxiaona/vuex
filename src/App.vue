<template>
  <div id="app">
    <h2>--------modules中的内容--------</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <button @click="asycUpdataName">异步修改</button>

    <h2>--------app中的内容--------</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-------------getters相关信息-------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>{{ $store.getters.moreAgeStu(30) }}</h2>

    <h2>-------------info对象的内容是否是响应式的------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>-------------hellovuex内容------</h2>
    <hello-vuex :counter="counter"></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
import { INCREMENT } from "./store/mutations.types";

export default {
  name: "App",
  data() {
    return {
      message: "我是APP组件",
      counter: 0,
    };
  },
  components: {
    HelloVuex,
  },
  methods: {
    addition() {
      this.$store.commit("INCREMENT");
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      // 负载payload 参数或者对象
      // 1.普通的提交封装
      this.$store.commit("incrementCount", count);

      // 2.特殊的提交封装 count 就变成了一个负载对象
      // this.$store.commit({
      //   type: "incrementCount",
      //   count,
      // });
    },
    addStudent() {
      const stu = { id: 5, name: "why5", age: 44 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      // this.$store.commit("updateInfo");

      // 方法一
      // this.$store.dispatch("aUpdateInfo", {
      //   message: "我是携带的信息",
      //   success: () => {
      //     console.log("里面已经完成了");
      //   },
      // });

      // 方法二
      this.$store.dispatch("aUpdateInfo", "我是携带的信息").then((res) => {
        console.log("里面已经完成了");
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit("updateName", "lisi");
    },
    asycUpdataName() {
      this.$store.dispatch("aUpdateName");
    },
  },
};
</script>

<style>
</style>
