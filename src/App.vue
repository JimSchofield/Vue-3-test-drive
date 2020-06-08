<template>
  <div id="app">
    <button @click="isVisible = !isVisible">
      {{ isVisible ? "Hide" : "Show" }}
    </button>
    <p v-if="isVisible">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed inventore
      ipsa quae laborum ducimus alias, pariatur quasi error libero voluptates
      aspernatur sapiente quas fugit eum, explicabo expedita minima fuga
      molestias.
    </p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const isVisible = ref(false);

    return { isVisible };
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
