<template>
  <div id="app">
    <p>Mouse position:</p>
    <p>({{ x }}, {{ y }})</p>
  </div>
</template>

<script>
import { useMousePosition } from "./compose/mouseLocation";

export default {
  name: "App",
  setup() {
    const { x, y } = useMousePosition();

    return {
      x,
      y
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
