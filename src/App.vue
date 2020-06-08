<template>
  <div id="app">
    <h1>Computed/Watcher</h1>
    <div>
      <label for="val">Enter a number: </label>
      <input type="number" v-model="num" />
    </div>
    <p>{{ num }}</p>
    <p></p>
    <p>{{ square }}</p>
  </div>
</template>

<script>
import { ref, computed, watchEffect } from "vue";

export default {
  name: "App",
  setup() {
    const num = ref(0);

    const square = computed(() => {
      return num.value * num.value;
    });

    watchEffect(() => {
      document.title = "The number is: " + num.value;
    });

    // Watch does the same thing, but allows watching specific refs
    // and comparison with previous values: 
    // watch([ref1, ref2], ([ref1Val, ref2Val], [prevRef1Val, prevRef2Val]) => {});

    return { num, square };
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
