<template>
  <div id="app">
    <button @click="isVisible = !isVisible">{{ isVisible ? "Hide" : "Reveal" }}</button>
    <p v-if="isVisible">Here is the visible text!</p>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  name: "App",
  setup() {
    const isVisible = ref(false);

    watchEffect(() => {
      document.title = `Drawer is ${
        isVisible.value ? "visible" : "not visible"
      }`;
    });

    return {
      isVisible,
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
