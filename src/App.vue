<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>{{ counter }}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <hello-vuex :counter="counter"></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
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
};
</script>

<style>
</style>
