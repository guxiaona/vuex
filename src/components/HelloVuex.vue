<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloVuex",
  // 父子组件之间的传递
  props: {
    counter: Number,
  },
};
</script>

<style scoped>
</style>