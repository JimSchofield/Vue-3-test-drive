<template>
  <div id="app">
    <h1>Hello, Vue 3</h1>
    <button @click="toggleVisible">{{ isVisible ? "Hide" : "Reveal" }}</button>
    <p v-if="isVisible">Here is the visible text!</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const isVisible = ref(false);
    const toggleVisible = () => (isVisible.value = !isVisible.value);

    return {
      isVisible,
      toggleVisible
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
